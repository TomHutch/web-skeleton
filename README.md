Web Skeleton
==============

This is web-app skeleton, to be used as a reference or as a seed for a new project.
Concepts include: containerisation, application state management, ui components, database integration, hot-reloading, linting, bundling, transpilation, styling, unit testing, node debugging, structured logging and skeletons.

## Setup

This project requires Docker to run.

```bash
# Start-up project
docker-compose up -d

# Start an interactive terminal session on container
docker ps
docker exec -it {CONTAINER_ID} /bin/bash

# Run tests
npm test
```

## Debugging

Port 9229 for the node server  
Port 9228 for debugging tests

Best used with the [Nodejs v8 --inspector Manager Chrome addon](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj?hl=en) to catch the test debugger (with the Close Automatically option switched on).
