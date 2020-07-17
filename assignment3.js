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

for (x of library) {
  author = x.author;
  title = x.title;
  readingStatus = x.readingStatus;
  console.log('Author:' + author + ', Title:' + title + ', Status:' + readingStatus);
}
