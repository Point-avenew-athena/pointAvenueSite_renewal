set -e 

ecrHost='367893350766.dkr.ecr.ap-southeast-1.amazonaws.com'
imageTag='0.0.45'
localImage="pasite:${imageTag}"
remoteImage="${ecrHost}/${localImage}"

docker build -t ${localImage}  -f ./deploy/prod/Dockerfile .
docker tag ${localImage} ${remoteImage}

aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin "${ecrHost}"
docker push ${remoteImage}

kubectl apply -f ./deploy/prod/deployment.yaml
kubectl apply -f ./deploy/prod/service.yaml
