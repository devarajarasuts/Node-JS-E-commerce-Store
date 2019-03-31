const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
MongoClient.connect("mongodb+srv://leokran:grandsync75@cluster0-cybs3.mongodb.net/shop?retryWrites=true", { useNewUrlParser: true })
.then(client => {
  _db = client.db();
  callback();
})
.catch(err => {
  console.log(err);
  throw err;
});
};

const getDb = () => {
  if(_db){
    return _db;
  }
  throw 'Database Not Found!!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;