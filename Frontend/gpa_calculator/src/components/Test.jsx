import React from 'react'
import { useState } from 'react'
import axios from "axios";

function Test(props) {
    const {SemesterAdded} = props;
    const [semesterData , setSemesterData] = useState("");

    const handleInputChange = (event)=> {
        //console.log(event.target.value);
        setSemesterData(event.target.value);
        //console.log(semesterData);
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await axios.post("http://localhost:4000/" , {name:semesterData});
        console.log(response.data);
        props.addSemester(response.data);
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
                    value={semesterData}
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
                onClick={SemesterAdded}
                >
                Cancel
                </button>    
            </div>
            </form>
        </div>
    </div>
  )
}

export default Test;
