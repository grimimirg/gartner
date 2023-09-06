FROM raspbian/stretch:latest
RUN apt-get update && apt-get install -y python3 nginx
EXPOSE 80 5000

COPY /gartner-fe/dist/* /var/www/html/gartner
COPY /gartner-be/*.py /python/gartner

CMD [ "service nginx start", "cd /python/gartner && flask run" ]
