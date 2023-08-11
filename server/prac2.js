const express = require('express');
const app = express();


const genrieMovie = {
   'action' : [
       'Plane',
       'Shotgun Wedding',
       'Cocaine Bear'
   ],
   'comedy' : [
       'Puss in Boots: The Last Wish',
       'House Party'
   ],
   'romance' : [
       'Takkar',
       'Ghosted'
   ]
};


// define a url parameter using :<VARIABLE_NAME>
// req.params.<VARIABLE_NAME>
app.get('/movies/:val', (req, res) => {


   // same as the variable in url :val
   const genre = req.params.val;
  
   console.log(genre);


   const movieList = genrieMovie[genre];


   const responseObj = {
       movie: movieList
   };


   res.json(responseObj);
})


app.listen(3000, () => {
   console.log('server is running...')
})




