const fs = require("fs");

// fs.writeFile(
//   "employees.json",
//   ' {"name": "Employee 1 Name", "salary": 2000}',
//   "utf8",
//   (err) => {
//     if (err) console.log(err);
//   }
// );

// fs.appendFile(
//   "employees.json",
//   '\n{"name": "Employee 2 Name", "salary": 3000 }',
//   "utf8",
//   (err) => {
//     if (err) console.log(err);
//   }
// );

fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
});
