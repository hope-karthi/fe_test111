# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./ 
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# CMD ["sh", "-c", "ls;rm -r src node_modules webpack;rm Dockerfile package-locak.json package.json tsconfig.json;ls"]
CMD ["sh", "-c", "npm run build;npm install -g serve;rm -r src node_modules webpack;rm Dockerfile package-lock.json package.json tsconfig.json;serve -s build"]
# start app