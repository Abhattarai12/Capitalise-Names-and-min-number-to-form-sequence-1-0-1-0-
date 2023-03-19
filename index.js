//Function within functions practice to naming names.
function greet(name) {
  if (name ===""){
    return `Hi!`
  } else {
    return `Hi, ${capitalise(name)}!`;
  };
};
let names = ["Aarambha", "dan", "Lisa", "", "melody"];

function greettwo() {
  for (let i=0;i<names.length;i++) {
    console.log(greet(names[i]));
  };
};
greettwo();
function capitalise(name) {
  return name[0].toUpperCase() + name.slice(1);
};

//Function within functions to practice questions.

//N coins each showing heads or tails. We want all the coins to form a sequence of alternating heads or tails. What is the min number of coins that must be reversed to achieve this?

//Write a function that, given an array A consisting of N integers that returns the min number of coins that must be flipped (0 is heads and 1 is tails). Array are in the form A= [1,0,1,1,0].
function solution(A) {
    let count_1 = 0; //Setting up initial count values.
    let count_2 = 0;
    for (let i=0; i<A.length; i++ ) { //loop through each index
        if ( i % 2 === 0){ //check if the number is 0 or 1
            if (A[i] === 1){ //if else loops add 1 to count everytime the condition is met.
                count_1 += 1;
            } else {
                count_2 += 1;
            }
        } else { // here we need to figure out which reversing is optimal. (weather flipping some 0's to 1 or flipping some 1's to 0's).
            if (A[i] ===0){
                count_1 += 1;
            } else {
                count_2+= 1;
            }
        }
    }
    return  Math.min(count_1,count_2);  //returning the minimum value between 1 and 2
}

let arr = [1,0,1,0,1,0,1,1,1,1,1,1]
console.log(solution(arr));