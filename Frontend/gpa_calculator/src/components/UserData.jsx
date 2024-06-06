import { useState } from "react";

const userData = {
    name : "Chirantha",
    current_GPA : 3.59,
    semester_GPAs : [
      {name : "Semester 1" , value :3.61},
      {name : "Semester 2" , value :3.41},
      {name : "Semester 3" , value :3.7},
    ]
  }

export const useUserData = () => {
    const [users , setUsers] = useState(userData);

    const addSemesterGPA = (newSemesterGPA) =>{
      setUsers((prevState) =>({
        ...prevState,
        semester_GPAs:[...prevState.semester_GPAs , newSemesterGPA]
      }));  
    }

    return{ users , setUsers , addSemesterGPA};
}