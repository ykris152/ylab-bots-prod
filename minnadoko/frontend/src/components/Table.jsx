import { useState } from 'react'
import { getMembers } from '../db/db.js'

import React, { useEffect } from 'react';
import Row from './Row.jsx';

export default function Table () {
    const [dbdata, setDbdata] = useState([]);
  
    useEffect(() => {
      getMembers(setDbdata);
    }, []);
  
    return dbdata.map((member_number, index) => {
      return (
        <div className="table" key={index}>
          <Row index={index} dbdata={dbdata}/>
        </div>
      )
    })
  }