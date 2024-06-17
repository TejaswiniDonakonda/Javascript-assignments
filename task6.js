let section=[
    {
        A:["sri","sathya","seetha","santhanu"],
        subjects:["maths","physics","Arts"]
    },
    {
        A:["asher","ashika","ashuuu","anvi"],
        subjects:["chemistry","Physics"]
    },
    {
        A:["nyshadha","Niraa","Nisha"],
        subjects:["maths","arts","Chemistry"]
    }
];


section.map((user,index)=>{
    console.log(user.A);
    user.subjects.map((sub,index2)=>{
        console.log(sub);
        console.log("\t");
        
    });
});