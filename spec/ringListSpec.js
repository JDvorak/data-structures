describe("ringList", function() {
  var ringList;

  beforeEach(function() {
    ringList = makeRingList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(ringList)).toContain("head");
    expect(Object.keys(ringList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(ringList.addToTail).toEqual(jasmine.any(Function));
    expect(ringList.removeHead).toEqual(jasmine.any(Function));
    expect(ringList.contains).toEqual(jasmine.any(Function));
    expect(ringList.addToHead).toEqual(jasmine.any(Function));
    expect(ringList.removeTail).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of ringList
  describe('add', function() {
    describe('to tail', function(){
      it('with single item should set the tail to the node added', function() {
       ringList.addToTail('cat');
       expect(ringList.tail.value).toEqual('cat');
      });
      it('should maintain the structure of a ring', function(){
        ringList.addToTail('dog');
        ringList.addToTail('cat');
        expect(ringList.tail.next.value).toEqual(ringList.head.value);
      });

      describe('with multiple items', function() {
        beforeEach(function() {
        ringList.addToTail('doc');
        ringList.addToTail('roc');
        ringList.addToTail('toc');
       });

       it('should set the tail to the node added', function() {
         ringList.addToTail('cat');
         expect(ringList.tail.value).toEqual('cat');
       });
      });

    });

    describe('to head', function(){
      it('with single item should set the head to the node added', function(){
       ringList.addToHead('cat');
       expect(ringList.head.value).toEqual('cat');
      });
      describe('with multiple items', function(){
        beforeEach(function() {
          ringList.addToHead('doc');
          ringList.addToHead('roc');
          ringList.addToHead('toc');
        });
        it('should set the head to the node added', function(){
          ringList.addToHead('poc');
          expect(ringList.head.value).toEqual('poc');
        });
        it('should maintain the structure of a ring', function(){
          ringList.addToTail('dog');
          ringList.addToTail('cat');
          expect(ringList.tail.next.value).toEqual(ringList.head.value);
        })
      });
    });
  });

  describe('remove',function() {
    describe("from head", function() {
      it('should return the first item added to the list', function() {
        ringList.addToTail('dog');
        ringList.addToTail('cat');
        expect(ringList.removeHead()).toEqual('dog');
      });
      it('should not interfere with functionality', function(){
        ringList.addToTail('dog');
        ringList.removeHead();
        ringList.removeHead();
        ringList.addToTail('cat');
        expect(ringList.contains('cat')).toEqual(true);
        expect(ringList.removeHead()).toEqual('cat');
      });
      it('should return undefined when no nodes are left', function(){
        ringList.addToTail('dog');
        ringList.removeHead();
        expect(ringList.removeHead()).toEqual(undefined);
      });
    });
    describe("from tail", function() {
      it('should return the last item added to the list', function() {
        ringList.addToTail('dog');
        ringList.addToTail('cat');
        expect(ringList.removeTail()).toEqual('cat');
      });
      it('should not interfere with functionality', function(){
        ringList.addToTail('dog');
        ringList.removeTail();
        ringList.removeTail();
        ringList.addToTail('cat');
        expect(ringList.contains('cat')).toEqual(true);
        expect(ringList.removeTail()).toEqual('cat');
      });
      it('should return undefined when no nodes are left', function(){
        ringList.addToTail('dog');
        ringList.removeTail();
        expect(ringList.removeTail()).toEqual(undefined);
      });
    });
  });

  describe('contains', function() {
    beforeEach(function() {
      ringList.addToTail('cat');
      ringList.addToTail('dog');
      ringList.addToTail('parakeet');
    });
    it('should find an item in the list', function() {
      expect(ringList.contains('cat')).toEqual(true);
      expect(ringList.contains('dog')).toEqual(true);
      expect(ringList.contains('parakeet')).toEqual(true);
    });
    it('should not find an item not in the list', function(){
      expect(ringList.contains('elephant')).not.toEqual(true);
      expect(ringList.contains('cat')).toEqual(true);
      expect(ringList.contains('dog')).toEqual(true);
      expect(ringList.contains('parakeet')).toEqual(true);
    });
    it('should not find removed items', function(){
      ringList.removeHead();
      expect(ringList.contains('cat')).not.toEqual(true);
    });
  });
});

describe('Node', function() {
  var node, node2, node3;

  beforeEach(function() {
    node = makeNode(1);
  });

  it('should have a value and next node property', function() {
    expect(Object.keys(node)).toContain('value');
    expect(Object.keys(node)).toContain('next');
    expect(Object.keys(node)).toContain('previous');
  });

  it('should have methods removeNextNode', function() {
    expect(node.removeNextNode).toEqual(jasmine.any(Function));
    expect(node.removePreviousNode).toEqual(jasmine.any(Function));
  });

  describe("add/remove", function() {
    beforeEach(function() {
      node2 = makeNode(2);
      node3 = makeNode(3);
      node.next = node2;
      node.previous = node3;
      node2.previous = node;
      node2.next = node3;
      node3.previous = node2;
      node3.next = node;
    });
    it("should work for removeNextNode()", function() {
      node2.removeNextNode();
      expect(node2.next.value).toEqual(node.value);
      expect(node.previous.value).toEqual(node2.value);
    });
    it("should work for removePreviousNode()", function() {
      node2.removePreviousNode();
      expect(node2.previous.value).toEqual(node3.value);
      expect(node3.next.value).toEqual(node2.value);
    });
  });
})