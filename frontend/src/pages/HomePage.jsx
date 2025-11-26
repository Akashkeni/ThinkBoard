import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import RateLimitedUI from '../components/RateLimitedUI.jsx'
import axios from 'axios'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard.jsx'

const HomePage = () => {

  const [isRateLimited, setISRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/notes")
          console.log(res.data)
          setNotes(res.data)
          setISRateLimited(false)

        } catch (error) {
          console.log("Error detching notes:")
          console.log(error)
          if(error.response?.status === 429){
            
            setISRateLimited(true)
          }else{
            toast.error("Failed to Load notes")
          }
        }finally{
          setLoading(false)
        }
    }
    fetchNotes();
  },[])

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

     { loading &&  <div className=' text-center text-primary py-10'>Loading Notes.....</div>}


     {notes.length > 0 && !isRateLimited && (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {notes.map(note=>(
          <NoteCard key={note._id} note={note} />
        ))}


      </div>
     )}
    </div>
  )
}

export default HomePage