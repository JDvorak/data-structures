var jaccardIndex = function(a, b) {
  return _.intersection(a, b).length / union(a, b).length
};

var jaccardDistance = function(a, b) {
  return 1 - jaccardIndex(a,b);
};

var euclideanDistance = function(a,b) {};

var cosineDistance = function(a,b) {};

var editDistance = function(a, b){

};

var wordShingles = function(string, width) {
  var stopWords = {};

  // Get a stop word, start from the stop word and the next two words
  // This works well for news stories
  // but becomes intractable with increasing size
};

var minHash = function() {

}