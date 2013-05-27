describe("redBlackTree", function(){
  var redBlackTree, controlArray, testArray;

  beforeEach(function() {
    redBlackTree = makeRedBlackTree();
    redBlackTree.insert(5);
  });

  it('should have an insert, contains, and remove', function(){
    expect(redBlackTree.insert).toEqual(jasmine.any(Function));
    expect(redBlackTree.contains).toEqual(jasmine.any(Function));
    expect(redBlackTree.remove).toEqual(jasmine.any(Function));
  });

  describe("rotation", function() {
    beforeEach(function() {
      redBlackTree = makeRedBlackTree();
      redBlackTree.insert(5);
      redBlackTree.insert(3);
      redBlackTree.insert(7);
    });

    it("should not rotate a balanced tree", function(){
      expect(redBlackTree.root.left.value).toEqual(3);
      expect(redBlackTree.root.right.value).toEqual(7);
    });
    it("should rotate an unbalanced tree", function(){
      redBlackTree.insert(8);
      redBlackTree.insert(9);
      expect(redBlackTree.root.left.value).toEqual(3);
      expect(redBlackTree.root.right.value).toEqual(7);
    });

  });

  describe("insert", function() {
    beforeEach(function() {
      redBlackTree = makeRedBlackTree();
      redBlackTree.insert(5);
    });

    it("should set the first node as the root of the tree", function() {
      expect(redBlackTree.root.value).toEqual(5);
      expect(redBlackTree.root.left).toEqual(nil);
      expect(redBlackTree.root.right).toEqual(nil);
    });
    it("should insert a less than root value to the left", function() {
      redBlackTree.insert(3);
      expect(redBlackTree.root.left.value).toEqual(3);
      expect(redBlackTree.root.right).toEqual(nil);
    });
    it("should insert a greater than root value to the right", function() {
      redBlackTree.insert(7);
      expect(redBlackTree.root.right.value).toEqual(7);
      expect(redBlackTree.root.left).toEqual(nil);
    });
    it("should insert multiples down the same branch", function() {
      redBlackTree.insert(7);
      redBlackTree.insert(8);
      redBlackTree.insert(9);
      expect(redBlackTree.root.right.right.value).toEqual(8);
      expect(redBlackTree.root.right.right.right.value).toEqual(9);
      expect(redBlackTree.root.left).toEqual(nil);
    });
    it("should properly insert nodes left and right of root", function() {
      redBlackTree.insert(3);
      redBlackTree.insert(7);
      expect(redBlackTree.root.left.value).toEqual(3);
      expect(redBlackTree.root.right.value).toEqual(7);
    });
    it("should handle collisions by not duplicating values", function(){
      redBlackTree.insert(3);
      redBlackTree.insert(3);
      expect(redBlackTree.root.left.value).toEqual(3);
      expect(redBlackTree.root.right).toEqual(nil);
      expect(redBlackTree.root.value).toEqual(5);
      expect(redBlackTree.root.left.left).toEqual(nil);
      expect(redBlackTree.root.left.right).toEqual(nil);
    });
    it("should set the first node as black", function(){
      expect(redBlackTree.root.color).toEqual("black");
    });
    it("should set the first children red", function(){
      redBlackTree.insert(3);
      redBlackTree.insert(7);
      expect(redBlackTree.root.left.color).toEqual("red");
      expect(redBlackTree.root.right.color).toEqual("red");
    });
    it("should adjust the children color according to depth", function(){
      redBlackTree.insert(4);
      redBlackTree.insert(7);
      redBlackTree.insert(6);
      redBlackTree.insert(8);
      redBlackTree.insert(9);
      console.log(redBlackTree)
      expect(redBlackTree.root.left.color).toEqual("red");
      expect(redBlackTree.root.right.color).toEqual("red");
    });
  });


  describe("node", function() {
    var node;

    beforeEach(function(){
      node = redBlackTree.root;
    });

    it("should have an insert, conform", function(){
      expect(node.insert).toEqual(jasmine.any(Function));
      expect(node.conform).toEqual(jasmine.any(Function));
    });

    it("should have a value, left, right, parent, and color", function(){
      expect(node.value).toBeDefined()
      expect(node.left).toBeDefined()
      expect(node.right).toBeDefined()
      expect(node.parent).toBeDefined()
      expect(node.color).toBeDefined()
    });


  });


});