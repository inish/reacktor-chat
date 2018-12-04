FROM node:10

ENV HOMEDIR=/home
ENV SERVERDIR=/home/chat/server

RUN mkdir -p $SERVERDIR
WORKDIR $SERVERDIR
COPY package.json $SERVERDIR


RUN npm install

ADD . $SERVERDIR

EXPOSE 3231

CMD [ "npm", "start" ]