// 몽고DB 기본 CRUD

const MongoClient = require("mongodb").MongoClient;
const uri = 'mongodb+srv://주소';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('DB Connected');

    // collection
    const collection = client.db('DB명').collection('Collection명');
    console.log();

    // C 추가: insert
    await collection.inSertOne(
      { name: 'me', age: 23 }
    );

    // R 조회: find
    const documents = await collection.find(
      { name: 'me' }
    ).toArray();
    console.log(`검색 결과: ${documents}`);
    
    // U 수정: update
    await collection.updateOne(
      { name: 'me' }, { $set: { age: 22 } }
    );

    // D 삭제: delete
    await collection.deleteOne(
      { name: 'me' }
    );

    // 연결 종료
    await client.close();

  } catch (err) {
      console.log(err);
  }
};

run();