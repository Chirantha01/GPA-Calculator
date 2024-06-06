import React from 'react'
import user_photo from '../images/user.webp'
import { useState } from 'react'
import Header from './Header';
import SideBar from './SideBar';
import Progress from './Progress';
import Graphs from './Graphs';
import { useUserData } from './UserData';

function User() {

  const [userData , setUserData] = useState( {
    name : "Chirantha",
    current_GPA : 3.59,
    semester_GPAs : [
      {name : "Semester 1" , value :3.61},
      {name : "Semester 2" , value :3.41},
      {name : "Semester 3" , value :3.7},
      {name : "Semester 4" , value :3.79},
      {name : "Semester 5" , value :3.88},
      {name : "Semester 6" , value :3.9},
      {name : "Semester 7" , value :3.95},
      {name : "Semester 8" , value :4.0},
    ]
  });

  const {users , setUsers} = useUserData();

  const [semesterData , setSemesterData] = useState({name:"" , value : ""});

  const handleInputChange = (event)=> {
    const {name , value} = event.target;
    setSemesterData({
      ...semesterData,
      [name] : value,
    });
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    const newSemsterGPA = {
      name : semesterData.name,
      value : parseFloat(semesterData.value),
    }

    setUserData((prevState) => ({
      ...prevState,
      semester_GPAs : [...prevState.semester_GPAs , newSemsterGPA],
    }));

    setSemesterData({name:"" , value: ""});
  }

  const [displayStatus , setDisplayStaus] = useState(true);

  const handleStatusClick = () => {
    setDisplayStaus(true);
  };

  const handleGraphClick = () => {
    setDisplayStaus(false);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <div className='flex flex-row flex-initial'>
        <div className=''><SideBar 
          user={users}
          handleStatusClick={handleStatusClick}
          handleGraphClick={handleGraphClick}/></div>
        <div className='flex-1'>
          {
            displayStatus ? (<Progress user={users}/>) : (<Graphs user={users}/>)
          } 
        </div>
      </div>
    </div>
  )
}

export default User