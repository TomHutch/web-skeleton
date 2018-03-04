Web Skeleton
==============

This is web-app skeleton, to be used as a reference or as a seed for a new project.
Concepts include: containerisation, application state management, ui components, database integration, hot-reloading, linting, bundling, transpilation, styling and unit testing.

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
