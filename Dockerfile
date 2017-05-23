FROM node:7.10.0
EXPOSE 5000
WORKDIR /app
COPY . /app
RUN npm install && npm cache clean && npm run build
CMD npm start