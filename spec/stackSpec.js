describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).toEqual(jasmine.any(Function));
    expect(stack.remove).toEqual(jasmine.any(Function));
    expect(stack.size).toEqual(jasmine.any(Function));
  });

  it('size should initially be size of zero', function() {
    expect(stack.size()).toEqual(0);
  });

  describe('size', function() {
    it('should not go into the negative', function() {
      stack.add();
      stack.remove();
      stack.remove();
      expect(stack.size()).not.toEqual(-1);
    });
    it('should equal the number of items stored', function() {
      stack.add();
      stack.add();
      var stackLength = stack.toString().split(',').length;
      expect(stack.size()).toEqual(stackLength);
    });
  });

  describe('add', function() {
    it('one item should increase size by 1', function() {
      stack.add();
      expect(stack.size()).toEqual(1);
    });
    it('three items should increase size by 3', function() {
      stack.add();
      stack.add();
      stack.add();
      expect(stack.size()).toEqual(3);
    });
    it('"cat" should store "cat"', function() {
      stack.add('cat');
      expect(stack.remove('cat')).toEqual('cat');
    });
    it('one item should add one item', function() {
      stack.add('cat');
      expect(stack.toString()).toEqual('[cat]');
    });
    it('three items and remove one, index of first item should remain the same', function(){
      stack.add('cat');
      stack.add('dog');
      stack.add('parakeet');
      stack.remove();
      expect(stack.getByIndex(0)).toEqual('cat');
      expect(stack.getByIndex(1)).toEqual('dog');
    });
  });

  describe('remove', function() {
    it('one item should decrease size by 1', function() {
      stack.add();
      stack.add();
      stack.remove();
      expect(stack.size()).toEqual(1);
    });
    it('first item should return cat', function() {
      stack.add('cat');
      expect(stack.remove()).toEqual('cat');
    });
    it('one item should remove one item', function() {
      stack.add('cat');
      stack.add('dog');
      stack.remove();
      expect(stack.toString()).toEqual('[cat]');
    });
    it('items from an empty stack should return undefined', function() {
      expect(stack.remove()).not.toBeDefined();
    });
  });
  // add more tests here to test the functionality of stack
});
