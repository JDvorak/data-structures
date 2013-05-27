describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('should have "add", and "remove" methods', function() {
    expect(queue.add).toEqual(jasmine.any(Function));
    expect(queue.remove).toEqual(jasmine.any(Function));
    expect(queue.toString).toEqual(jasmine.any(Function));
  });

  it('should be capable of mutation', function() {
    Queue.prototype.testFunction = 3;
    expect(queue.testFunction).toEqual(3);
  })

  describe('add', function() {
    it('one item should increase size by one', function(){
      queue.add();
      expect(queue.size()).toEqual(1);
    });
    it('three items should increase size by three', function() {
      queue.add();
      queue.add();
      queue.add();
      expect(queue.size()).toEqual(3);
    });
  });

  describe('remove', function() {
    it('one item should decrease size by one', function(){
      queue.add();
      queue.add();
      queue.remove();
      expect(queue.size()).toEqual(1);
    });
    it('from an empty stack should not decrease size', function(){
      var initialSize =queue.size();
      queue.remove();
      expect(queue.size()).toEqual(initialSize);
    });
    it('should increase head', function(){
      var initialHead = queue.head;
      queue.add();
      queue.remove();
      expect(queue.head).toBeGreaterThan(initialHead);
    });
    it('one item should return the item', function(){
      queue.add('cat');
      expect(queue.remove()).toEqual('cat');
    });

    describe("with multiple items",function() {
      beforeEach(function() {
        queue.add('cat');
        queue.add('dog');
        queue.add('gorilla');
      });
      it('should increase head multiple times', function() {
        queue.remove();
        queue.remove();
        queue.remove();
        expect(queue.head).toEqual(3);
      });
      it('should remove the first item added first', function(){
        expect(queue.remove()).toEqual('cat');
      });
      it('should maintain ordered items', function() {
        queue.remove();
        expect(queue.toString()).toEqual('[dog,gorilla]');
      });
    });
  });

  describe('size', function() {
    it('should initiate to zero', function(){
      expect(queue.size()).toEqual(0);
    });
    it('should increase by one after calling add', function() {
      queue.add();
      expect(queue.size()).toEqual(1);
    });
    it('should increase by three after calling add 3x', function(){
      queue.add();
      queue.add();
      queue.add();
      expect(queue.size()).toEqual(3);
    });

  });
  // add more tests here to test the functionality of queue
});
