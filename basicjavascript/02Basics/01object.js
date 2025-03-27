// object declaration by literal
const mySym=Symbol("key1")
const jsUser={
    name:"shivam",
    rollNumber: 52,
    "email id":"shivam@123",
    [mySym]:"key1"
};
    console.log(jsUser.name)//shivam
    console.log(jsUser["email id"]);//there is no way to write jsuser.email id
    console.log(jsUser["name"]);
    jsUser["email id"]="svm"//to make change in values
    jsUser.name="shivam pandey"
    console.log(jsUser["email id"]);
    console.log(jsUser.name);
        
        console.log( jsUser);
        // add function
        jsUser.greeting=function(){
            console.log("hello js user")
        }
        jsUser.greetingTwo=function(){
            console.log(`hello js user i am ${this.name}`);
            
        }
        console.log(jsUser.greeting());
        console.log(jsUser.greeting);
        console.log(jsUser.greetingTwo());
        
    
    
    