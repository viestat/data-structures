var BinarySearchTree = function(value){
  var binarySearchTree = {};
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.value = value;

	binarySearchTree.insert = function(newValue) {
    if(newValue > this.value){
      if(this.right === null) {
        this.right = BinarySearchTree(newValue);
      } else {
        this.right.insert(newValue);
      }
    } else {
      if(this.left === null) {
        this.left = BinarySearchTree(newValue);
      } else {
        this.left.insert(newValue);
      }
    }
	};

	binarySearchTree.contains = function(value) {
    if (this.value === value)
    {
      return true;
    }
    if (this.value < value)
    {
      if (this.right === null)
      {
        return false;
      }
      return this.right.contains(value);
    } else {
      if (this.left === null)
      {
        return false;  
      }
      return this.left.contains(value);
    }
	};

	binarySearchTree.depthFirstLog = function(callback) {
    callback(this.value);
    if (this.right !== null)
    {
      this.right.depthFirstLog(callback);
    }
    if (this.left !== null)
    {
      this.left.depthFirstLog(callback);
    }
  };

  binarySearchTree.breadthFirstLog = function(callback) {
    var queue = new Queue();
    // Add root node to queue
    queue.enqueue(this);

    // while the queue is not empty
    while(queue.size() > 0) {

      var currentNode;
      // currentNode equals queue.dequeue
      currentNode = queue.dequeue();
      // enqueue both non-null children of currentNode
      if(currentNode.left !== null) {
        queue.enqueue(currentNode.left);
      }
      if(currentNode.right !== null) {
        queue.enqueue(currentNode.right);
      }
      // callback on currentNode
      callback(currentNode.value);
    }



  };
  return binarySearchTree;
};


var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};
Queue.prototype.dequeue = function() {
  var result = this.storage[0];
  if (this.length > 0) {
    for(var i = 0; i < this.length; i++)
    {
      this.storage[i] = this.storage[i + 1];
    }
    this.length--;
  }
  return result;
};
Queue.prototype.size = function() {
  return this.length;
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log(n))
 contains: O(log(n))
 depthFirstLog: O(n)
 */
