import { useState } from 'react'
import { insertMember } from '../db/db.js'

export default function NewMemberForm () {
    const [name, setName] = useState("");
    const [studentid, setStudentId] = useState("");
    const [memberlevel, setMemberLevel] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // console.log(studentid, ':' , name);
      insertMember(studentid, name, memberlevel);
      // window.location.href = '/';
      alert(`The name you entered was: ${name}, student ID: ${studentid}`)
      window.location.href = '/';
    }
    
    return (
      <div className='table'>
        <h1>
          New Member
        </h1>
        <form onSubmit={handleSubmit}>
          <label>Student ID : 
            <input type="text" value={studentid} onChange={(e) => setStudentId(e.target.value)} />
          </label>
          <br></br>
          <label>Name : 
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br></br>
          <label>Level : M2=1, M1=2, B4=3
            <input type="text" value={memberlevel} onChange={(e) => setMemberLevel(e.target.value)} />
          </label>
          <br></br>
          <button type="submit" >New Member</button>
        </form>
      </div>
    )
    
  }
  