echo "===Stop current docker container if there's any===" 
echo ""
docker stop ponari-website > /dev/null 2>&1 
docker rm ponari-website > /dev/null 2>&1
echo "===Building docker images==="
echo ""
docker build -t ponari:latest . > /dev/null 2>&1
echo "===Running container==="
echo ""
docker run -p 80:80 --name ponari-website -d ponari > /dev/null 2>&1
sleep 5
echo "===Test access==="
echo ""
curl localhost:80 | head