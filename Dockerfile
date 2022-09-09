FROM node

WORKDIR /app 

COPY . .
# эквивалентно COPY . /app

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]