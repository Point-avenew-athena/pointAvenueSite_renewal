set -e 

ecrHost='367893350766.dkr.ecr.ap-northeast-2.amazonaws.com'
imageTag='0.0.41'
localImage="pasite:${imageTag}"
remoteImage="${ecrHost}/${localImage}"

docker build -t ${localImage} --build-arg ENV=development -f deploy/dev/Dockerfile .
docker tag ${localImage} ${remoteImage}

aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin "${ecrHost}"
docker push ${remoteImage}

kubectl apply -f deploy/dev/deployment.yaml
kubectl apply -f deploy/dev/service.yaml
