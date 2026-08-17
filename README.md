# DevOps Docker Task

## Student Information
Name: YOUR NAME HERE
Student ID: YOUR STUDENT ID HERE
Course: YOUR COURSE NAME HERE

## Application Description
A simple Node.js + Express web application that displays student information
and confirms it is running inside a Docker container. It serves a single
static HTML page on port 3000.

## Technologies Used
- Git
- GitHub
- Docker
- Docker Hub
- Node.js (Express)

## Dockerfile Explanation
- `FROM node:20-alpine` — uses a small, official Node.js 20 image as the base.
- `WORKDIR /app` — sets `/app` as the working directory inside the container.
- `COPY package*.json ./` — copies dependency manifests first so Docker can
  cache the `npm install` layer and avoid reinstalling on every code change.
- `RUN npm install` — installs the app's dependencies (Express).
- `COPY . .` — copies the rest of the application source code into the image.
- `EXPOSE 3000` — documents that the app listens on port 3000.
- `CMD ["npm", "start"]` — the command that runs when the container starts.

## Docker Commands
```bash
# Build the image
docker build -t <dockerhub-username>/devops-task:v1 .

# List local images
docker images

# Run the container
docker run -d -p 3000:3000 --name devops-task <dockerhub-username>/devops-task:v1

# Check running containers
docker ps

# View logs
docker logs devops-task

# Inspect container details
docker inspect devops-task

# Log in to Docker Hub
docker login

# Tag the image (if not already tagged during build)
docker tag devops-task <dockerhub-username>/devops-task:v1

# Push to Docker Hub
docker push <dockerhub-username>/devops-task:v1

# Pull from Docker Hub (verification)
docker pull <dockerhub-username>/devops-task:v1
```

## Docker Hub
Docker Hub Repository: https://hub.docker.com/r/<dockerhub-username>/devops-task

## How to Run
```bash
docker pull <dockerhub-username>/devops-task:v1
docker run -d -p 3000:3000 --name devops-task <dockerhub-username>/devops-task:v1
```
Then open http://localhost:3000 in your browser.

## Screenshots
1. GitHub repository
2. Dockerfile
3. Docker image
4. Running container
5. Application in browser
6. Docker Hub repository
7. Docker pull
