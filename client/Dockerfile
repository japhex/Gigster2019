FROM node:12
WORKDIR /client
COPY package.json /client
RUN npm install
COPY . /client
#EXPOSE 3005
CMD yarn start