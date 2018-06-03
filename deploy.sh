docker build -t gcr.io/thelittlepedestrians-206020/tlp-back:latest .
gcloud docker -- push gcr.io/thelittlepedestrians-206020/tlp-back:latest
kubectl delete service back
kubectl delete deployment back
kubectl apply -f k8s
