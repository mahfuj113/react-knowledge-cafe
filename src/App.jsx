import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
const [bookmarks,setBookmarks] = useState([]);
const [readingTime,setReadingTime] = useState(0)
// handle bookmarks
const handleAddToBookmarks = blog => {
  const newBookMarks = [...bookmarks,blog]
  setBookmarks(newBookMarks);
}
//handle mark as reading time
const handleMarkRead = (id,reading_time) => {
  const newReadingTime = readingTime + reading_time;
  setReadingTime(newReadingTime);
  // remove mark as read
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmarks)
  console.log(id);
}
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks}  handleMarkRead={handleMarkRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
