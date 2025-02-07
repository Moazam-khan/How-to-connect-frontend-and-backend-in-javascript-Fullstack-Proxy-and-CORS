import express from 'express';

const app = express();

// 

//get a list of jokes where array and object of each joke is returned inside object is id, title and content
app.get('/api/jokes', (req, res) => {
    res.send([
      { id: 1, title: 'Joke 1', content: 'This is the first joke.' },
      { id: 2, title: 'Joke 2', content: 'This is the second joke.' },
      { id: 3, title: 'Joke 3', content: 'This is the third joke.' }
    ]);
  });
  
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})