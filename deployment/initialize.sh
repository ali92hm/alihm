
kubectl create namespace alihm
helm install --name alihm-prod \
  --namespace alihm \
  alihm

helm install --name alihm-staging \
  --namespace alihm \
  --set image.tag=latest \
  --set image.replicaCount=1 \
  --set ingress.host=staging.alihm.net \
  --set ingress.redirectWWW=false \
  alihm
