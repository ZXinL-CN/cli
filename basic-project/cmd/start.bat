@REM 项目启动脚本

start cmd /k "cd server_dist&&node -v&&npm -v&&node main.js"

start cmd /k "cd client_dist&&node -v&&npm -v&&http-server -o"