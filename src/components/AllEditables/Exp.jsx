import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const parseDate = (dateStr) => {
  const parts = dateStr.split(' ');
  const monthMap = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  return new Date(parts[1], monthMap[parts[0]]);
};

// Sort experiences by date in descending order
const sortExperience = (a, b) => {
  const dateA = parseDate(a.startDate);
  const dateB = parseDate(b.startDate);
  return dateB - dateA;
};


function Exp() {

  const [exp, setExp] = useState([]);
  const BaseUrl=import.meta.env.VITE_BASE_URL;

  useEffect(()=>{
      fetch(`${BaseUrl}show/exp`)
          .then((res)=>res.json())
          .then((data)=>{
              setExp(data);
              console.log(data);
      })
  },[])


  return (
    <>
<div className='w-full p-2 Exp_hover'>
        <div className='flex justify-center w-full p-2'>
            <h2 className='text-white text-3xl text-bold uppercase text-center'>Education / Experience</h2>
        </div>
        <div className="experience-section w-full p-2">
            {exp.map((experience, index) => (
                <Link to={`/editExp/${experience._id}`} className='w-full h-full'>
                <div key={index} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="content block-ele">
                        <h3>{experience.title}</h3>
                        <h4>{experience.company}</h4>
                        <p>{experience.description}</p>
                    </div>
                    <span className="date">{experience.startDate}-{experience.endDate}</span>
                    {/* <span className="date"></span> */}
                </div>
                </Link>
            ))}
        </div>
            <div>
            <Link to='/addExp' className='w-1/2 p-2'>
                <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Experience</button>
            </Link>
            
            </div>
</div>
        </>
  )
}

export default Exp