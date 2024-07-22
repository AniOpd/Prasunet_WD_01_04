import React,{useEffect, useState} from 'react';
import './Experince.css';

// Function to parse date for sorting

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
const Experince = () => {
  const [exp, setExp] = useState([]);
  const BaseUrl=import.meta.env.VITE_BASE_URL;

    useEffect(()=>{
        fetch(`${BaseUrl}show/exp`)
            .then((res)=>res.json())
            .then((data)=>{
                data.sort((a,b)=>a.startDate>b.startDate?-1:1);
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
                <div key={index} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'} block-ele`}>
                    <div className="content w-full">
                        <h3>{experience.title}</h3>
                        <h4>{experience.company}</h4>
                        <p>{experience.description}</p>
                    </div>
                    <span className="date">{experience.startDate}-to-{experience.endDate}</span>
                </div>
            ))}
        </div>
</div>
        </>
    );
};

export default Experince;
