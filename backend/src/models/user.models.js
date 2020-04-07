const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
  {
    profilImg: { type: String, required: false },
    bannerImg: { type: String, required: false }
  },
  { _id: false }
);

const UserProfileSchema = new Schema(
  {
    biography: { type: String, required: false },
    images: ImageSchema
  },
  { _id: false }
);


const UserSchema = new Schema({
  nickname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  profile: UserProfileSchema
});

UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password);
  next();
});

module.exports = mongoose.model('User', UserSchema);
