# E-Commerce Backend 
> Backend API for an e-commerce site built with Node.js/Express and Postgres.

## General Information
- Backend API for an e-commerce site built with Node.js and Express
- Endpoint for listing products
- Provides setup for Postgres database

## Technologies Used
#### Server
- `node.js` - version 16.15.1
- `npm` - version 8.11.0

#### Database
- `psql` (PostgreSQL) - version 14.0

## Setup
To run locally, first install node_modules:

```
npm install
```
To run psql container:
```
docker-compose -f docker-compose.yml up -d
```

Open a PostgreSQL database. Schema with tables is located in `db/init.sql`. E.g., generate tables by running:
```
cd db
cat init.sql | psql -h [PGHOST] -U [PGUSER] -d [PGDATABASE] -w [PGPASSWORD]
```
Where 'PGHOST', 'PGUSER', 'PGDATABASE', and 'PGPASSWORD' are your respective Postgres host, user, database, and password values.

Sample values can be found in `.env` file.

Then run the app: 

```
npm run build
npm run start
```
