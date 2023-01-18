FROM node:16.17.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV MONGO_USER=root
ENV MONGO_PASSWORD=pass

EXPOSE 3001

CMD ["node", "server.js"] 


