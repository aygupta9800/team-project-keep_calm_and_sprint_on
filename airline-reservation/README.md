Steps to start the project

1. Install node 14 in system using nvm
cmd:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 14

2. create the Mongodb database and set its connection uri in backend dbconnection file

3. Go to frontend folder and install package dependencies
cmd: cd ./frontend; npm i;

4. Start the frontend serve on port 3008
cmd: npm start

5. In new tab, go to backend folder and install backend pakage dependencies
cmd: cd ./backend; npm install;

6. Run the backend server on port 3009
cmd: npm start
