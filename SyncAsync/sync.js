function foo() {
  console.log("Hello");
}

console.log("Start!");
hoo();
console.log("End!");

function bar() {
  foo();
  console.log("Bye!");
}
function hoo() {
  bar();
  console.log("Help!");
}
