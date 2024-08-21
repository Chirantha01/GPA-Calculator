import React from 'react'
import user_photo from '../images/user.webp'
import { useState } from 'react'
import SemesterForm from './SemesterForm';
import Test from './Test';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Progress(props) {

  const [addSem , setAddSem] = useState(false);
  //const {addSemester}= props;
  const percentage = props.user.current_GPA*25;

  const handleAddSemesterClick = ()=> {
    setAddSem(true);
  };

  const SemesterAdded = ()=> {
    console.log("Cancel button clicked");
    setAddSem(false);
  };

  return (
    <div className='flex flex-row justify-center items-center'> 
      
      <div className='flex flex-col mx-auto'>
        <div className='text-2xl mt-6 mb-3'>
          <h2 className=''>Semester GPAs</h2>
        </div>

      
        {props.user.semesters.map((semester ,index1) =>(
          <div className='mt-3 flex flex-col max-w-3xl border-solid rounded-lg border-black border-2 py-4 my-3' key={index1}>
            <div className='flex justify-between items-center mb-4'>
              <div className='text-3xl p-2 font-semibold'>{semester.name}</div>
              <div className='text-2xl text-red-600 font-bold bg-red-300 p-1 rounded-lg mr-3'><button>Delete</button></div>
            </div>
            <div>
              <div className=' grid grid-cols-5 place-items-center gap-3 text-xl text-center py-2 font-bold'>
                <h2 className='col-span-2'>Module</h2>
                <h2>Credits</h2>
                <h2>Grade</h2>
                <h2></h2>
              </div>
              <div>
                {semester.modules.map((module , index2) => (
                    <div className=' grid grid-cols-5 place-items-center gap-3 text-xl text-center py-2' key={index2}>
                        <h2 className='col-span-2'>{module.name}</h2>
                        <h2>{module.credit}</h2>
                        <h2>{module.grade}</h2>
                        <div className='flex'>
                            <button className=' text-green-600 bg-green-200 p-1'>Edit</button>
                            <button className=' text-red-600 bg-red-200 p-1'>Remove</button>
                        </div>
                    </div>
                ))}
              </div>
            </div>
            <div className='grid grid-cols-5 place-items-center mt-3'>
              <div className=' col-span-4 text-xl text-white bg-blue-400 rounded-xl p-3'><button onClick={handleAddSemesterClick}>Add Module</button></div>
              <div className=' justify-end'>
                <div className=' text-2xl font-bold text-blue-700 bg-blue-200 p-2 rounded-xl text-center'>{semester.semesterGPA}/4.0</div>
                <div className=' text-lg p-2'>Total Credits : 20</div>
              </div>
            </div>
          </div>
        ))}
      
      

      <div className='mx-auto text-2xl my-4 max-w-xs text-center border-solid border-2 rounded-full p-2 bg-blue-500 text-white'>
        <button type='button' onClick={handleAddSemesterClick}>ADD SEMESTER</button>
      </div>
      {addSem && (
        <Test
        addSemester={props.addSemester}
        SemesterAdded = {SemesterAdded}
        />
      )}
      </div>

      <div className='my-auto max-h-full grid grid-rows-3 place-items-center gap-2 mx-auto'>
        <div className='mr-6 text-2xl'>
          <h2>Current GPA </h2>
        </div>
        <div style={{ width: 200, height: 200 }}>
            
            <CircularProgressbar value={percentage} text={`${props.user.current_GPA}`} />
        </div>
      </div>

    </div>
  )
}

export default Progress
