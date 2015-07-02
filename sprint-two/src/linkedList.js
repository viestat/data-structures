var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
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
    return result;
  };

  list.contains = function(target){

    var checkNode = function(node) {
      if (node.value === target) {
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

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
