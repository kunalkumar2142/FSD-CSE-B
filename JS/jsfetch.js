const url="https://dummyjson.com/users?limit=2"; //for 2 persons
const pr=fetch(url);
pr.then((res)=>{
    return res.json();
})
.then((data)=>{
    data.users.forEach((da) => {
        console.log("name=",da.firstName);
    console.log("email=",da.email);
    console.log("ip=",da.ip);
    console.log("MAc Address=",da.macAddress);
    });
   
})
.catch((err)=>{
    console.error("error:",err.message);
})