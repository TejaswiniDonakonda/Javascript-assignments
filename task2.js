function myfun(start,end){
    for(i=start;i<=end;i++){
        console.log(i);
    }
}
myfun(10,20);

console.log("------reverse order----");
let j=20;
while(j>=10){
    console.log(j);
    j--;
}

console.log("----fun without name----");

const two=function(){
    for(let i=2;i<=12; i=i+2){
        console.log(i);
    }
}
two();

console.log("-------fat arrow function------");
const trio=()=>{
    for(let p=0;p<=25;p=p+3){
        console.log(p);
    }
}
trio();