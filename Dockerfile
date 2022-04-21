FROM nginx:latest
RUN mkdir /opt/www/
COPY ./dist /opt/www/
EXPOSE 80
