function searchTree() {};

searchTree.prototype.insert = function(value) {
  if(this.root === null) {
    this.root = new Node(value);
    return;
  }
  var recursiveInsert = function(value, node){
    if (value < node.value){
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        recursiveInsert(value, node.left);
      }
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        recursiveInsert(value, node.right);
      }
    } else {
      return;
    }
  };
  recursiveInsert(value, this.root);
};
searchTree.prototype.contains = function(value) {

  var recursiveContains = function(value, node) {
    if (node === null) {
      return false;
    } else if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return recursiveContains(value, node.left);
    } else if (value > node.value) {
      return recursiveContains(value, node.right);
    } else {
      return false;
    }
  };
  return recursiveContains(value, this.root);
};
searchTree.prototype.depthFirstLog = function(iterator) {

  var recursiveTraverse = function(node){
    if (node === null) {
      return;
    }
    if (!!node.left) {
      recursiveTraverse(node.left);
    }
    if (!!node.right) {
      recursiveTraverse(node.right);
    }
    iterator(node.value);
  };
  recursiveTraverse(this.root);
};

var makeBinarySearchTree = function(){
  tree = Object.create(searchTree.prototype);
  tree.root = null;
  return tree;
};

function Node(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};
