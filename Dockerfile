FROM debian

RUN apt-get update && \
    apt-get install -y \
    iproute2 \
    iputils-ping \
    net-tools \
    python3 \
    nginx

CMD nginx -g 'daemon off;' # && cd /python/gartner && flask run

EXPOSE 80 5000

COPY gartner-fe/dist/* /var/www/html/gartner
COPY gartner-be/*.py /python/gartner
