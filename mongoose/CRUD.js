// mongoose crud
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const User = require('./models/userModel');

// 서버 실행
app.listen(3000, async () => {
  console.log("서버 실행중");
  const mongodburi = 'mongodb+srv://주소'
  mongoose.connect(mongodburi, { useNewUrlParser: true })
          .then(console.log("DB connected"));
})

// 전체 조회: find
app.get('/user', async (req, res) => {
  const user = await User.find({});
  res.send(user);
});

// 특정 이름 조회: findOne
app.get('/user/:name', async (req, res) => {
  const user = await User.findOne({ name: req.params.name });
  res.send(user);
});

// 추가: save
app.post('/user', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// 수정: findOneAndUpdate
app.put('/user/:name', async (req, res) => {
  const user = await User.findOneAndUpdate(
    { name: req.params.name }, { $set: req.body }, { new: true }
  );
  res.send(user);
});

// 삭제: deleteMany
app.delete('/user/:name', async (req, res) => {
  await User.deleteMany({ name: req.params.name });
  res.send({ success: true });
});