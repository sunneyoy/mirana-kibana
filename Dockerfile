FROM node:9.3.0
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/ 
COPY ./ /app/
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install --production
CMD [ "npm","start"]