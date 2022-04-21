var users = [
  { email: "hasanaltan@gmail.com", password: "12345" },
  { email: "basanaltan@gmail.com", password: "24681" },
];

var posts = [
  { email: "hasanaltan@gmail.com", post: "HELLO!!!" },
  { email: "basanaltan@gmail.com", post: "HI!!!" },
  { email: "basanaltan@gmail.com", post: "GOODBYE!!!" },
];

var email = prompt("email ?");
var password = prompt("password ?");

function thereuser(email, password) {
  for (i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      return true;
    }
  }
  return false;
}

function login() {
  if (thereuser(email, password)) {
    alert(" Goodjob - Look the console for the posts !!")
    console.log(posts);
  } else {
    alert("email or password is wrong !!");
  }
}

login(email, password)
