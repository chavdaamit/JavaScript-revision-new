// let is blockScope variable

function blockScope() {
  if (true) {
    let msg = "good morning";

    console.log("in  blockScope", msg);
  }

  // console.log(msg)
}
blockScope();

// declaration

let name;

// initialization
name = "amit";

console.log("declaration and initialization", name);

// override

name = " price";

console.log("override", name);
