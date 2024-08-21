import { useEffect, useState } from "react";

const userData = {
    name : "Chirantha",
    current_GPA : 3.59,
    semesters : [

      //Semester 1
      {
        name:"Semester 1",
        semesterGPA : 3.61,
        modules : [
          {name:"Fluid Mechanics" , grade:"A" , credit:2},
          {name:"Programming Fundamentals" , grade:"A-" , credit:3},
          {name:"Electrical Fundamentals" , grade:"A" , credit:2},
          {name:"Mathematics" , grade:"B-" , credit:2},
          {name:"Mechanics" , grade:"A-" , credit:3},
          {name:"Properties of Materials" , grade:"A" , credit:2},
        ]
      },

      //Semster 2
      {
        name:"Semester 2",
        semesterGPA : 3.42,
        modules : [
          {name:"Program Construction" , grade:"B" , credit:3},
          {name:"Computer Organization and Digital Design" , grade:"A" , credit:3},
          {name:"Data Structures and Algorithms" , grade:"A" , credit:2},
          {name:"Theory of Electricity" , grade:"B-" , credit:2},
          {name:"Language Skills Enhancement" , grade:"A" , credit:2},
          {name:"Methods of Mathematics" , grade:"B" , credit:2},
        ]
      },
    ]
  }

export const useUserData = () => {
    const [users , setUsers] = useState(userData);
    const [semester , setSemester] = useState([]);
    const [module , setModule] = useState([]);
    const [cgpa , setCGPA] = useState(userData.current_GPA);

    // const addSemester = (newSemester) =>{
    //   setSemester(newSemester);
    //   //console.log(newSemesterGPA.value);
    //   //setCGPA(newSemesterGPA.value); 
    // };
    
    function addSemester(newSemester) {
      setSemester(newSemester);
    }

    // useEffect (() => {
    //   setUsers((prev) => ({
    //     ...prev,
    //     semesters: [prev.semesters.concat(semester)]
    //   }))
    //   setSemester([]);
    // }, [semester])

    // useEffect(() =>{
    //   setUsers((prev) => ({
    //     ...prev,
    //     current_GPA : cgpa,
    //   }));
    // } , [cgpa]);

    // useEffect(() =>{
    //   setUsers((prevState) =>({
    //     ...prevState,
    //     semesters : [...prevState.semesters.concat(semester_GPAs)]
    //   }));
    // } , [semester_GPAs])

    // useEffect(() =>{
    //   setUsers((prevState) =>({
    //     ...prevState,
    //     semesters : {
    //       ...prevState.semesters,
    //       modules:[...prevState.semesters.modules.concat(module)]
    //     }
    //   }));
    // } , [module])

    const addModule = (semesterName , newModule) =>{
      setUsers((prev)=>({
        ...prev,
        semesters : prev.semesters.map((semester)=>
        semester.name === semesterName
          ? {...semester,
            modules : [...semester.modules.concat(newModule)]
          } : semester) 
      }))
    };

    return{ users , setUsers , addModule , addSemester , setSemester};
}