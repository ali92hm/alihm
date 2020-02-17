# Deploying using VM

Sometimes k8s is an overkill and you just want to use a VM to run everything. This is the instructions for that.

## Setup

### VM

OS: `Ubuntu 18.04`

Open port `80`, `443`

### Packages

Install the following packages

```
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install nginx -y
sudo apt install docker.io -y
```

### Running the container

Start docker

`sudo systemctl start docker`

Copy `run.sh` to the host machine

```
chmod +x run.sh
./run.sh
```

Make sure you can access the container on localhost:3000

`curl -I localhost:3000`

Add the following line to the cron job `sudo crontab -e`

`@reboot /home/ali92hm/run.sh`

### Setting up nginx

Copy `alihm.conf` to `/etc/nginx/conf.d/alihm.conf`

`nginx -t && nginx -s reload`

Now you should be able to access the website without https

### Setting up certbot

Run the following:

`sudo certbot --nginx -d alihm.net -d www.alihm.net`

#### Certbot renewal

Add the following to `sudo crontab -e`

`0 12 * * * /usr/bin/certbot renew --quiet`
