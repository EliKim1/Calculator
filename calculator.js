function calculator(){
    console.log("calculating");
 
 


     //get the two values from the prompt
    let num1 = Number(prompt("Eneter the first number:"));
    let num2 = Number(prompt("Eneter the second number:"));

    // do four operations
    let sum, sub, div, mult;
    sum = num1+num2;
    sub = num1-num2;
    div = num1/num2;
    mult = num1*num2;


   //display the results in the results zone
   document.getElementById("results").innerHTML=`<p class="results">Your total amount is your +${sum}, -${sub}, /${div}, * ${mult}</p>`;

}