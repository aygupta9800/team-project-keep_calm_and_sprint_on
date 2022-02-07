chmod 400 cmpe202-group-project.pem   
ssh -i "cmpe202-group-project.pem" ec2-user@ec2-18-222-136-153.us-east-2.compute.amazonaws.com

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash;

. ~/.nvm/nvm.sh;

nvm install 14;

node -v
npm -v

sudo yum update -y;
sudo yum install git -y;

ssh-keygen -t rsa -b 4096 -C ayushgupta9800@gmail.com;

#To copy ssh key
# cat ~/.ssh/id_rsa.pub

#need to manually set ssh key into github repo
git clone git@github.com:gopinathsjsu/team-project-keep_calm_and_sprint_on.git

cd team-project-keep_calm_and_sprint_on/airline-reservation/backend/

npm i

npm start