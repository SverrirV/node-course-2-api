const { MongoClient, } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp');

    db.collection('User').insertOne({
        name: 'Sverrir',
        age: 35,
        location: 'Hlemmur'
    }, (err, result) => {
        if (err) {
            return console.log('Could not insert into User')
        }
        // console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });
    // db.collection('Todos').insertOne({

    //     text: "Something to do",

    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert todo', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })




    client.close();
});

