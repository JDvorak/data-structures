var Set = function() {};

Set.prototype.add = function(string){
  if (!this.contains(string)) {
    this._storage[string] = true;
  }
};

Set.prototype.contains = function(string){
  if (!!this._storage[string]) {
    return true;
  }
  return false;
};

Set.prototype.remove = function(string){
  if (!!this._storage[string]){
    delete this._storage[string];
  }
};

var makeSet = function(){
  var set = Object.create(Set.prototype);
  set._storage = {};
  return set;
};
