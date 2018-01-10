FROM node:9.3.0
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/ 
COPY ./ /app/
RUN npm install --production
CMD [ "npm","start"]