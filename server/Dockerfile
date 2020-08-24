FROM node:12

# ENV NODE_ENV

WORKDIR /server 
COPY . .

RUN npm install
RUN npm install -g nodemon

CMD ["npm", "start"]
