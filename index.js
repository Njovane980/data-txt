const fs = require('fs');
fs.writeFile('data.txt', 'First content = I love Programming', (err) => {
  if (err) throw err;
  console.log('1st content in the file data.txt');
});

fs.writeFile('data.txt', '2nd content = Technology is the future\n\n', (err) => {
  if (err) throw err;
  console.log('Second content written to data.txt');
});
fs.appendFile('data.txt', '3rd content = Programmming solves complex problems', (err) => {
  if (err) throw err;
  console.log('New content appended to data.txt');
});






