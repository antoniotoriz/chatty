# chatty

A chat application built using Golang and React. 

## Client (React)

Get in client folder

```
cd client
```

### Starting the React client

Install dependencies

```
yarn install
```

Start react

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Open a new terminal to run the GO server in.

## Server

Get in server folder

```
cd server
```

### Add .env file

Add file to root of server folder

```
touch .env
```

then copy and paste following in .env file

```
PORT=8000
HOST=localhost
DB_URL=mongodb://127.0.0.1:27017
MONGODB_DATABASE=local
```


### Installtion

This will Install all the dependencies recursively. 

```
go get -d ./...
```

### Starting the GO server

Use the below command to create executable and the run executable.

```
go build
```

Run newly created file

```
go run chatty
```

Open [http://localhost:8000](http://localhost:8000) to view the json response of the server.