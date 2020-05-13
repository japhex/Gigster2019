FROM node:12
WORKDIR /api
COPY package.json /api
RUN npm install
COPY . /api
#EXPOSE 3006
CMD npm start