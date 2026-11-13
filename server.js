import express from 'express';
import path from 'path';
const courses = [
  { id: 1, title: 'Course 1', credits: 1 },
  { id: 2, title: 'Course 2', credits: 3 },
  { id: 3, title: 'Course 3', credits: 2 }
];


const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
let requestCount = 0;
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`${req.method} ${req.url} ${timestamp}`);
  
  next();
};
app.use(requestLogger);
const requestCounter = (req, res, next) => {
  requestCount++;
  next();
}
app.use(requestCounter);


app.use(express.static(path.join(__direname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/hello', (req, res) => {
  res.send('Hello from Efe s server');
});
//I guess we send this to internett?
app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send('userAgent: *\nDisallow: /');
});

app.get('/old-page', (req, res) => {
  res.redirect('/hello');
});

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'ok',
    nodeVersion: process.version,
    uptimeSeconds:process.uptime() 
  });
});
app.get('/api/headers', (req, res) => {
  res.json({userAgent: req.headers['userAgent'],
    accept: req.headers['accept']
  });
});
app.post('/api/subscribe', (req, res) => {
  res.json({subscribed: true}).status(201);
});
app.get('/api/admin', (req, res) => {
  res.status(403).json({"error":"Forbidden"});
});
app.get('/api/stats',(req,res)=>{
  res.json({"requestsServed": requestCount })
});

app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    res.status(404).json({ "error": "Not found" });
  } else{
    res.status(404).send('Page cannot be found');
  }
});