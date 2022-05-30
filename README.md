# Spartan Projects

- OPENJDK-11-JRE
- JENKKINS
- GIT 
- DOCKER 
- KUBECTL 

## Objetivo
Criar pipeline de **Integração Contínua** para permitir que cada feature seja testada antes de ir para produção. 

## OPENJDK INSTALL

```shell
$ sudo apt update
$ sudo apt install openjdk-11-jre
$ java -version
```

## JENKINS INSTALL 

https://www.jenkins.io/doc/book/installing/linux/#weekly-release-3

```console
useradd -m -c "Jenkins User" -s /bin/bash jenkins_user
mkdir /var/local/jenkins
sudo ls /var/local/ -lh
sudo chown -R jenkins_user: /var/local/jenkins/
sudo ls /var/local/ -lh
sudo chmod -R 775 /var/local/jenkins/
ls /var/local/ -lh
wget https://get.jenkins.io/war/2.349/jenkins.war 
mv jenkins.war /home/jenkins_user/
cd /home/jenkins_user/

su jenkins_user -c "java -DJENKINS_HOME=/var/local/jenkins/ -jar /home/jenkins_user/jenkins.war --httpPort=8080 &> /dev/null &"
```

## CREATE JOB IN JENKINS


## GIT INSTALL 
```shell
apt-get install git 
```

## DOCKER INSTALL 
```console

- Option 1
curl -fsSL https://get.docker.com | bash

- Option 2
apt-get install docker.io
```

- Add user created in Docker group 
    - usermod -aG docker jenkins_user 

- Configure docker socket permission
    - chmod 666 /var/run/docker.sock


## KUBECTL INSTALL 

## KUBERNETES CLUSTER INSTALLATION