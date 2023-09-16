import { useState,useRef } from 'react'
import axios from 'axios'
import { youtube_parser } from './Utils'


function App() {

  const inputRef = useRef()
  const [urlResult,setURLResult]= useState(null)

  function handleSubmit(e){
    e.preventDefault()
    console.log(inputRef.current.value)
    const youtubeID = youtube_parser(inputRef.current.value)
    console.log(youtubeID)
    const options={
      method:'get',
      url:'https://youtube-mp36.p.rapidapi.com/dl',
      headers: {
        'X-RapidAPI-Key': 'abf0955fc7msh1c8d62a4bef7fe4p12dcc5jsnb354095ad9b3',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      },
      params:{
        id:youtubeID
      }
    }
    axios(options)
    .then(res => setURLResult(res.data))
    .catch(err => console.log(err))
    inputRef.current.value=""
  }

  return (
    <div className='app'>
      <span className='logo'>rohan puri</span>
      <section className="content">
        <h1 className="contentTitle">YouTube to mp3 Converter</h1>
        <p className="contentDescription">
          Get Mp3 of YouTube video in a click!
        </p>

        <form onSubmit={(e)=>{handleSubmit(e)}} className='form'>
           <input ref={inputRef} type="text" className='formInput' placeholder='Paste URL here' />
           <button type='submit' className='formBtn'>Search</button>

        </form>

        <a href={urlResult} className='downloadBtn'>Download Mp3</a>
      </section>
    </div>
  )
}

export default App
