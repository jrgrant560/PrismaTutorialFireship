# Prisma setup (terminal commands)

"npx install primsa": install prisma

"npx prisma init": adds env and schema files
    edit env file: change path to DB
    edit schema file: set provider "as mysql"

"npx prisma db pull": pulls schema of DB

"npx prisma migrate": updates schema changes on the db

"npx prisma generate": generates the client library to interact with the DB on the server