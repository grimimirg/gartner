FROM raspbian/stretch:latest

RUN apt-get update && apt-get install -y python3 nginx

EXPOSE 80 5000
