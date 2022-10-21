

function check(e){

  let a = document.getElementById("pass1").value;
  let b =  document.getElementById("pass2").value;
/* 
a & b are gonna be the text content of input fields
*/

  const forbid = ["Harry", "Elizabeth", "Shana"];
  // this is an array of the forbidden usernames
  let x = document.getElementById("Usn").value;
  if (a==b){
    /*first checks if passwords match and if that's true
    function will loop through an compare to see if user prompted username is equal to any of the forbidden ones  */
      let c;
    for(c=0; c < 3; c++){
      if(x==forbid[c]){
        alert("Username is taken.");
        
e.preventDefault();
        //if forbidden username is used an alert raises and the form submission is cancelled 
      }
    }
    
    

  }else{
    //if passwords don't match an alert raises and form does not submit.
    alert("Passwords must match.");
e.preventDefault();
  }
}
  function writeTxt() {
//Grab CTX of canvas attribute element
    
  
  const ctx = document.getElementById('kanvas').getContext('2d');
  ctx.fillStyle = "red";
  ctx.font = '10px verdana';


//Change the color and font with fillstyle and dont
    
  ctx.strokeText('JAH LOVE!', 0, 50);
    //Stroketext function writes text on canvas.
  
          
         }