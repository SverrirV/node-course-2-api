const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((error, result) => {
    //     if (error) {
    //         console.log(error);
    //     }
    //     console.log(result);
    // })
    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((error, result) => {
    //     if (error) {
    //         console.log(error);
    //     }
    //     console.log(result);
    // })
    //findOneAndDelet
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // })
    // delete by id


    db.collection('User').findOneAndDelete({ _id: new ObjectID("5bcdd8c9907a30291cb38754") }).then((result) => {
        console.log(result);
    })



    db.close()
});

