# How to create Virtual Machine and take their snapshots

## step 1 : Download the template for the Vm

### →Go to ubuntu website copy the download link url by pressing right click on the download button and copy that url

### →open proxmox dashboard select local(name) ull see iso templates for vms and ct templates for cts as we are using vms will click on iso

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%201.png)

### →click on download from url and paste that url here
→ your download will start and there will be an template as we can see in the above images

## step 2: click create VM at top right corner of proxmox dashboard inside the main node

![Screenshot from 2025-08-14 15-09-22.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/Screenshot_from_2025-08-14_15-09-22.png)

## step 3 : vm configuration

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%202.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%203.png)

                               → add that iso imaage template from dropdown

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%204.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%205.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%206.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%207.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%208.png)

![Screenshot from 2025-08-14 15-56-28.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/Screenshot_from_2025-08-14_15-56-28.png)

## step 4 : start the vm

![Screenshot from 2025-08-14 15-59-10.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/Screenshot_from_2025-08-14_15-59-10.png)

## step 5 : Go to console start installing vm

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%209.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2010.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2011.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2012.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2013.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2014.png)

![Screenshot from 2025-08-14 16-06-28.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/Screenshot_from_2025-08-14_16-06-28.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2015.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2016.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2017.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2018.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2019.png)

## →now wait until it get installed

## step 6 : reboot vm after it is installed

![Screenshot from 2025-08-14 16-14-43.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/Screenshot_from_2025-08-14_16-14-43.png)

## step 7 : Go to hardware and remove media disk

![Screenshot from 2025-08-14 16-17-04.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/Screenshot_from_2025-08-14_16-17-04.png)

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2020.png)

### →now come back to console and press enter

## step 8 : create template of this vm

## →creating template of this vm allows us to to clone as much as vm want by a single vm template

![Screenshot from 2025-08-14 16-21-19.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/Screenshot_from_2025-08-14_16-21-19.png)

## step 9 : clone the vm to get more vms

![Screenshot from 2025-08-14 16-23-13.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/Screenshot_from_2025-08-14_16-23-13.png)

## step 10 : cloning vm

![image.png](How%20to%20create%20Virtual%20Machine%20and%20take%20their%20snaps%2024f1b364d397809f9405ddc3631fb5bf/image%2021.png)