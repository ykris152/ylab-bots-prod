const token = process.env.TOKEN;

const Url=process.env.BACKEND_URL;

// insert a new row
export function insertMember(student_id, display_name, member_level){
  fetch(Url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
    "student_id": `${student_id}`,
    "display_name": `${display_name}`,
    "member_level": `${member_level}`,
    }),
  })
  // .then(response => response.text()) // Change this line
  // .then(data => console.log(data)) // Change this line
  // .catch(error => console.error('Error:', error));
}

// Update a row in a table
export function updateMember(student_id, display_name, place){
  let bodyData = {
    "student_id": `${student_id}`,
    "display_name": `${display_name}`,
    "home" : false,
    "laboratory" : false,
    "class" : false,
    "in_univ" : false,
    "out_univ" : false,
    "exp_room" : false,
    "workshop" : false,
    "central_building" : false,
    "gym" : false,
    "work_in_remote" : false
  }

  bodyData[place] = true;

  fetch(`${Url}?student_id=eq.${student_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(bodyData),
   })
  //  .then(response => response.text())
  //  .then(data => console.log(data))
  //  .catch(error => console.error('Error:', error));
}

export function deleteMember(deletestudentid) {
  // Delete a row from a table
  // const deletestudentid = "MA21000"
  fetch(`${Url}?student_id=eq.${deletestudentid}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  })
  // .then(response => response.text())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));
}

// Get all rows
export async function getMembers(setDbdata) {
  let dbdata;
  try {
    const response = await fetch(`${Url}?order=member_level.asc,student_id.asc`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    dbdata = await response.json();
    setDbdata(dbdata);
    // return dbdata;
  } catch(error){
    console.log(error)
  }
  
  //  .then(response => response.json())
  //  .then(data => {return data })
  //  .then(data => console.log(data))
  //  .catch(error => console.error('Error:', error));
}