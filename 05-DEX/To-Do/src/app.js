App = {
  loading: false,
  contracts: {},
  tasks: [],
  useBlockchain: false,

  load: async () => {
    await App.initWeb3();
    await App.loadAccount();
    await App.loadContract();
    await App.render();
  },

  // Force direct Ganache HTTP connection to avoid MetaMask network mismatches
  initWeb3: async () => {
    App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
    window.web3 = new Web3(App.web3Provider);
    console.log('Web3 initialized connected to Ganache RPC');
  },

  loadAccount: async () => {
    const accounts = await web3.eth.getAccounts();
    App.account = accounts[0] || null;
    web3.eth.defaultAccount = App.account;
    console.log('Using account:', App.account);
  },

  loadContract: async () => {
    try {
      const todoJSON = await $.getJSON('TodoList.json');
      const networkId = await web3.eth.net.getId();
      console.log('Detected network ID:', networkId);
      const networkData = todoJSON.networks[networkId];
      if (!networkData) throw new Error('Contract not deployed on this network');
      App.contracts.TodoList = new web3.eth.Contract(todoJSON.abi, networkData.address);
      App.useBlockchain = true;
      console.log('Contract loaded at:', networkData.address);
    } catch (err) {
      console.warn(err.message);
      App.useBlockchain = false;
      App.loadLocalTasks();
    }
  },

  loadLocalTasks: () => {
    const stored = localStorage.getItem('todoTasks');
    App.tasks = stored ? JSON.parse(stored) : [
      { id: 1, content: 'Sample task – check out Rescape.io', completed: false }
    ];
  },

  saveLocalTasks: () => {
    localStorage.setItem('todoTasks', JSON.stringify(App.tasks));
  },

  render: async () => {
    if (App.loading) return;
    App.setLoading(true);

    $('#account').text(App.account || 'No account connected');
    $('#networkStatus').text(App.useBlockchain ? 'Using Blockchain (Ganache)' : 'Using Local Storage');
    await App.renderTasks();

    App.setLoading(false);
  },

  renderTasks: async () => {
    let tasks = [];
    if (App.useBlockchain) {
      const count = await App.contracts.TodoList.methods.taskCount().call();
      for (let i = 1; i <= count; i++) {
        const task = await App.contracts.TodoList.methods.tasks(i).call();
        tasks.push({
          id: Number(task.id),
          content: task.content,
          completed: task.completed,
        });
      }
    } else {
      tasks = App.tasks;
    }

    const $template = $('.taskTemplate').clone();
    $('#taskList, #completedTaskList').empty();

    tasks.forEach(t => {
      const $clone = $template.clone();
      $clone.removeClass('taskTemplate').find('.content').text(t.content);
      $clone.find('input')
        .attr('name', t.id)
        .prop('checked', t.completed)
        .off('change')
        .on('change', App.toggleCompleted);

      if (t.completed) {
        $('#completedTaskList').append($clone.show());
      } else {
        $('#taskList').append($clone.show());
      }
    });
  },

  createTask: async () => {
    const content = $('#newTask').val().trim();
    if (!content) {
      alert('Please enter a task');
      return;
    }

    App.setLoading(true);
    try {
      if (App.useBlockchain) {
        const receipt = await App.contracts.TodoList.methods
          .createTask(content)
          .send({ from: App.account });
        console.log('Transaction receipt:', receipt);
      } else {
        const newId = App.tasks.length ? Math.max(...App.tasks.map(t => t.id)) + 1 : 1;
        App.tasks.push({ id: newId, content, completed: false });
        App.saveLocalTasks();
      }
      $('#newTask').val('');
      await App.render();
    } catch (err) {
      console.error(err);
      alert('Error creating task: ' + err.message);
    }
    App.setLoading(false);
  },

  toggleCompleted: async (e) => {
    const id = Number(e.target.name);
    App.setLoading(true);
    try {
      if (App.useBlockchain) {
        const receipt = await App.contracts.TodoList.methods
          .toggleCompleted(id)
          .send({ from: App.account });
        console.log('Transaction receipt:', receipt);
      } else {
        const task = App.tasks.find(t => t.id === id);
        if (task) {
          task.completed = !task.completed;
          App.saveLocalTasks();
        }
      }
      await App.render();
    } catch (err) {
      console.error(err);
      alert('Error toggling task: ' + err.message);
    }
    App.setLoading(false);
  },

  setLoading: (bool) => {
    App.loading = bool;
    $('#loader').toggle(bool);
    $('#content').toggle(!bool);
  }
};

$(() => { $(window).on('load', App.load); });
