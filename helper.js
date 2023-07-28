const fs = require("fs");

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data));
    });
  });
};

const writeFile = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) reject(err);
      else resolve("Success");
    });
  });
};

module.exports = { readFile, writeFile };

// Promise
// async methods
// in ES6 Promises (resolve, reject)
// promise is resolved
// promise is rejected
// promise.then((e) =>{}).catch(err => {})
// JSON javascript object notation [{}]
// xml
