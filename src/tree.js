var makeTree = function(){
  var tree = {
              children : []
             };
  return $.extend(tree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(item){
  this.children.push(item);
};

treeMethods.contains = function(objective){
  var existence = false;
  var recurseTree = function(tree, target){

    for (var i = 0; i < tree.length; i++) {
      if (!!tree[i].children) {
        recurseTree(tree[i].children, target);
      }
      else if (tree[i] === target) {
        existence = true;
      }
    }
    return existence;
  };

  return recurseTree(this.children, objective);
};

