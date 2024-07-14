import { useState } from 'react'
import { updateMember } from '../db/db.js'

export default function Cell({ index, place, label, state, setState, dbdata}) {

    function handleClick(index, place, setState, dbdata){
      // let ddb;
      // getMembers().then(result => {
      //   console.log(result);
      //   setDbdata(dbdata);
      // });
      // // getDb(index,place);
    //   console.log(dbdata);
      // insertMember(index, dbdata[index]['name'])
      updateMember(dbdata[index]['student_id'], dbdata[index]['display_name'], place)
      setState(place)
    }
    
    return (
      <button 
        className="button-40"
        role="button"
        style={state === place ? {backgroundColor: "#111827", color: "#FFFFFF"} :{backgroundColor: "#FFFFFF", color: "#111827"}}
        onClick={() => handleClick(index, place, setState, dbdata)
        } >
          {label}
        </button>
    );
  }