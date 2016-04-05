var fib = function() {

  var f = [1,1,2];
  var i = 2;
  var x = 0;
  
  while (f[i] <= 4000000) {
  
    f[i] = f[i - 1] + f[i - 2];
    f.push(f[i]);
    i++;
    
    if (f[i] % 2 === 0) {
      
      x += f[i];
    }

  }

  return x;

}

console.log(fib());
