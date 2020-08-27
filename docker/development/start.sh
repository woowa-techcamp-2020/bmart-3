docker-compose down
docker-compose build --no-cache
docker-compose up -d

cd ../../client
npm install
npm start
