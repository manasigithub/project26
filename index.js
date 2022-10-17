//Function #1 : Array slice 
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood = foods.slice(1,4)
console.log(modifiedFood);

//Function #2 : Array splice
foods.splice(2, 0, "noodles", "icecream")
console.log(foods);

//Function #3 : Filter
const numberArray = [12,324,213,4,2,3,45,4234];
var isEven = numberArray.filter((value) => value  % 2 == 0);
console.log(isEven);

//Function #3 : Prime
// for(var i=2;i<numberArray-1;i++)
// {
//     var isPrime  = numberArray.filter((value));
//     if(value  % 2 != 0){
//         console.log(isPrime);
//     }
//     else{
//         break;
//     }
  


//function #4 : Reject

