# Docker command for building the app

## Frontend

### Building

Point to the corresponding directory

`bash

docker build -t miam/frontend .

`
### Running

`bash

docker run -d -p 4200:80 --name miam_frontend miam/front

`

## Backend


### Building

`bash

  docker build -t miam/backend .

`

### Running

`bash
 
 docker run -p 8080:8080 -d --name miam_backend miam/backend
 
`

## Databases: Postgres

- First, We need to create a volume for store data.

`bash

  docker create -v /var/lib/postgresql/data --name miamData alpine
  
`
- Run the postgres container, if it not exit a pull from dockerHub will be done

`bash

  docker run -p 5432:5432 --name miamDb -e POSTGRES_USER=miam -e POSTGRES_PASSWORD=miam -d --volumes-from miamData postgres

`

