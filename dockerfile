FROM node:20-alpine

# Create app directory
WORKDIR /src/app

COPY ./ ./

RUN npm install --force

RUN npm run build

CMD [ "npm", "dev" ]

EXPOSE 5000