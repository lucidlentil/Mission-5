FROM node:18.12.1-buster

WORKDIR /app

COPY package*.json .

RUN npm install
RUN npm install react-scripts@3.0.1 -g

COPY ./public/index.html .

COPY . .

RUN npm run build

EXPOSE 3000 

CMD ["npm", "start"]