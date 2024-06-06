import React from 'react'
import user_photo from '../images/user.webp'
import { useState } from 'react'
import SemesterForm from './SemesterForm';

function Progress(props) {

  const [addSemester , setAddSemester] = useState(false);

  const handleSemesterClick = ()=> {
    setAddSemester(true);
  };

  const SemesterAdded = ()=> {
    setAddSemester(false);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mt-48 flex flex-col items-center max-w-3xl border-solid rounded-lg border-black border-2 py-4'>
        <div className='grid grid-cols-3 place-items-center gap-2'>
          <div className='mr-6 text-2xl'>
            <h2>Current GPA </h2>
          </div>
          <div className=''>
            <span id="ProgressLabel" className="sr-only">Loading</span>

            <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="50"
                className="block rounded-full bg-gray-200 w-96 my-auto ">
                <span className="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4" style={{width: `${(props.user.current_GPA/4)*100}%`}}>
                    <span className="font-bold text-white"> {props.user.current_GPA} </span>
                </span>
            </span>
          </div>
          <div className='ml-4 text-1xl'>
            <h4>{props.user.current_GPA}/4.0 </h4>
          </div>
        </div>

        <div className='text-2xl mt-6 mb-3'>
          <h2>Semester GPA</h2>
        </div>

        {props.user.semester_GPAs.map((semester ,index) =>(
          <div className='grid grid-cols-3 place-items-center gap-2' key={index}>
            <div className='mr-6 text-2xl'>
              <h3>{semester.name} </h3>
            </div>
            <div className='my-auto'>
              <span id={"ProgressLabel"} className="sr-only">Loading</span>

              <span
                role="progressbar"
                aria-labelledby={"ProgressLabel"}
                aria-valuenow="50"
                className="block rounded-full bg-gray-200 w-96 my-auto ">
                <span className="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4" style={{width: `${(semester.value/4)*100}%`}}>
                  <span className="font-bold text-white"> {semester.value} </span>
                </span>
              </span>
            </div>
            <div className='ml-4 text-1xl'>
              <h4>{semester.value}/4.0 </h4>
            </div>
          </div>
        ))}
      </div>
      <div className='text-2xl my-4 min-w-screen border-solid border-2 rounded-full p-2 bg-blue-500 text-white'>
        <button type='button' onClick={handleSemesterClick}>ADD SEMESTER</button>
      </div>
      {addSemester && (
        <SemesterForm
        SemesterAdded={SemesterAdded}/>
      )}
    </div>
  )
}

export default Progress
