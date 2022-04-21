var users = [
    {email:"hasanaltan@gmail.com" , password:"12345" },
    {email:"basanaltan@gmail.com" , password:"24681" }
    
]

var posts = [
    {email:"hasanaltan@gmail.com" , post:"HELLO!!!"},
    {email:"basanaltan@gmail.com" , post:"HI!!!"},
    {email:"basanaltan@gmail.com" , post:"GOODBYE!!!"}
]

var email = prompt("email ?")
var password = prompt("password ?")

function login(){
    if((email == users[0].email && password == users[0].password)||(email == users[1].email && password == users[1].password)){
      console.log(posts)
    }
    else{
        alert("email or password is wrong !!")
    }
}

login(email , password)