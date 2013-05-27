
var queueFuncs = {
  add : function(item) {
    this.storage[this.size] = item;
    this.size++;
  },

  remove : function() {
    temp = undefined;
    if(this.size > 0) {
      this.size--;
      temp = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
    }
    return temp;
  },

  toString : function() {
    var output = '[';
    for(var i=this.head; i<=this.size; i++) {
      output += this.storage[i];
      if(i<this.size) output += ',';
    }
    output += ']';
    return output;
  }
};

var makeQueue = function() {
  return $.extend({
                    queue : {},
                    storage : {},
                    size : 0,
                    head : 0
                  },
                  queueFuncs);
};
