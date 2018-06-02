let rp = require('request-promise');
module.exports.fetch = function(searchQuery) {
  return rp('http://www.omdbapi.com/?apikey=f907da9a&t='+searchQuery);
};

