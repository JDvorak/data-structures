var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.getStorage = function() {
  return this._storage;
};

HashTable.prototype.insert = function(key, value){
  key = key.toString();
  var hash = getIndexBelowMaxForKey(key, this._limit);


  if (!this._storage.get(hash)) {
    var array = [];
    array.push([key,value]);
    this._storage.set(hash,array);
  } else {
    var array = this._storage.get(hash);
    for(var i=0; i<array.length; i++) {
      if(array[i][0] === key) {
        array[i][1] = value;
        return;
      }
    }
    array.push([key,value]);
    this._storage.set(hash, array);
  }
};

HashTable.prototype.retrieve = function(key){
  key = key.toString();
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var array = this._storage.get(hash);
  if (array === undefined) {
    return;
  }
  for(var i=0; i<array.length; i++) {
    if((test = array[i][0]) === key) {
      return array[i][1];
    }
  }
};

HashTable.prototype.remove = function(key){
  key = key.toString();
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var array = this._storage.get(hash);
  if (array === undefined) {
    return;
  }
  for(var i=0; i<array.length; i++) {
    if((test = array[i][0]) === key) {
      array.splice(i,1);
    }
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you