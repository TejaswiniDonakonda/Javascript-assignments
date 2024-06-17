let student={
    rollno:1,
    name:"Krishna",
    class:"XI",
    college:"SVN"
};
console.log(student);

let studentlist=[
    {rollno:1, name:"Radhe",class:"XI",college:"SVN"},
    {rollno:2, name:"Kridhi",class:"XI",college:"Siddartha"},
    {rollno:3, name:"Krishna",class:"XI",college:"matha"},
    {rollno:4, name:"Sathya",class:"XI",college:"Narayana"},
];
console.log(studentlist);

 studentlist.map((user,index)=>{
    console.log(user.rollno,user.name,user.class,user.college);
    console.log("\n----------------------");
 })