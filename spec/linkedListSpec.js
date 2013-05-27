describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
    expect(linkedList.addToHead).toEqual(jasmine.any(Function));
    expect(linkedList.removeTail).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  describe('add', function() {
    describe('to tail', function(){
      it('with single item should set the tail to the node added', function() {
       linkedList.addToTail('cat');
       expect(linkedList.tail.value).toEqual('cat');
      });
      it('does not produce a ring', function(){
        linkedList.addToTail('dog');
        linkedList.addToTail('cat');
        linkedList.addToTail('bird');
        expect(linkedList.tail.next).toEqual(null);
        expect(linkedList.head.previous).toEqual(null);
      });

      describe('with multiple items', function() {
        beforeEach(function() {
        linkedList.addToTail('doc');
        linkedList.addToTail('roc');
        linkedList.addToTail('toc');
       });

       it('should set the tail to the node added', function() {
         linkedList.addToTail('cat');
         expect(linkedList.tail.value).toEqual('cat');
       });
      });

    });

    describe('to head', function(){
      it('with single item should set the head to the node added', function(){
       linkedList.addToHead('cat');
       expect(linkedList.head.value).toEqual('cat');
      });
      describe('with multiple items', function(){
        beforeEach(function() {
          linkedList.addToHead('doc');
          linkedList.addToHead('roc');
          linkedList.addToHead('toc');
        });
        it('should set the head to the node added', function(){
          linkedList.addToHead('poc');
          expect(linkedList.head.value).toEqual('poc');
        });
        it('does not produce a ring', function(){
          linkedList.addToHead('dog');
          linkedList.addToHead('cat');
          linkedList.addToHead('bird');
          expect(linkedList.tail.next).toEqual(null);
          expect(linkedList.head.previous).toEqual(null);
        });
      });
    });
  });

  describe('remove',function() {
    describe("from head", function() {
      it('should return the first item added to the list', function() {
        linkedList.addToTail('dog');
        linkedList.addToTail('cat');
        expect(linkedList.removeHead()).toEqual('dog');
      });
      it('should not interfere with functionality', function(){
        linkedList.addToTail('dog');
        linkedList.removeHead();
        linkedList.removeHead();
        linkedList.addToTail('cat');
        expect(linkedList.contains('cat')).toEqual(true);
        expect(linkedList.removeHead()).toEqual('cat');
      });
      it('should return undefined when no nodes are left', function(){
        linkedList.addToTail('dog');
        linkedList.removeHead();
        expect(linkedList.removeHead()).toEqual(undefined);
      });
    });
    describe("from tail", function() {
      it('should return the last item added to the list', function() {
        linkedList.addToTail('dog');
        linkedList.addToTail('cat');
        expect(linkedList.removeTail()).toEqual('cat');
      });
      it('should not interfere with functionality', function(){
        linkedList.addToTail('dog');
        linkedList.removeTail();
        linkedList.removeTail();
        linkedList.addToTail('cat');
        expect(linkedList.contains('cat')).toEqual(true);
        expect(linkedList.removeTail()).toEqual('cat');
      });
      it('should return undefined when no nodes are left', function(){
        linkedList.addToTail('dog');
        linkedList.removeTail();
        expect(linkedList.removeTail()).toEqual(undefined);
      });
    });
  });

  describe('contains', function() {
    beforeEach(function() {
      linkedList.addToTail('cat');
      linkedList.addToTail('dog');
      linkedList.addToTail('parakeet');
    });
    it('should find an item in the list', function() {
      expect(linkedList.contains('cat')).toEqual(true);
      expect(linkedList.contains('dog')).toEqual(true);
      expect(linkedList.contains('parakeet')).toEqual(true);
    });
    it('should not find an item not in the list', function(){
      expect(linkedList.contains('elephant')).not.toEqual(true);
      expect(linkedList.contains('cat')).toEqual(true);
      expect(linkedList.contains('dog')).toEqual(true);
      expect(linkedList.contains('parakeet')).toEqual(true);
    });
    it('should not find removed items', function(){
      linkedList.removeHead();
      expect(linkedList.contains('cat')).not.toEqual(true);
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
      node4 = makeNode(4);
      node.next = node2;
      node2.next = node3;
      node3.next = node4;
      node2.previous = node;
      node3.previous = node2;
      node4.previous = node3;
    });
    it("should work for removeNextNode()", function() {
      node2.removeNextNode();
      expect(node2.next.value).toEqual(node4.value);
      expect(node4.previous.value).toEqual(node2.value);
    });
    it("should work for removePreviousNode()", function() {
      node3.removePreviousNode();
      expect(node3.previous.value).toEqual(node.value);
      expect(node.next.value).toEqual(node3.value);
    });
  });
})