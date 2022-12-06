FROM node:16.14.2-alpine
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]