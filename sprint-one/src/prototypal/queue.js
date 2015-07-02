var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.length = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.length] = value;
		this.length++
	},
	dequeue: function() {
		var result = this.storage[0];
		if(this.length > 0) {
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


