FROM node:18-alpine
WORKDIR /server
COPY server.js .
EXPOSE 5000
CMD [ "node", "server.js"]
