#!/bin/bash
LOCAL_PATH=$(pwd)
CONFIG_FILE=conf.cfg
CONF_DIR=${LOCAL_PATH}/conf

function getvalue() {
    # shellcheck disable=SC2002
    value=$(cat ${CONFIG_FILE} | grep "$1" | awk -F "=" '{print $2}')
}

function modify_config() {
  for key in $1;
  do
    # shellcheck disable=SC2002
    getvalue "$key"
    if [ "$value" != "" ];then
      sed -i "s|{{${key}}}|${value}|g" "$2"
    fi
  done
}

echo "install config.json ..."
modify_config "GATEWAY_URL APPKEY" "${CONF_DIR}/config.json"

echo "install casclient config file ..."
modify_config "USERCENTER_FRONT_URL REDIS_SENTINEL_HOSTS PORTAL_URL" "${CONF_DIR}/config/application-pro.properties"

echo "OK"
