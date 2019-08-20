'use strict';

const Article = require('../models/article');

exports.get = async (req, res) => {
  const articles = await Article.find();
  res.send(articles);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const article = await Article.findById(id);
  res.send(article);
};

exports.post = async (req, res) => {
  const { title, description, body, tags } = req.body;
  const tagList = tags.split(',');

  const article = await Article.create({
    title,
    description,
    body,
    tagList
  });

  res.send(article);
};

exports.put = async (req, res) => {
  const { title, description, body, tags } = req.body;

  let model = {
    title,
    description,
    body
  };

  if (tags) {
    const tagList = tags.split(',');
    model = {
      ...model,
      tagList
    };
  }

  const article = await Article.findByIdAndUpdate(req.params.id, model, {
    new: true
  });

  res.send(article);
};

exports.delete = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.send({ message: 'Article removed' });
};

exports.favorite = async (req, res) => {
  const article = await Article.findById(req.params.id);
  article.favoritesCount += 1;
  article.save();

  res.send(article);
};

exports.unfavorite = async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article.favoritesCount > 0) {
    article.favoritesCount -= 1;
    article.save();
  }

  res.send(article);
};
