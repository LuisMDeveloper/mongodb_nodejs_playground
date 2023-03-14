# Multiple MongoDB Inserts with Node.js

This code demonstrates how to insert multiple documents into a MongoDB collection using Node.js. It uses the mongodb driver and the faker.js library to generate sample data.

## Requirements
- Node.JS
- MongoDB

## Installation

1. Clone this repository
2. Install dependencies: `npm install`
3. Start MongoDB
4. Run the code: `node mongodbInsertMany.js`

## Code

The code is contained in `mongodbInsertMany.js`. It connects to a MongoDB database, generates sample data using `faker.js`, and inserts multiple documents into a collection.

The `generateBooks()` function creates an array of books with random titles, authors, and prices.

The `generateBookstores()` function creates an array of bookstores with random names, addresses, and 3 books generated with `generateBooks()`.

The `connectToMongoDB()` function establishes a connection with the MongoDB database and inserts the generated bookstores into a collection named `stores` using the `insertMany()` method.

## Usage

You can use this code as a starting point for your own Node.js and MongoDB projects that involve inserting multiple documents into a collection. Feel free to modify the code to suit your needs.
