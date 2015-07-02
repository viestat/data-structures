var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
}
var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.length = 0;
  extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.length] = value;
		this.length++;
	},
	dequeue: function() {
		var result = this.storage[0];
		if (this.length > 0) {
			for(var i = 0; i < this.length; i++)
			{
				this.storage[i] = this.storage[i + 1];
			}
			this.length--;
		}
		return result;
	},
	size: function() {
		return this.length;
	}
};




