const MongoClient = require('mongodb').MongoClient;
const { faker } = require('@faker-js/faker');

const url = 'mongodb://localhost:27017';

const generateBooks = numBooks => {
    const books = [];
    [...Array(numBooks).keys()].forEach(() => {
        books.push({
            title: faker.lorem.words(),
            author: faker.name.firstName(),
            price: faker.commerce.price()
        });
    });
    return books;
};

const generateBookstores = numStores => {
    const stores = [];
    [...Array(numStores).keys()].forEach(() => {
        stores.push({
            name: faker.company.name(),
            address: faker.address.streetAddress(),
            books: generateBooks(3)
        });
    });
    return stores;
};

const connectToMongoDB = async () => {
    try {
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        console.log('Connected to database');

        const db = client.db('bookstore');

        const bookstores = generateBookstores(5);
        const result = await db.collection('stores').insertMany(bookstores);
        console.log('Bookstore information saved to database');
        console.log(result);

        await client.close();
        console.log('Connection closed');
    } catch (err) {
        console.error(err);
    }
};

connectToMongoDB();
