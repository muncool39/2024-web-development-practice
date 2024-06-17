# Mongoose


### Model
- 정의
```javascript
const mongoose = require('mongoose');
const objectSchema = new mongoose.Schema(
  {}
);
const Object = mongoose.model('Object', userSchema);
module.exports = Object;
```
- 사용
```javascript
const Object = require('./모델 경로');
```
- new Object()
- Object.save()
- Object.find({})
- Object.findOneAndUpdate({},{})
- Object.deleteMany({})