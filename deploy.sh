#!/bin/bash
echo "Starting the deployment process"

#pull from the branch
git reset --hard HEAD

git pull origin main

#install deps
npm install 

#build for prod
npm run build

#restart nginx
sudo systemctl restart nginx

echo "That looks good, code deployed with success :)"