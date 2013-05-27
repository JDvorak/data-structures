//Red Black Trees
var black = 'black',
    red   = 'red',
    nil   = {
              isNil: true,
              color: black,
            };
nil.parent = nil;

var makeRedBlackTree = function() {
  var redBlackTree = {root: nil};

  setRoot = function(newRoot) {
    redBlackTree.root = newRoot;
  }

  redBlackTree.insert = function(value){
    var newNode = makeNode(value);
    if (redBlackTree.root.isNil) {
      newNode.conform();
    } else {
      redBlackTree.root.insert(newNode);
    }
  };

  redBlackTree.contains = function(value) {
    return redBlackTree.root.anyoneHave(value);
  };

  redBlackTree.remove = function(value) {
  };

  var makeNode = function(value) {
    var node = {
                color: null,
                isRoot: false,
                isNil: false,
                value: value,
                left: nil,
                right: nil,
                parent: nil,
               };

    node.setRoot = function(bool) {
      this.isRoot = bool
      if (this.isRoot) setRoot(this);
      return this
    };

    node.repaint = function(color) {
      this.color = color;
      return this;
    };

    node.findUncle = function() {
      if (!this.parent.parent.isNil) {
        if (this.parent === this.parent.parent.left){
          return this.parent.parent.left;
        } else {
          return this.parent.parent.right;
        }
      } else {
        return nil;
      };
    };

    node.conform = function() {
      var grandparent = this.parent.parent,
          uncle = this.findUncle();

      if (this.parent.isNil) {
        this.repaint(black);
        this.setRoot(true)
        return this;
      };

      if (this.isRoot && !this.parent.isNil) {
        this.setRoot(false)
        this.parent.setRoot(true)
        return this;
      };

      if (this.parent.color === black) return this;

      if (!uncle.isNil && uncle.color === red) {
           this.parent.repaint(black);
           uncle.repaint(black);
           grandparent.repaint(red).conform()
           return this;
      };

      if (this === this.parent.right && this.parent === grandparent.left) {
        this.parent.rotate('left');
        this.left.conform();
        return this;

      } else if (this === this.parent.left && this.parent === grandparent.right) {
        this.parent.rotate('right');
        this.right.conform();
        return this;
      }

      this.parent.color.repaint(black);
      grandparent.repaint(red);
      if (this === this.parent.left) {
        grandparent.rotate('right');
        return this;
      } else {
        grandparent.rotate('left');
        return this;
      }
    };

    node.rotate = function(dir) {
      var anti = dir === 'left' ? 'right' : 'left',
          grandpa = this.parent.parent,
          parent = this.parent,
          uncle = this.uncle();

      grandpa[dir] = this;
      parent.parent = this;
      this.parent = grandpa;
      parent[anti] = this[dir] ? this[dir] : nil;
      uncle.parent = this;
      console.log(this)

      return this;
    };

    node.insert = function(child) {
      child.parent = this;

      if (child.value < this.value) {
        if (this.left.isNil) {
          this.left = child.repaint(red).conform();
        } else {
          this.left.insert(child)
        }
      } else if (this.value < child.value) {
        if (this.right.isNil) {
          this.right = child.repaint(red).conform();
        } else {
          this.right.insert(child)
        }
      };
      return this;
    };
    return node;
  };

  return redBlackTree;
};
