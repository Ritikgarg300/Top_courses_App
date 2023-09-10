import React from 'react';
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({cours,likeCourses,setlikedCourses}) => {
    function clickHandler(){
      //logic 
      if(likeCourses.includes(cours.id)){
        console.log("upper");
      setlikedCourses((prev) => prev.filter((cid)=>cid != cours.id));
      toast.warning("like removed");  
    }else{
        console.log("lower");
        if(likeCourses.length === 0){
          setlikedCourses([cours.id]);
        }
        else{
            setlikedCourses((prev)=>[...prev,cours.id]);
        }
        toast.success("Like successfully");
      }
    }
    return (
        <div className='w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden'>
            <div className='relative'>
                <img src={cours.image.url}/>
            
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-7px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likeCourses.includes(cours.id)?<FcLike fontSize="1.75rem"/>:<FcLikePlaceholder fontSize="1.75rem"/>
                   }</button>
            </div>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{cours.title}</p>
                <p className='mt-2 text-white'>{cours.description.length >100?(cours.description.substr(0,100))+"...":(cours.description)}</p>
            </div>
        </div>
    );
}

export default Card;
