#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Usage: $0 <build|run|stop|kill>"
  exit 1
fi

case "$1" in
  "build")
    echo "Building Docker image..."
    sudo docker build -t cartel-api_cocaines_ms -f ./apps/cocaines/Dockerfile .
    ;;
  "run")
    echo "Running Docker container..."
    sudo docker run -p 3000:3000 -d --name cartel-api_cocaines_ms cartel-api_cocaines_ms
    ;;
  "stop")
    echo "Stopping Docker container..."
    sudo docker stop cartel-api_cocaines_ms
    ;;
  "kill")
    echo "Killing Docker container..."
    container_id=$(sudo docker ps -q --filter ancestor=cartel-api_cocaines_ms)
    if [ -n "$container_id" ]; then
      sudo docker kill "$container_id"
      echo "Container killed."
      echo "Deleting Docker container..."
      sudo docker rm "$container_id"
      echo "Container deleted."
    else
      echo "No running container found to kill."
    fi
    ;;
  *)
    echo "Invalid argument. Use: $0 <build|run|stop|kill>"
    exit 1
    ;;
esac

exit 0
