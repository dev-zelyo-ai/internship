# How to create Virtual Machine and take their snapshots

---

## step 1 : Download the template for the Vm

### → Go to ubuntu website copy the download link url by pressing right click on the download button and copy that url

### → Open proxmox dashboard select local(name) you'll see iso templates for vms and ct templates for cts. As we are using vms we will click on iso.

![image.png](images/image.png)

![image.png](images/image%201.png)

### → Click on download from url and paste that url here
→ Your download will start and there will be a template as we can see in the above images.

## step 2: Click create VM at top right corner of proxmox dashboard inside the main node

![Screenshot from 2025-08-14 15-09-22.png](images/Screenshot_from_2025-08-14_15-09-22.png)

## step 3 : VM configuration

![image.png](images/image%202.png)

![image.png](images/image%203.png)

→ Add that iso image template from dropdown

![image.png](images/image%204.png)

![image.png](images/image%205.png)

![image.png](images/image%206.png)

![image.png](images/image%207.png)

![image.png](images/image%208.png)

![Screenshot from 2025-08-14 15-56-28.png](images/Screenshot_from_2025-08-14_15-56-28.png)

## step 4 : Start the VM

![Screenshot from 2025-08-14 15-59-10.png](images/Screenshot_from_2025-08-14_15-59-10.png)

## step 5 : Go to console and start installing VM

![image.png](images/image%209.png)

![image.png](images/image%2010.png)

![image.png](images/image%2011.png)

![image.png](images/image%2012.png)

![image.png](images/image%2013.png)

![image.png](images/image%2014.png)

![Screenshot from 2025-08-14 16-06-28.png](images/Screenshot_from_2025-08-14_16-06-28.png)

![image.png](images/image%2015.png)

![image.png](images/image%2016.png)

![image.png](images/image%2017.png)

![image.png](images/image%2018.png)

![image.png](images/image%2019.png)

## → Now wait until it gets installed

## step 6 : Reboot VM after it is installed

![Screenshot from 2025-08-14 16-14-43.png](images/Screenshot_from_2025-08-14_16-14-43.png)

## step 7 : Go to hardware and remove media disk

![Screenshot from 2025-08-14 16-17-04.png](images/Screenshot_from_2025-08-14_16-17-04.png)

![image.png](images/image%2020.png)

### → Now come back to console and press enter

## step 8 : Create template of this VM

→ Creating a template of this VM allows us to clone as many VMs as we want from a single VM template.

![Screenshot from 2025-08-14 16-21-19.png](images/Screenshot_from_2025-08-14_16-21-19.png)

## step 9 : Clone the VM to get more VMs

![Screenshot from 2025-08-14 16-23-13.png](images/Screenshot_from_2025-08-14_16-23-13.png)

## step 10 : Cloning VM

![image.png](images/image%2021.png)
