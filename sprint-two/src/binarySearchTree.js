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

	return binarySearchTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log(n))
 contains: O(log(n))
 depthFirstLog: O(n)
 */
