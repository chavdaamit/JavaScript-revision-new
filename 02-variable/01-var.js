// var is a functional scop variable

function message() {
  var msg = "hello world";
  console.log(msg);

  if (true) {
    console.log(msg);
  }
}

// console.log(msg);

message();

// var declaration
var name;
// initialization

name = "amit";

console.log(name);

// reinitialization

var name = "amit chavda";

console.log(name);
