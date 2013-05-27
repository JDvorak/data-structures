describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    expect(hashTable.remove).toEqual(jasmine.any(Function));
  });

  describe("insert/retrieve", function(){
    it("should insert key value pairs", function(){
      hashTable.insert('a', 1);
      expect(hashTable.retrieve('a')).toEqual(1);
    });
    it("should accept a key type of object", function(){
      hashTable.insert({'dog':'food'}, 1);
      expect(hashTable.retrieve({'dog':'food'})).toEqual(1);
    });
    it("should accept a key type of number", function(){
      hashTable.insert(3, 2);
      expect(hashTable.retrieve(3)).toEqual(2);
    });
    it("should accept a key type of array", function(){
      hashTable.insert([1,2,3], 3);
      expect(hashTable.retrieve([1,2,3])).toEqual(3);
    });
    it("should accept a key type of function", function(){
      hashTable.insert(function() { test }, 3);
      expect(hashTable.retrieve(function() { test })).toEqual(3);
    });
    it("should allow multiple insertions", function(){
      hashTable.insert('a', 1);
      expect(hashTable.retrieve('a')).toEqual(1);
      hashTable.insert('b', 2);
      expect(hashTable.retrieve('b')).toEqual(2);
      hashTable.insert('c', 3);
      expect(hashTable.retrieve('c')).toEqual(3);
    });
    it("should overwrite values with the same key", function() {
      hashTable.insert('string', 1);
      hashTable.insert('string', 2);
      expect(hashTable.retrieve('string')).toEqual(2);
    });
    it("should not retrieve a value from a nonexistent key", function(){
      expect(hashTable.retrieve('ghost')).toEqual(undefined);
    });

  });

  describe("remove", function(){
    it("should erase a key from hash", function(){
      hashTable.insert('a',1);
      hashTable.insert('b',2);
      hashTable.remove('a');
      expect(hashTable.retrieve('a')).toEqual(undefined);
      expect(hashTable.retrieve('b')).toEqual(2);
    });
    it("should erase a key from hash", function(){
      hashTable.insert('a',1);
      hashTable.insert('b',2);
      hashTable.remove('a');
      expect(hashTable.retrieve('a')).toEqual(undefined);
      expect(hashTable.retrieve('b')).toEqual(2);
    });
    it("should not remove nonexistent keys", function(){
      hashTable.remove('ghost');
    });
    it("should remove the value with the key", function(){
      hashTable.insert('string', 1);
      hashTable.insert('strinh', 2);
      hashTable.remove('strinh');
      expect(hashTable.retrieve('string'));

    });
  });

});
