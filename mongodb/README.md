# MongoDB 
MongeDB 기본 CRUD with js

### CRUD
- insertOne({});
- insertMany([{}, {}]);
- find();
- find({조건}, {보일내용})
- updateOne({조건}, {바꿀내용})
- updateMany({조건}, {바꿀내용})
- deleteOne({조건})

### Driver
```javascript
const MongoClient = require("mongodb").MongoClient;
const uri = 'mongodb+srv://주소';
const client = new MongoClient(uri);
await client.connect();
const collection = client.db('DB명').collection('Collection명');
await client.close();
```

### 연산자
- $gt 
- $gte
- $lt
- $lte
- $eq
- $ne
- $inc
- $mul

나이가 18 이상인 사용자 이름만 출력
```shell
db.collection.find({ age: { $gte: 18 } }, { name: 1, _id: 0 });
```

모든 사람의 나이 1씩 증가시키기
```shell
db.collection.updateMany({}, { $inc: { age: 1 } });
```