
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];
  var i = 0;
  while (i < arr.length) {
    newArray.push(arr.slice(i, i + size));
    i += size;
  }
  return newArray;
}
