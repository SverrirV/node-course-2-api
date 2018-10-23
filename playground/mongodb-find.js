const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');

    // db.collection('Todos')
    //     .find({
    //         _id: new ObjectID("5bcddc5c2c5dc9d518059c1e")
    //     })
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (error) => {
    //         console.log(error);
    //     })

    // db.collection('Todos')
    //     .find({
    //         _id: new ObjectID("5bcddc5c2c5dc9d518059c1e")
    //     })
    //     .count()
    //     .then((count) => {
    //         console.log('The count is: ', count);
    //     }, (error) => {
    //         console.log(error);
    //     })

    db.collection('User')
        .find({
            name: "Sverrir"
        })
        .toArray()
        .then((docs) => { console.log(docs) })




    // db.close()
});

