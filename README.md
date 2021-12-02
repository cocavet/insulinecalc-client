Connect to ssh
    ssh -i "meyorecipes.pem" ec2-user@ec2-35-181-59-63.eu-west-3.compute.amazonaws.com   

Into ssh
    cd /backofficeMeyo/
    nvm use v14.8.0
    sudo git stash
    sudo git pull
    cd ..
    sudo chmod 777 -R backofficeMeyo/
    cd backofficeMeyo/
    npm run build
    pm2 restart all