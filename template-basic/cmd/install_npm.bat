@REM 安装npm依赖

start cmd /k"cd server_dist&&node -v&&npm config set registry https://registry.npm.taobao.org/&&npm config get registry&&npm i http-server -g&&npm i&&exit"