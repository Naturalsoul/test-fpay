FROM node:10.23-alpine

WORKDIR /usr/src/app

#Argumentos
ARG ARG_WEB_PORT=8080

#Variables de ambiente
ENV PORT=${ARG_WEB_PORT}

# Baja últimas dependencias
COPY . .
RUN rm -rf node_modules
RUN npm install

EXPOSE ${ARG_WEB_PORT}

CMD ["npm","start"]