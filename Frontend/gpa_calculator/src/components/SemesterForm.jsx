import React from 'react'
import { useState } from 'react'

function SemesterForm(props) {
    //const {SemesterAdded} = props;
    const [semesterData , setSemesterData] = useState({name:"" , value : ""});

    const handleInputChange = (event)=> {
        const {name , value} = event.target;
        setSemesterData((prev) => {
            return{...prev , [name] : value};
        });
        console.log("handleInputChange WORKED");
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const newSemesterGPA = {
        name : semesterData.name,
        value : parseFloat(semesterData.value),
        }    
        props.addSemesterGPA(newSemesterGPA);
        
        setSemesterData({name:"" , value: ""});
        console.log("handleSubmit WORKED");
    }

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4" onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className='col-span-2'>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Semester Name"
                    type="text"
                    id="name"
                    name='name'
                    value={semesterData.name}
                    onChange={handleInputChange}
                />
                </div>

                <div>
                    <div className='grid grid-cols-3'>
                        <h1>Module Name</h1>
                        <h1>Credits</h1>
                        <h1>Grade</h1>
                    </div>
                </div>

                <div>
                <label className="sr-only" htmlFor="value">value</label>
                <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Semester GPA"
                    type="number"
                    step="0.01"
                    min="0.00"
                    max="4.00"
                    id="value"
                    name='value'
                    value={semesterData.value}
                    onChange={handleInputChange}
                />
                </div>
            </div>

            <div className="mt-4 flex gap-9">
                <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                Add Semester
                </button>
                <button
                type="button"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                onClick={props.SemesterAdded}
                >
                Cancel
                </button>    
            </div>
            </form>
        </div>
    </div>
  )
}

export default SemesterForm;
