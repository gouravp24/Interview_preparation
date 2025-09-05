const numbers = [1, 2, 3, 4, 5];  
numbers[100]=500;
console.log(numbers);

//[ 1, 2, 3, 4, 5, <95 empty items>, 500 ]