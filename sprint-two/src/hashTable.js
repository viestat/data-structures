var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.doubleSize = function() {
  this._limit *= 2;
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
    // for each list in storage array
      // for each element in list
        // insert item
  this.hashEach(oldStorage, function(item, value) {
    this._count = 0;
    this.insert(item, value);
  });
}

HashTable.prototype.hashEach = function(storageArray, callback) {
  // for each list in storage array
  _.each(storageArray, function(item) {
    // for each element in list
    if (item !== undefined)
    {
      var processNode = function(node)
      {
        callback(node.key, node.stored);
        if(node.next !== null)
        {
          processNode(node.next);
        }
      }
      processNode(item.head);
      // do callback
    }
  });
};

HashTable.prototype.insert = function(k, v){
  this._count++;
  if(this._count / this._limit > .75) {
    this.doubleSize();
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!Boolean(this._storage[i])){
  	this._storage[i] = HashLinkedList(); 
  }
  this._storage[i].addToTail(k, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i].find(k);

};

HashTable.prototype.remove = function(k){
  this._count--;
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].remove(k);

};

var HashLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(k, v){
    newValue = {key: k, stored: v};
    var newNode = HashListNode(newValue);
    if(list.head === null)
    {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
      list.tail = newNode;

  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next; 
    return result.key;
  };

  list.remove = function(keyToRemove) {
    var removeCheckNode = function(node)
    {
      var nextNode = node.next;
      if(node.next === null)
      {
      	return false;
      }
      if(nextNode.value.key === keyToRemove)
      {
      	if(nextNode === list.tail) {
      	  list.tail = node;
      	}
      	node.next = nextNode.next;
      } else {
      	removeCheckNode(nextNode);
      }
    };

    if(list.head.value.key === keyToRemove)
    {
    	list.removeHead();
    } else {
      removeCheckNode(list.head);
	}
  };

  list.contains = function(target){

    var checkNode = function(node) {
      if (node.value.key === target) {
        return true;
      }
      if (node.next === null)
      {
        return false;
      }
      return checkNode(node.next);
    };

    return checkNode(list.head);
  };

  list.find = function(k)
  {
    if(list.head === null) {
      return null; 
    }
  	var findCheckNode = function(node)
  	{

      if (node.value.key === k)
      {
      	return node.value.stored;
      } 
      if(node.next === null)
      {
      	return null;
      }
      return findCheckNode(node.next);
  	}
    if (list.head === null) {
      debugger;
    }
  	return findCheckNode(list.head);
  }

  return list;
};

var HashListNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
 * Complexity: What is the time complexity of the above functions?
 */
