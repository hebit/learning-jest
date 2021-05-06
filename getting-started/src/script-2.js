const fetch = require("node-fetch");

async function getPosts(cb) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return cb(data);
}

module.exports = getPosts;
