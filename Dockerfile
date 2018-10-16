
FROM nginx

#指定工作目录
WORKDIR /app
#将当前目录下的左右文件移到/var/www/html目录下
COPY . /var/www/html
#声明容器运行时提供的服务端口
EXPOSE 80

# 以前台方式启动nginx
CMD ["nginx","-g","daemon off;"]
