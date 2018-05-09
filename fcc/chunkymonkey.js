function chunkArrayInGroups(arr, size) {
    var newArr = [];

    for (var i=0; i<arr.length; i = i+size) {
      newArr.push(arr.slice(i,i+size ) );
    }

    return newArr;
  }

  chunkArrayInGroups(["a", "b", "c", "d"], 2);

  // console.log("hello")



// Need to review!! Find other ways to do it too.
// Review slice syntax
