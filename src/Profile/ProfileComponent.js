import React from 'react';
import {Button} from 'react-bootstrap';
import propTypes from 'prop-types';
const ProfileComponent = ({fullName , bio , profession , children , Name}) => { 
  return (
        <div>
          <h1 style={{color:'red'}}>{fullName} </h1>
          <h2 style={{color:'green'}}>I'm a {bio}</h2>
          <p>I work {profession}</p>  
         {children}
         <Button style={{backgroundColor:'blue', width:100 , color:'whitesmoke' , height:30}} variant="primary" onClick={Name}>Add</Button>

        </div>
    );
}
ProfileComponent.defaultProps={
  fullName:"Mouhamed mansour" , bio:"student" , profession:"Nothing" , Name:"Mouhamed" , children:<p>Attention !!!</p>
}

ProfileComponent.propTypes={
  fullName:propTypes.string, bio : propTypes.string , profession : propTypes.string , Name : propTypes.string  
}

export default ProfileComponent;


