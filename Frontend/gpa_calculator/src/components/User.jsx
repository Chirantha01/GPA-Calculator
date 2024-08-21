import React from 'react'
import user_photo from '../images/user.webp'
import { useState } from 'react'
import Header from './Header';
import SideBar from './SideBar';
import Progresscheck from './Progresscheck';
import Graphs from './Graphs';
import { useUserData } from './UserData';

function User() {

  const {users , setUsers , addSemester} = useUserData();

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
            //displayStatus ? (<Progress user={users} addSemesterGPA={addSemesterGPA}/>) : (<Graphs user={users}/>)
            <Progresscheck user={users} addSemester={addSemester}/>
          } 
        </div>
      </div>
    </div>
  )
}

export default User