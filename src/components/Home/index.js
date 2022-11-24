import React from "react";
import Datas from "../Datas";
import Input from "../Input";
import "./index.scss";

function Home() {
  const [allPeople, setAllPeople] = React.useState([]);
  const [changeCount, setChangeCount] = React.useState(0);
  const [person, setPerson] = React.useState();

  return (
    <>
      <div className="half-height half-top">
        <div className='container' >
          <Input person={person} setPerson={setPerson} changeCount={changeCount} setChangeCount={setChangeCount}/>                        
        </div>
      </div>
      <div className="half-height half-bottom">
        <div className='container'>
          <Datas allPeople={allPeople} setAllPeople={setAllPeople} changeCount={changeCount} setChangeCount={setChangeCount}/>
        </div>
      </div>
    </>
  );
}

export default Home;