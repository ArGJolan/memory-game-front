# Memory game front

## Build & Run

Your app will be available at [http://localhost:8080](http://localhost:8080)

### With node

```shell
npm install
npm run serve
```

### With Docker

```shell
docker build -t memory-game-front . -f Dockerfile.local
docker run -d --name memory-game-front -p 8080:80 memory-game-front
```
