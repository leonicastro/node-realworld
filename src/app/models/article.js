const { Schema, model } = require('mongoose');

const ArticleScheme = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    favoritesCount: { type: Number, default: 0 },
    tagList: [{ type: String }]
  },
  {
    timestamps: true
  }
);

module.exports = model('Article', ArticleScheme);
