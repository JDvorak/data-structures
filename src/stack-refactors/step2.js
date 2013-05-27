var stackFuncs = {
  // fill out these methods
  add: function(item){
    this.storage[this.size] = item;
    this.size++;
  },

  remove : function() {
    if (this.size > 0 ) {
      this.size--;
      var temp = this.storage[this.size];
      delete this.storage[this.size];
      return temp;
    }
  },

  toString: function(){
    var output = '['
    for(var i=0; i<this.size; i++) {
      output+=this.storage[i];
      if(i <this.size-1) output += ',';
    }
    output += ']';
    return output;
  }
};

var makeStack = function(){
  return $.extend({ stack : {},
                    storage : {},
                    size : 0
                  },
                  stackFuncs);
};