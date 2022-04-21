
# 清除Dockerfile
if [ -d "./dist" ]; then
  rm -rf ./dist
fi

if [ -f "./Dockerfile" ]; then
  rm -f ./Dockerfile
fi
npm run build
cp ./dist/config.json ./resources/conf

echo "FROM nginx:latest" >> ./Dockerfile
echo "RUN mkdir /opt/www/" >> ./Dockerfile
echo "COPY ./dist /opt/www/" >> ./Dockerfile
echo "EXPOSE 80" >> ./Dockerfile

docker build -t image_admin_base:latest .
cd ./resources
docker-compose up -d
// 清除所有未使用的镜像&容器
echo y docker system prune
