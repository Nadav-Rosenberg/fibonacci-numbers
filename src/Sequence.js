var Sequence = function(a,b,n) {
  this.array = new Array(n);
  this.array[0] = a;
  this.array[1] = b;
};

Sequence.prototype.populate = function() {
  n = this.array.length;
  for (var i = 2; i < n; i++) {
    
    this.array[i] = this.array[i-2] + this.array[i-1];  

   }
};
