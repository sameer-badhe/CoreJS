/* ========================================================================
    3. Write a JavaScript program to display the reading status (i.e. display
      book name, author name and reading status) of the following books.
      var library = [
      {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
      },
      {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
      },
      {
      author: 'Suzanne Collins',
      tit…
      🙏
  ========================================================================= */
  
var library = [
  {
  author: 'Bill Gates',
  title: 'The Road Ahead',
  readingStatus: true
  },
  {
  author: 'Steve Jobs',
  title: 'Walter Isaacson',
  readingStatus: false
  }
]

// used for of loop and store the values and added into console siquencewise
// we can also add this into the table but as of now I have added in simple console.
for (x of library) {
  author = x.author;
  title = x.title;
  readingStatus = x.readingStatus;
  console.log('Author:' + author + ', Title:' + title + ', Status:' + readingStatus);
}
