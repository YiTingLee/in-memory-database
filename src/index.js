import * as readline from "readline";
import ParserMain from "node-sql-parser";
const { Parser } = ParserMain;
const parser = new Parser();

const myInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputList = [];
myInterface.on("line", (input) => {
  inputList.push(input);
  if (input[input.length - 1] === ";") {
    const sql = inputList.join(" ");
    sqlHandler(sql);
  }

  if (input === "exit") {
    console.log("close the database");
    process.exit(0);
  }
});

function sqlHandler(sql) {
  let ast;
  try {
    console.log("sql command: ", sql);
    ast = parser.astify(sql);
    console.log("ast:", JSON.stringify(ast));
  } catch (_) {
    console.log("incorrect sql syntax.");
  } finally {
    inputList = [];
  }
}
