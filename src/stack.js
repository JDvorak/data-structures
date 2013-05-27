var makeStack = function(){
  var stack = {};
  var storage = {}; // You'll use an object with numeric keys to store queue
                    // elements, since using an Array would defeat the purpose.
  var size = 0;

  // fill out these methods
  stack.add = function(item){
    storage[size] = item;
    size++;
  };

  stack.remove = function(){
    if (size > 0 ) {
      size--;
      var temp = storage[size];
      delete storage[size];
      return temp;
    };
  };

  stack.size = function(){
    return size;
  };

  stack.getByIndex = function(index) {
    return storage[index];
  }

  stack.getStorage = function() {
    var output = '['
    for(var i=0; i<size; i++) {
      output+=storage[i];
      if(i <size-1) output += ',';
    }
    output += ']';
    return output;
  };

  stack.toString = function(){
    return stack.getStorage();
  }

  return stack;
};
