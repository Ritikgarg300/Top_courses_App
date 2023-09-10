import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";
const App = () => {
  const[courses,setCourse]=useState(null);
  const[loading,setloading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);
   async function fetchData(){
    setloading(true);
    try{
     let resonse = await fetch(apiUrl);
     let output= await resonse.json();
     setCourse(output.data);
    }
    catch(error){
      toast.error("data Not Fetch");
    }
    setloading(false);
   }

   useEffect(()=>{
      fetchData();
   },[])
  return(<div className="min-h-screen flex flex-col bg-bgDark2">
    <div>
    <Navbar/>
    </div>
    <div className="bg-bgDark2">
    <div>
    <Filters filterData={filterData} category={category} setCategory={setCategory}/>
    </div>
    <div className='w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center items-center min-h-[50vh]'>
    {loading?<Spinner/>:<Cards  courses={courses} category={category}/>}
   </div>
    
    </div>
    
  </div>);
};

export default App;
