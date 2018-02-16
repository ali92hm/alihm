# Initializing helm on a cluster
helm init

# Installing kube-lego for Let's encrypt
kubectl create namespace cert-management
helm install --name cert-tls \
  --namespace cert-management \
  --set config.LEGO_EMAIL=ali@alihm.net \
  --set config.LEGO_URL=https://acme-v01.api.letsencrypt.org/directory \
    stable/kube-lego

# Install ingress controller
kubectl create namespace public
helm install --name ingress \
  --namespace public \
  stable/nginx-ingress

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
