var makeRingList = function(){
  var ringList = {};

  ringList.head = null;
  ringList.tail = null;

  ringList.addToTail = function(value){
    var newNode = makeNode(value);

    if (ringList.head === null) {
      newNode.next     = newNode;
      newNode.previous = newNode;
      ringList.head    = newNode;
      ringList.tail    = newNode;
    } else {
      newNode.next            = ringList.head;
      newNode.previous        = ringList.tail;
      ringList.tail.next      = newNode;
      ringList.head.previous  = newNode;
      ringList.tail           = newNode;
    }
  };

  ringList.addToHead = function(value){
    var newNode = makeNode(value);

    if (ringList.head === null) {
      newNode.next     = newNode;
      newNode.previous = newNode;
      ringList.head    = newNode;
      ringList.tail    = newNode;
    } else {
      newNode.previous        = ringList.tail;
      newNode.next            = ringList.head;
      ringList.tail.next      = newNode;
      ringList.head.next      = newNode;
      ringList.head           = newNode;
    }
  };

  ringList.removeHead = function(){
    var returnNode = {};

    if (ringList.head === null) {
      return;
    } else if (ringList.head === ringList.tail) {
      returnNode = ringList.head;
      ringList.head = null;
      ringList.tail = null;
    } else {
      returnNode = ringList.head;
      var temp = ringList.head;
      ringList.head = temp.next;
      temp.previous.removeNextNode();
    }
    return returnNode.value;
  };

  ringList.removeTail = function(){
    var returnNode = {};

    if (ringList.tail === null) {
      return;
    } else if (ringList.head === ringList.tail) {
      returnNode = ringList.tail;
      ringList.head = null;
      ringList.tail = null;
    } else {
      returnNode = ringList.tail;
      var temp = ringList.tail;
      ringList.tail = temp.next;
      temp.next.removePreviousNode();
    }
    return returnNode.value;
  };

  ringList.contains = function(target){
    if (ringList.head === null) {
      return false;
    }

    var node = ringList.head;
    do {
      if (node.value === target) {
        return true;
      }
      else {
        node = node.next;
      }
    } while (node !== ringList.head);
    return false;
  };
  return ringList;
};

var makeNode = function(value){
  var node = {
              value : value,
              next : null,
              previous: null
             };

  node.removeNextNode = function(){
    var temp           = this.next;
    this.next          = this.next.next;
    temp.next.previous = this;
    delete temp;
  };

  node.removePreviousNode = function() {
    var temp           = this.previous;
    this.previous      = this.previous.previous;
    temp.previous.next = this;
    delete temp;
  };

  return node;
};
