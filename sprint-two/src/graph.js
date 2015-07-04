

var Graph = function(){
	//Properties here
	this.storage = {};
};

Graph.prototype.addNode = function(node){
	this.storage[node] = [];
};

Graph.prototype.contains = function(node){
	return this.storage.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
	delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	return (this.storage[fromNode].indexOf(toNode) !== -1) && (this.storage[toNode].indexOf(fromNode) !== -1);
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.storage[fromNode].push(toNode);
	this.storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	this.storage[fromNode].splice(indexOf(toNode), 1);
	this.storage[toNode].splice(indexOf(fromNode), 1);
};

Graph.prototype.forEachNode = function(cb){
	for (var key in this.storage)
	{	//console.log(key);
		cb(key);
	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 addNode : O(1)
 contains : O(1) //hasOwnProperty is constant time
 removeNode : O(1)
 hasEdge : O(n) //indexOf is linear time
 addEdge : O(1)
 removeEdge : O(n)
 forEachNode : O(n)
 */