## Flow chart

![Flow chart](https://github.com/stick2yourmind/backend_challenge/blob/main/doc/data_flow.PNG?raw=true)
## Error middleware

![Error middleware](https://github.com/stick2yourmind/backend_challenge/blob/main/doc/error_middleware_chart.png?raw=true)



## Development


Docker desktop is needed to run the next scripts

[Docker desktop link](https://www.docker.com/products/docker-desktop/)

To compose a container with SQL Server, create a database and apply an initial seed

```
  npm run dev:db:start
```

To run the server with watch mode

```
  npm run dev:start
```


## Deployment

To build the project, compose a docker container with SQL Server, create a database, apply an initial seed and run the built server

```
  npm run prod:deploy
```

## Testing


To compose a container with SQL Server, create a database for testing

```
  npm run test:start
```

## Request

ping:

```
curl -X GET http://localhost:3010/ping
```

get dogs:
```
curl -X GET http://localhost:3010/dog
```

get dogs ordered by attribute with pagination:
```
http://localhost:3010/dog?&pageSize=2&attribute=name&pageNumber=1&order=desc
```

## Features

- Typescript
- Error & Not found middleware
- Errors, warning and information logs at log folder
- Eslint with standard library styles format used
- Script for building & start server on production
- Script for start server on development
- Validation of request.body & request.query data
- Testing
