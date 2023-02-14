// let number = parseInt(prompt("enter number"));
let number = 10 // this will print 10 numbers if we want to print more numbers we can use the above code and comment this line
let n1=0, n2= 1, next;
function printFibo() {
    let i=0
    while(i<=number){
        console.log(n1);
        next=n1+n2;
        n1=n2;
        n2=next;
        i++;
    }
}
printFibo();