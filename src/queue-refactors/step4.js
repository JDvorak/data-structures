function Queue() {
  this.storage = {};
  this.tail = 0;
  this.head = 0;
};

Queue.prototype.add = function(item) {
  this.storage[this.tail] = item;
  this.tail++;
};

Queue.prototype.remove = function() {
  temp = undefined;
  if(this.tail - this.head > 0) {
    temp = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
  }
  return temp;
};

Queue.prototype.size = function() {
  return this.tail - this.head;
}

Queue.prototype.toString = function() {
  var output = '[';
  for(var i=this.head; i<this.tail; i++) {
    output += this.storage[i];
    if(i<this.tail -1) output += ',';
  }
  output += ']';
  return output;
};

Queue.prototype.testFunction = function() {
  console.log('how are you are do this???')
};