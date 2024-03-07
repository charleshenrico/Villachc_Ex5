import needle from 'needle';

//start
app.post('/add-book', (req, res) => {
  res.send('Book ' + req.body.book);
});

app.post('/add-isbn', (req, res) => {
  res.send('ISBN ' + req.body.isbn);
});

app.post('/add-isbn', (req, res) => {
  res.send('Author ' + req.body.author);
});

app.post('/add-isbn', (req, res) => {
  res.send('Year ' + req.body.year);
});

let fd;
try {
  fd = openSync('book.txt', 'a');
  appendFileSync(fd, result);
} catch (err) {
  console.log("Error")
} finally {
  if (fd !== undefined)
  closeSync(fd);
} 


app.get('/find-by-author',(req,res) =>{
  //res.send('Author ' + req.query.author);
  readFile('book.txt', 'utf8',(err, data) => {
    if (err) throw err;
    //console.log(data);

    var lines = data.split('\n');
    var result=[];

    lines.forEach(line => {
      var line_element = line.split(',');

      if(line_element.indexOf(req.query.author)==2){
        console.log('Found it: ' + line);
        result.push(line);
      }
    });
    res.send(result);
  });
});



/*Allows to print in terminal instead of browser */
// needle.get('http://localhost:3000/', (err, res) => {
//      console.log(res.body);   // prints the body of the response message. In this case, “Hello”
// });

// needle.get('http://localhost:3000/greeting?name=Monina', (err, res) => {
//   console.log(res.body);   // prints the body of the response message. In this case, “Hello”
// });

// needle.post(    
//   'http://localhost:3000/submit-data',
//   {},
//   (err, res) => {
//     console.log(res.body)   // prints the server’s response “Received a POST request.”
//   }
// );


// needle.post(
//   'http://localhost:3000/submit-data',
//   { name: 'Charles' },   // can be an object or a string
//   (err, res) => {
//     console.log(res.body);
//   }
// );


