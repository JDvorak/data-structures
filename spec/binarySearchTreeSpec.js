describe("binarySearchTree", function() {
  var binarySearchTree, controlArray, testArray;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
    binarySearchTree.insert(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  describe("insert", function() {
    it("should set the first node as the root of the tree", function() {
      expect(binarySearchTree.root.value).toEqual(5);
      expect(binarySearchTree.root.left).toEqual(null);
      expect(binarySearchTree.root.right).toEqual(null);
    });
    it("should insert a less than root value to the left", function() {
      binarySearchTree.insert(3);
      expect(binarySearchTree.root.left.value).toEqual(3);
      expect(binarySearchTree.root.right).toEqual(null);
    });
    it("should insert a greater than root value to the right", function() {
      binarySearchTree.insert(7);
      expect(binarySearchTree.root.right.value).toEqual(7);
      expect(binarySearchTree.root.left).toEqual(null);
    });
    it("should properly insert nodes left and right of root", function() {
      binarySearchTree.insert(3);
      binarySearchTree.insert(7);
      expect(binarySearchTree.root.left.value).toEqual(3);
      expect(binarySearchTree.root.right.value).toEqual(7);
    });
    it("should handle collisions by not duplicating values", function(){
      binarySearchTree.insert(3);
      binarySearchTree.insert(3);
      expect(binarySearchTree.root.left.value).toEqual(3);
      expect(binarySearchTree.root.right).toEqual(null);
      expect(binarySearchTree.root.value).toEqual(5);
    });
  });

  describe("contains", function() {
    beforeEach(function(){
      for (var i = 0; i < 10; i++) {
        binarySearchTree.insert(Math.floor(Math.random()*10));
      }
      binarySearchTree.insert(77);
      binarySearchTree.insert(-77);
    });

    it("should be able to find a number on the left", function(){
      expect(binarySearchTree.contains(-77)).toEqual(true);
    });
    it("should be able to find a number on the right", function(){
      expect(binarySearchTree.contains(77)).toEqual(true);
    });
    it("should not be able to find a number not in the tree", function(){
      expect(binarySearchTree.contains(100)).toEqual(false);
    });
  });

  describe("depthFirstLog", function(){
    beforeEach(function(){
      testArray = [];
      binarySearchTree.insert(5);
      binarySearchTree.insert(3);
      binarySearchTree.insert(7);
      binarySearchTree.insert(2);
      binarySearchTree.insert(4);
      binarySearchTree.insert(6);
      binarySearchTree.insert(8);
    });
    it("should work as expected", function() {
      controlArray = [2,4,3,6,8,7,5];
      var collectValues = function(value, key) {
        testArray.push(value);
      };
      binarySearchTree.depthFirstLog(collectValues);
      expect(testArray).toEqual(controlArray);
    });
    it("should apply the iterator to all values", function() {
      controlArray = [10,20,15,30,40,35,25];
      var plusFive = function(value, key) {
        testArray.push(value*5);
      };
      binarySearchTree.depthFirstLog(plusFive);
      expect(testArray).toEqual(controlArray);
    });
  });
});

describe("Node", function() {
  var node, left, right;
  beforeEach(function() {
    node = new Node(2);
  });
  it("should have properties 'left', 'right', and 'value'", function() {
    expect(Object.keys(node)).toContain('left');
    expect(Object.keys(node)).toContain('right');
    expect(Object.keys(node)).toContain('value');
  });
  it("should set left node pointer", function() {
    left = new Node(1);
    node.left = left;
    expect(node.left.value).toEqual(left.value);
    expect(node.right).toEqual(null);
  });
  it("should set right node pointer", function() {
    right = new Node(3);
    node.right = right;
    expect(node.right.value).toEqual(right.value);
    expect(node.left).toEqual(null);
  });
})