var fib = function() {

// Excluded the element 2 from the array, since the do/while loop execute at least one time its instructions.
// This way, the f[2] element will be the sum of 1+1 and so on.

  var f = [1, 1]; 
  var i = 2;
  var x = 0;

  do {

    f[i] = f[i - 1] + f[i - 2];
    f.push(f[i]);
    i++;
    
      if (f[i] % 2 === 0) {

      x += f[i];
      }
    
  } while (f[i] < 4000000);

return x;

}

console.log(fib());
