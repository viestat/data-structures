

var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  if (newTree.value === undefined) {
  	//debugger;
  }
  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(Tree(value));
};

treeMethods.contains = function(target){

	//var found = false;
	var checkNode = function(node) {
		if(node.value === target)
		{
			return true;
		} else {
			for(var i = 0; i < node.children.length; i++)
			{
				if(checkNode(node.children[i]))
				{
					return true;
				}
			}
		}
		return false;
	}
	//checkNode(this);
	//return found;
	//debugger;
	return checkNode(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild : O(1)
 contains : O(n)
 */
//Library code
function extend(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
}