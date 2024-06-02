//https://builtin.com/software-engineering-perspectives/callback-function
function mainFunction(callback) {
  console.log("Performing operation...");
  // Use setTimeout to simulate an asynchronous operation
  setTimeout(function() {
    callback("Operation complete");
  }, 1000);
  }
  
  // Define the callback function
  function callbackFunction(result) {
  console.log("Result: " + result);
  }
  
  // Call the main function with the callback function
  mainFunction(callbackFunction);
  //This code is contributed by Veerendra Singh Rajpoot

  // closure -

  function outer(){
    function inner(){
      console.log(`I'm inner function`)
    }
    console.log(`I'm outer function`)
  }
  outer();


  // return statement 
  //return- na korle function a jai koren na keno valo output paben naa
  // 
  function example(){
    return{
      name:'razib',
      skill:['js','react'],
      print:function(){
        console.log(`this.name, this.skill`)
      }
    }
  }
  var obj=example();
  obj.print();
