const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  biography: { type: String, required: false },
  images: ImageSchema,
});

const ImageSchema = new Schema({
  profileImg: { type: String, required: false },
  bannerImg: { type: String, required: false },
});

const UserSchema = new Schema({
  nickname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: UserProfileSchema,
});

module.exports = mongoose.model('User', UserSchema);
