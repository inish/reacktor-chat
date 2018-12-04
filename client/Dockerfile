FROM node:10

ENV HOMEDIR=/home
ENV PROJECTDIR=/home/chat
ENV REACTDIR=/home/chat/src
ENV PUBLICDIR=/home/chat/public

RUN mkdir -p $PROJECTDIR
WORKDIR $PROJECTDIR
COPY package.json $PROJECTDIR


RUN npm install


ADD src $REACTDIR
ADD public $PUBLICDIR

EXPOSE 3000

CMD [ "npm", "start" ]
