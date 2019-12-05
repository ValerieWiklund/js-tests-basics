//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2";
let arr = [];
let newArr = [];
function camelCase(str) {
  // split into an array, capitalize first letter of all words but the first, lowercase the first letter of the first word. Then concatenate them all back together.
  arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    console.log(i)
    if (i == 0) {
      newArr.push(arr[i].charAt(0).toLowerCase() + arr[i].slice(1))
    }
    else {
      newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }
  }

  return newArr.join('')
}
