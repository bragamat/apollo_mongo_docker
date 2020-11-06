FROM mongo:latest

RUN apt-get update && \
    apt-get install -y nodejs

ADD . /wmong
WORKDIR /wmong
