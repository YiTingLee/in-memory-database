import * as readline from "readline";

const myInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

myInterface.on("line", (input) => {
  if (input === "exit") {
    console.log("close the database");
    process.exit(0);
  }
});
