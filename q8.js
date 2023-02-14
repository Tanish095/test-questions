let number = 10 // this will print 10 numbers if we want to print more numbers we can use the above code and comment this line
let n1=1, n2= 2;
let printSeries = ()=>{
    let i=0
    let t=0
    while(i<=number){
        if(t==0){
            console.log(n1)
            n1=n1+5
            t=1
        }
        else if(t!=0){
            console.log(n2)
            n2=n2+6
            t=0
        }
        i++;
    }
}
printSeries();