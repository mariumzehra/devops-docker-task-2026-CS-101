const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'), { index: false }));

app.get('/', (req, res) => {
  const template = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');

  // Fallback: try to read student info from README.md if env vars are not set
  let readme = '';
  try {
    readme = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
  } catch (err) {
    // ignore if README not available
  }

  const getFromReadme = (regex, envVar, fallback) => {
    if (process.env[envVar]) return process.env[envVar];
    const match = readme.match(regex);
    return match ? match[1].trim() : fallback;
  };

  const name = getFromReadme(/Name:\s*(.+)/i, 'STUDENT_NAME', 'YOUR NAME HERE');
  const id = getFromReadme(/Student ID:\s*(.+)/i, 'STUDENT_ID', 'YOUR STUDENT ID HERE');
  const course = getFromReadme(/Course:\s*(.+)/i, 'COURSE_NAME', 'YOUR COURSE NAME HERE');

  // debug logs removed

  const html = template
    .replace('YOUR NAME HERE', name)
    .replace('YOUR STUDENT ID HERE', id)
    .replace('YOUR COURSE NAME HERE', course);

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
