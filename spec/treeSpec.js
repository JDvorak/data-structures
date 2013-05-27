describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
  });

  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
  describe("addChild", function() {
    beforeEach(function() {
      tree.addChild('a');
    });
    it('should add "a" to the tree as the first child', function() {
      expect(tree.children[0]).toEqual('a');
    });
    it('should support nested trees', function() {
      var nestedTree = makeTree();
      nestedTree.addChild('nested_a');
      tree.addChild(nestedTree);
      expect(tree.children[0]).toEqual('a');
      expect(tree.children[1].children[0]).toEqual('nested_a');
    });
    it('should support three level trees', function() {
      var secondLevTree = makeTree();
      var thirdLevTree = makeTree();
      secondLevTree.addChild('secondLev_a');
      secondLevTree.addChild('secondLev_b');
      tree.addChild(secondLevTree);
      thirdLevTree.addChild('thirdLev_a');
      thirdLevTree.addChild('thirdLev_b');
      secondLevTree.addChild(thirdLevTree);
      expect(tree.children[0]).toEqual('a');
      expect(tree.children[1].children[0]).toEqual('secondLev_a');
      expect(tree.children[1].children[1]).toEqual('secondLev_b');
      expect(tree.children[1].children[2].children[0]).toEqual('thirdLev_a');
      expect(tree.children[1].children[2].children[1]).toEqual('thirdLev_b');
    });
  });

  describe('contains', function() {
    beforeEach(function() {
      tree.addChild('a');
      tree.addChild('b');
      tree.addChild('c');
    });
    it('should return true for all elements added to the tree', function() {
      expect(tree.contains('a')).toEqual(true);
      expect(tree.contains('b')).toEqual(true);
      expect(tree.contains('c')).toEqual(true);
    });
    it('should not return true for elements not in the tree', function() {
      expect(tree.contains('not exists')).toEqual(false);
    });
    it('should return true for nested elements which exist', function(){
      var nestedTree = makeTree();
      nestedTree.addChild('nested_a');
      tree.addChild(nestedTree);
      expect(tree.contains('nested_a')).toEqual(true);
    });
    it('should not return true for nested elements which do not exist', function(){
      var nestedTree = makeTree();
      nestedTree.addChild('nested_b');
      tree.addChild(nestedTree);
      expect(tree.contains('nested_a')).toEqual(false);
    });
    it('should support three level trees', function(){
      var secondLevTree = makeTree();
      var thirdLevTree = makeTree();
      secondLevTree.addChild('secondLev_a');
      secondLevTree.addChild('secondLev_b');
      tree.addChild(secondLevTree);
      thirdLevTree.addChild('thirdLev_a');
      thirdLevTree.addChild('thirdLev_b');
      secondLevTree.addChild(thirdLevTree);
      expect(tree.contains('thirdLev_b')).toEqual(true);
      expect(tree.contains('secondLev_b')).toEqual(true);
    });
  });
});