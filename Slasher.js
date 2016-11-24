function slasher(arr, howMany) {
  // it doesn't always pay to be first
//   if(howMany <= arr.length){
//     arr.splice(0, howMany);
//   }
//   else {
//     arr = [];
//   }
//   return arr;
  
//   arr.splice(0, howMany);
//   return arr;
  return arr.slice(howMany);
}
