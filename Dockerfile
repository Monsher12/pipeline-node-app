FROM node:lts
COPY . /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
EXPOSE 8889
CMD ["npm", "start"]

