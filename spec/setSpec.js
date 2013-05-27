describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  describe("add", function() {
    beforeEach(function(){
      set.add('a');
    });

    it("should add an item to itself", function(){
      set.add('b');
      expect(set.contains('b')).toEqual(true);
    });
    it("should not add an item it already contains", function(){
      set.add('a');
      expect(Object.keys(set._storage).length).toEqual(1);
    });
  });

  describe("contains", function(){
    beforeEach(function(){
      set.add('a');
      set.add('b');
      set.add('c');
    });

    it("should return true when the item exists", function(){
      expect(set.contains('a')).toEqual(true);
      expect(set.contains('b')).toEqual(true);
      expect(set.contains('c')).toEqual(true);
    });
    it("should not return true when the item does not exist", function(){
      expect(set.contains('1')).not.toEqual(true);
    });
  });

  describe("remove", function(){
    beforeEach(function(){
      set.add('a');
      set.add('b');
      set.add('c');
    });

    it("should remove items from the set", function(){
      set.remove('b');
      expect(set.contains('b')).toEqual(false);
    });
    it("should not modify length when nothing is removed", function(){
      set.remove('d');
      expect(Object.keys(set._storage).length).toEqual(3);
    });
  });
});