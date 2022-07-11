# Docker course

## Resources

https://collectednotes.com/barckcode/docker-cheat-sheet

## Docker

$ mkdir dockerdata (creo un directorio en mi máquina)
$ docker run -d --name db mongo
$ docker ps (veo los contenedores activos)
$ docker exec -it db bash (entro al bash del contenedor)
$ mongo (me conecto a la BBDD)
$ docker volume ls (listo los volumes)
$ docker volume create dbdata (creo un volume)
$ docker run -d --name db --mount src=dbdata,dst=/data/db mongo (corro la BBDD y monto el volume)
$ docker inspect db (veo la información detallada del contenedor)
$ mongo (me conecto a la BBDD)
$ docker run -d --name copytest ubuntu tail -f /dev/null (corron un ubuntu y le agrego el tail para que quede activo)
$ docker exec -it copytest bash (entro al contenedor)
$ mkdir testing (creo un directorio en el contenedor)
$ docker cp prueba.txt copytest:/testing/test.txt (copio el archivo dentro del contenedor)
$ docker cp copytest:/testing localtesting (copio el directorio de un contenedor a mi máquina) con “docker cp” no hace falta que el contenedor esté corriendo
$ docker image ls (veo las imágenes que tengo localmente)
$ docker pull ubuntu:20.04 (bajo la imagen de ubuntu con una versión específica)
$ docker build platziapp . (creo la imagen local)
$ docker image ls (listo las imagenes locales)
$ docker run --rm -p 3000:3000 platziapp (creo el contenedor y cuando se detenga se borra, lo publica el puerto 3000)
$ docker ps (veo los contenedores activos)
$ docker ps -a (veo todos los contenedores de mi máquina)
$ docker container prune (borra todos los contenedores inactivos)
$ docker rm -f $(docker ps -aq) (borra todos los contenedores que estén corriendo o apagados)
$ docker network ls (lista todas las redes)
$ docker volume ls (lista todos los volumes)
$ docker image ls (lista todas las imágenes)
$ docker system prune (borra todo lo que no se esté usando)
$ docker run -d --name app --memory 1g platziapp (limito el uso de memoria)
$ docker stats (veo cuantos recursos consume docker en mi sistema)
$ docker inspect app (puedo ver si el proceso muere por falta de recursos)
$ docker build -t loop . (construyo la imagen)
$ docker run -d --name looper loop (corro el contenedor)
$ docker stop looper (le envía la señal SIGTERM al contenedor)
$ docker ps -l (muestra el ps del último proceso)
$ docker kill looper (le envía la señal SIGKILL al contenedor)
$ docker exec looper ps -ef (veo los procesos del contenedor)
$ docker build -t prueba .(creo la imagen)
$ docker run -d --rm --name app prueba (corro el contenedor)
en el archivo .dockerignore puedo poner todo lo que no quiero que copie del contexto de build
$ docker exec -it app bash (entro al contenedor y verifico que no se haya copiado lo que está en el .dockerignore)
$ docker build -t prodapp -f Dockerfile . (ahora le especifíco el Dockerfile)
$ docker run -d --name prod prodapp

## Docker compose

$ docker-compose up -d (crea todo lo declarado en el archivo docker-compose.yml)
$ touch docker-compose.override.yml (creo el archivo override)
$ docker-compose up -d (crea los servicios/contenedores)
$ docker-compose exec app bash (entro al bash del contenedor app)
$ docker-compose ps (veo los contenedores del compose)
$ docker-compose up -d --scale app=2 (escalo dos instancias de app, previamente tengo que definir un rango de puertos en el archivo compose)
$ docker-compose down (borro todo lo creado con compose)

## Inception

$ docker run -it --rm -v /var/run/docker.sock:/var/run/docker.sock docker:19.03.12
$ docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock -v $(wich docker):/bin/docker wagoodman/dive:latest prodapp
