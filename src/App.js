import React from 'react' ;
import Profil from './profil/Profil';
import './App.css';
import HandleName from './profil/HandleName';

function App() {
  const styleObject = {color : "blue"}
  const styleObject2 = {color : "red"}
  return (

    <div className="App" >
      <div style= {styleObject}>
        <Profil fullName=" Name : Yahassane NDIAYE "/>
      </div>
      <div style= {styleObject2}>
        <Profil profession=" Profession :  Young web devopper and disigner   "/>
      </div>
        <Profil bio=" Bio : I am Yahassane I had my Bac in 2016 with the Mention Assez Bien. Afterwards I had attended UCAD in the Department of Maths and Computer Science where I had my license. Currently I am in Master Applied Maths and in parallel I am training in Software and Security Engineering at IPM and at the same time in web development at GO_MY_CODE . "/>
      <div>That is my Profil Pic</div>
      <Profil> <img src="./pp_gmc.png" /> </Profil>
      <HandleName name="Yahassane NDIAYE" alertMyInput={alertMyInput} />
    </div>
  );
}



const alertMyInput = name => {alert(name);
        return (
          <div>
            <HandleName name="Yahassane NDIAYE" alertMyInput={alertMyInput} />
          </div>
        );
}
export default App;
