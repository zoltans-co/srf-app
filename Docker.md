# im-ui docker dokumentation

## Building the docker image from the Dockerfile
    
``` bash
docker buildx build --push --platform linux/amd64 -t zoltansco/srf:srf-app-2023.1 -f Dockerfile .
```
``` bash
docker push zoltansco/srf:srf-app-2023.2
```
``` bash
docker pull zoltansco/srf:srf-app-2023.2
```

## Build the docker image from the Dockerfile locally

``` bash
docker build -t im-ui:1.0.1 .
```

## Running the docker image

``` bash
docker run \
--name srf-app  \
--publish 7000:8080 \
--restart unless-stopped  \
-d -it zoltansco/srf:srf-app-2023.1
```

``` bash
docker run \
--name srf-app  \
--restart unless-stopped  \
--publish 8000:8080 \
-d -it zoltansco/srf:srf-app-2023.1
```