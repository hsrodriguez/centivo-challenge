const express = require('express');
const app = express();

const mongo = require('mongodb');
const url = 'mongodb://root:password@localhost:27017';
const database = 'centivo';
const collection = 'users';

const MongoClient = mongo.MongoClient;
const mongoClient = new MongoClient(url);

const minAge = 21;

mongoClient.connect().then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Failed to connect to MongoDB", err);
});

app.get('/:id', async (req, res) => {
    const id = req.params.id;

    if (!mongo.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid user ID format' });
    }

    const oid = new mongo.ObjectId(id);

    const user = await mongoClient
        .db(database)
        .collection(collection)
        .findOne({
            "_id": oid,
            "age": { $gt: minAge }
        }
    );

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
});

const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});