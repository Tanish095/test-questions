let sumEven=0
let sumOdd = 0
for(i=1;i<=100;i++)
{
  if(i%2==0)
  {
    sumEven=sumEven+i
  }
  else{
    sumOdd = sumOdd+i
  }
}
console.log("Sum of even nos. " +sumEven)
console.log("Sum of odd nos. " +sumOdd)