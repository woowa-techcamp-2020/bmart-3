cd ../../../client
npm install
npm run build
cd ../docker/deploy/public
docker-compose down
docker-compose build --no-cache
docker-compose up -d
