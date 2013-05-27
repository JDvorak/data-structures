var makeQueue = function(){
  var queue = {};
  var storage = {}; // You'll use an object with numeric keys to store queue
                    // elements, since using an Array would defeat the purpose.
  var tail = 0;
  var head = 0;
  // fill out these methods
  queue.add = function(item) {
    storage[tail] = item;
    tail++;
  };

  queue.remove = function() {
    var temp;
    if(tail - head > 0) {
      temp = storage[head];
      delete storage[head];
      head++;
    }
    return temp;
  };

  queue.size = function(){
    return tail - head;
  };

  queue.getHead = function() {
    return head;
  };

  queue.toString = function() {
    var output = '[';
    for(var i=head; i<tail; i++) {
      output += storage[i];
      if(i<tail-1) output += ',';
    }
    output += ']';
    return output;
  };

  return queue;
};
