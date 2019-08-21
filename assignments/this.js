/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const iceCream = {
    flavor: "mint chocolate chip",
    color: "green",
    calories: 200,
    info: function(){
        return `this is ${this.flavor} and has ${this.calories} calories.`;
    }
}
console.log(iceCream.info());
// Principle 3
function Newicecream(flavor,color,calories){
    this.flavor= flavor;
    this.color= color;
    this.calories= calories;
}
let plum= new Newicecream("plum","purple",200);
console.log(plum);
// code example for New Binding

// Principle 4
function ghost(){
    console.log(this.boo)
}
const myGhost = {

    name: "casper",
    boo: "boooo"
}
ghost.call(myGhost);
// code example for Explicit Binding