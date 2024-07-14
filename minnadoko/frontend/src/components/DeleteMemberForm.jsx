import { useState } from 'react'
import { deleteMember } from '../db/db.js'

export default function DeleteMemberForm () {
  const [studentid, setStudentId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(studentid, ':' , name);
    deleteMember(studentid);
    alert(`Student number ${studentid} is deleted`)
    window.location.href = '/';
  }
  
  return (
    <div className='table'>
      <h1>
          Delete Member
      </h1>
      <form onSubmit={handleSubmit}>
        <label>Student ID : 
          <input type="text" value={studentid} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <br></br>
        <button type="submit" >Delete Member</button>
      </form>
    </div>
  )
}