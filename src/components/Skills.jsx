import React from 'react'
import {Progress} from 'reactstrap'

function Skills() {
    return (
        <div id="skills" className="p-3 " >
            <h1 className="text-dark ">Skills</h1><br/><br/>      
      <div className="text-center"> <h2 className="text-dark " >HTML</h2>  </div>
      <Progress striped value={90} color="primary"/> 
           <div className="text-center"> <h2 className="text-dark">CSS</h2>  </div>
      <Progress striped value={90} color="secondary"/>
       <div className="text-left"><h2 className="text-dark"> JavaScript </h2></div>
      <Progress striped value={80}  color="success"/>
      <div className="text-center" ><h2 className="text-dark" >  jQuery </h2></div>
      <Progress striped value="80" color="info"/>
      <div className="text-center "><h2 className="text-dark">React</h2></div>
      <Progress striped value={85} color="warning"/>
      
      <div className="text-center"><h2 className="text-dark">AJAX</h2></div>
      <Progress striped value="75" color="danger" />
        </div>
    )
}

export default Skills;
