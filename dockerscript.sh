echo "===Stop current docker container if there's any===" 
echo ""
docker stop ponari-website > /dev/null 2>&1 
docker rm ponari-website > /dev/null 2>&1
echo "===Building docker images==="
echo ""
docker build -t ponari:latest . 
echo "===Running container==="
echo ""
docker run -p 80:3000 --name ponari-website -d ponari > /dev/null 2>&1
sleep 5
echo "===Test access==="
echo ""
curl localhost:80 | head