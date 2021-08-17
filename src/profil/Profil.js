import React from 'react' ;
import propTypes from "prop-types";

function Profil(props) {
    return( 
    <div>
            
        <h1> {props.fullName} </h1> 
        <h3> {props.profession} </h3> 
        <h5> {props.bio} </h5>
        <div className="img-slider">
             {props.children}
        </div>

    </div>
    )
}
{ /*Profil.defaultProps = {
    fullName:'Ousmane' ,
    profession: 'Developer FullStack' ,
    bio : 'old  musican and Football player ' ,
    src : './'
    
}; */}

Profil.propTypes={ 
    fullNAme :propTypes.string,
    profession :propTypes.string,
    bio : propTypes.string,
    
  
 };


 
 export default Profil ;