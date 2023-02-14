//declare an array
let arr = []

//add item in array

arr.push(3)
arr.push(4)
arr.push(5)

//delete an item from last
arr.pop()

// add an item at a particular index
Array.prototype.insert = function ( index, ...items ) {
    this.splice( index, 0, ...items );
};
arr.insert(1,10)

//delete an item from a particular index
let index = 2
arr.splice(index,1)

console.log(arr)