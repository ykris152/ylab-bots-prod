import { useState } from 'react'
import Cell from './Cell.jsx';

export default function Row ( {index, dbdata} ) {

    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }
  
    const [state, setState] = useState(getKeyByValue(dbdata[index],true));
    return (
      <>
        <div className="row">
          <div className="name">
            <button className="button-name" role="button" onClick={() => console.log(dbdata[index]['student_id'])}>{dbdata[index].display_name}</button>
          </div>
          <div className="button-row">
            <Cell index={index} dbdata={dbdata} place="laboratory"       label="Laboratory" state={state} setState={setState} />
            <Cell index={index} dbdata={dbdata} place="class"            label="Class" state={state} setState={setState}/>
            <Cell index={index} dbdata={dbdata} place="in_univ"          label="In University" state={state} setState={setState}/>
            <Cell index={index} dbdata={dbdata} place="out_univ"         label="Out University" state={state} setState={setState}/>
            <Cell index={index} dbdata={dbdata} place="exp_room"         label="Experiment Room" state={state} setState={setState}/>
            <Cell index={index} dbdata={dbdata} place="workshop"         label="Workshop" state={state} setState={setState}/>
            <Cell index={index} dbdata={dbdata} place="central_building" label="Central Building" state={state} setState={setState}/>
            <Cell index={index} dbdata={dbdata} place="gym"              label="Gym" state={state} setState={setState}/>
            <Cell index={index} dbdata={dbdata} place="work_in_remote"   label="Remote" state={state} setState={setState}/>
            <Cell index={index} dbdata={dbdata} place="home"             label="Home" state={state} setState={setState}/>
          </div>
        </div> 
      </>
    )
  }