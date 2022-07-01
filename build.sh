#!/bin/bash
IMAGE=$1
VERSION=$2
STACK=$3
BRANCH=$4
BUILD_DIR=./build/${STACK}
CONF_DIR=${BUILD_DIR}/conf
CONF_CFG=./resources/conf/conf.cfg
baseDir=$(pwd)
#BEGIN
echo "1. clean build data"
rm -rf ${BUILD_DIR}
echo "2. init build data"
mkdir -p ${BUILD_DIR}
#conf.cfg
#conf.cfg
if [ ${BRANCH} != "test" -a ${BRANCH} != "master" ]; then
  CONF_CFG=./resources/conf/conf-${BRANCH}.cfg
fi
cp ${CONF_CFG} ${BUILD_DIR}/conf.cfg
# docker-compose.yml
sed "s|image_dest_replace|${IMAGE}:${VERSION}|" ./resources/docker-compose.yaml > ${BUILD_DIR}/docker-compose.yaml
#install.sh
# cp ./resources/install.sh ${BUILD_DIR}/install.sh
# conf dir
mkdir -p ${CONF_DIR}
cp ./src/config/prod.json ${CONF_DIR}/config.json
sed -i "s|{{VERSION}}|${VERSION}|g" ${CONF_DIR}/config.json

# mkdir -p ${CONF_DIR}/config
# cp ./resources/conf/config/application-pro.properties  ${CONF_DIR}/config/application-pro.properties
#END
sed "s|image_dest_replace|${IMAGE}|" ./resources/skaffold.yaml > skaffold.yaml
#create tar
echo "3. create tar of build data"
if [ ${BRANCH} != "dev" ]; then
  DATE=$5
  cd ${BUILD_DIR}
  tar czf ${STACK}_${VERSION}_${DATE}.tar.gz *
fi
#complie
echo "4. complie"
cd ${baseDir}
cnpm i
cnpm run build