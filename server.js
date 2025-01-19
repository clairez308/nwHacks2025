const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/app.py', (req, res) => {
  exec('python app.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error.message}`);
      return res.status(500).send(`Error: ${error.message}`);
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).send(`Stderr: ${stderr}`);
    }
    console.log(`Stdout: ${stdout}`);
    res.send(`Script output: ${stdout}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
