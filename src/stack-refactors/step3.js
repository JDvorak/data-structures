function Stack() {};

Stack.prototype.add = function(item){
  this.storage[this.size] = item;
  this.size++;
};

Stack.prototype.remove = function() {
  if (this.size > 0 ) {
    this.size--;
    var temp = this.storage[this.size];
    delete this.storage[this.size];
    return temp;
  }
};

Stack.prototype.toString = function(){
  var output = '['
  for(var i=0; i<this.size; i++) {
    output+=this.storage[i];
    if(i <this.size-1) output += ',';
  }
  output += ']';
  return output;
};

Stack.prototype.testFunction = function() {
  console.log('This shouldn\'t be accessed.')
}

var makeStack = function(){
  var newStack = Object.create(Stack.prototype);
  newStack.storage = {};
  newStack.size = 0;
  return newStack;
};