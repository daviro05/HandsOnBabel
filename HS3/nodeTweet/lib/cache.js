const cache = {};
function getCache() {
  return new Promise((resolve) => {
    if (cache['tweets']) {
      return resolve(cache['tweets']);
    }
    return resolve(null);
  });
}

function saveCache(tweets) {
  return new Promise((resolve) => {
    cache['tweets'] = tweets;
    resolve(tweets);
  });
}

module.exports = {
  getCache,
  saveCache,
};
