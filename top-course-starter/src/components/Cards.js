import React, { useState } from 'react';
import Card from './Card';
const Cards = ({courses,category}) => {
    const[likeCourses,setlikedCourses]=useState([]);
    const allcourses =()=>{
        console.log(category);
        if(category === 'All'){
            const getCourses=[];
           Object.values(courses).forEach(array => {
             array.forEach(course => {
            getCourses.push(course);
              })
          })  
       return getCourses; 
        }
        else{
            //main sirf specific category ka data array krunga
            //courses m 4 array
        return courses[category];
        }
    }

    return (
        
        <div className='flex flex-wrap justify-center gap-4 mb-4 '>
            
           { allcourses().map((cours)=>{
             return <Card cours={cours} key={cours.id} likeCourses={likeCourses} setlikedCourses={setlikedCourses}/>
            })
            
            }
        </div>
    );
}

export default Cards;
