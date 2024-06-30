
import './App.css'
import { useRef,useState,useEffect } from 'react'
import { uploadFile } from './api/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 
  const [file, setFile] = useState('')
  const [result, setResult] = useState('')

  const logo = "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg"
  const fileInputRef = useRef()

  const onClickUpload =()=>{
    fileInputRef.current.click();
  }
  useEffect(()=>{
    const getImage =async()=>{
      if(file){
          const data = new FormData()
          data.append("name",file.name)
          data.append("file", file)

        let response =  await uploadFile(data)
        setResult(response.path)
        toast.success("File Added Successfully");
      }

    }
    getImage()

  },[file])


  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(() => {
      toast.success("Link Copy Successfully");
    }, () => {
      toast.error('Failed to copy the link')
    })
  }
  return (
    <div className="container">
    <img src={logo} alt="banner" />
    <div className="wrapper">
      <h1>File Share System</h1>  
      <p>Upload and share the download link!</p>
      <button onClick={()=>onClickUpload()}>Upload</button>
      <input type="file"
       ref={fileInputRef} 
       style={{display:'none'}}
       onChange={(e)=>setFile(e.target.files[0])}
           />
      {result && (
          <div className="result-container">
            <a href={result} target="_blank" rel="noopener noreferrer">{result}</a>
            <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
          </div>
        )}

      </div>
    </div>

  )
}

export default App
