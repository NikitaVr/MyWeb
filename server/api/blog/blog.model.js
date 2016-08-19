'use strict';

import mongoose from 'mongoose';

var BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  titleImage: String,
  content: String
  //Add a short description part
});

export default mongoose.model('blogEntries', BlogSchema, 'blogEntries');// Third param is the litteral name in the database of the collection
