FROM registry.ehualu.com/common/nginx:1.20

LABEL maintainer="ehl_oc@ehualu.com"

WORKDIR /opt/

RUN mkdir /opt/www/

#拷贝代码
COPY dist /opt/www
