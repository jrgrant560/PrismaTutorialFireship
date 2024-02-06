const express = require('express');
const app = express();
const port = 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()



// retrieves all actors with last name starting with 'C'
async function fetchActors() {
    let search = await prisma.actor.findMany({
        where: {
            last_name: {
                startsWith: 'C'
            }
        }
    });

    return { actors: search };
}

async function runActorSearch() {
    let result = await fetchActors();
    console.log(result);
}

// fetches all customers with 3 filters
// last name starts with 'C'; address_id is between 10 and 100; active is false
async function fetchCustomers() {
    let search = await prisma.customer.findMany({
        where: {
            last_name: {
                startsWith: 'C'
            },
            address_id: {
                gt: 10,
                lt: 100
            },
            active: false
        }
    })


    return { customers: search };
}

async function runCustomerSearch() {
    let result = await fetchCustomers();
    console.log(result);
}

// fetches all cities with 2 filters
// city name starts with 'R'; country_id is 103 (United States)
async function fetchCities() {
    let search = await prisma.city.findMany({
        where: {
            city: { startsWith: 'R' },
            country_id: { equals: 103 }
        }
    })

    return { cities: search };
}

async function runCitySearch() {
    let result = await fetchCities();
    console.log(result);
}

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    runCitySearch();
});
