// Note: don't use an array to do this.
var makeLinkedList = function(){
  var linkedList = {};

  linkedList.head = null;
  linkedList.tail = null;

  linkedList.addToTail = function(value){
    var newNode = makeNode(value);

    if (linkedList.head === null) {
      linkedList.head  = newNode;
      linkedList.tail  = newNode;
    } else {
      newNode.previous          = linkedList.tail;
      linkedList.tail.next      = newNode;
      linkedList.tail           = newNode;
    }
  };

  linkedList.addToHead = function(value){
    var newNode = makeNode(value);

    if (linkedList.head === null) {
      linkedList.head  = newNode;
      linkedList.tail  = newNode;
    } else {
      newNode.next              = linkedList.head;
      linkedList.head.previous  = newNode;
      linkedList.head           = newNode;
    }
  };

  linkedList.removeHead = function(){
    var returnNode = {};

    if (linkedList.head === null) {
      return;
    } else if (linkedList.head === linkedList.tail) {
      returnNode = linkedList.head;
      linkedList.head = null;
      linkedList.tail = null;
    } else {
      returnNode = linkedList.head;
      var temp = linkedList.head;
      linkedList.head = temp.next;
      if(temp.previous != null) temp.previous.removeNextNode();
    }
    return returnNode.value;
  };

  linkedList.removeTail = function(){
    var returnNode = {};

    if (linkedList.tail === null) {
      return;
    } else if (linkedList.head === linkedList.tail) {
      returnNode = linkedList.tail;
      linkedList.head = null;
      linkedList.tail = null;
    } else {
      returnNode = linkedList.tail;
      var temp = linkedList.tail;
      linkedList.tail = temp.next;
      if(temp.next != null) temp.next.removePreviousNode();
    }
    return returnNode.value;
  };

  linkedList.contains = function(target){
    if (linkedList.head === null) {
      return false;
    }

    var node = linkedList.head;
    do {
      if (node.value === target) {
        return true;
      }
      else {
        node = node.next;
      }
    } while (node !== null);
    return false;
  };
  return linkedList;
};

var makeNode = function(value){
  var node = {
              value : value,
              next : null,
              previous: null
             };

  node.removeNextNode = function(){
    var temp           = this.next;
    if (temp !== null) {
        this.next          = this.next.next;
        temp.next.previous = this;
        delete temp;
    }
    return;
  };

  node.removePreviousNode = function() {
    var temp           = this.previous;
    if (temp !== null) {
        this.previous      = this.previous.previous;
        temp.previous.next = this;
        delete temp;
    };
    return;
  };

  return node;
};
