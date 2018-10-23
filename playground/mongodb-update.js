const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');

    // db.collection('Todos')
    //     .findOneAndUpdate(
    //         { _id: new ObjectID('5bcddc742c5dc9d518059c2b') },
    //         {
    //             $set: {
    //                 completed: true
    //             }
    //         },
    //         {
    //             returnOriginal: false
    //         }
    //     ).then((result) => {
    //         console.log(result);
    //     });

    db.collection('User').findOneAndUpdate(
        {
            _id: new ObjectID('5bcde37d2c5dc9d518059ea2')
        },
        {
            $set: {
                name: 'Sverrir V'
            },
            $inc: {
                age: -1
            }
        },
        {
            returnOriginal: false
        }
    ).then((error, result) => {
        if (error) {
            console.log('Something went wrong John');
            console.log(error);
        }
        console.log(result)
    });
    db.close()
});

