import React, { useEffect } from 'react'

function Skills() {

  const [skill, setSkill] = React.useState([]);
  const BaseUrl=import.meta.env.VITE_BASE_URL;

    useEffect(()=>{
      fetch(`${BaseUrl}show/skills`)
      .then((res)=>res.json())
      .then((data)=>{
          setSkill(data);
          console.log(data);
      })
    },[])

    const skillsList = skill.map((skill,index)=>{
        return{
            id:index,
            skill:skill.name,
            level:skill.proficiency
        }
    })
  return (
    <div className='w-full '>
        <div className="w-full p-10 flex flex-col justify-center content-center">
                    <div className="w-full flex justify-center">
                    <h2 className='text-5xl text-white'>Skills</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-3xl text-white p-4 skills" >
                        {
                            skillsList.map((skill)=>{
                                return (
                                  <div
                                    className="card p-4 flex flex-col items-center justify-center scale-90 bg-cyan-800 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:scale-100"
                                    key={skill.id}
                                  >
                                    <div className="skill flex flex-col justify-center w-full block-ele">
                                        <h2 className='text-center'>{skill.skill}</h2>
                                      <progress
                                        className='content-center w-full border-2 border-sky-50 '
                                        id={skill.id}
                                        value={skill.level}
                                        max="100"
                                      ></progress>
                                      <span className='block text-center'>{skill.level}%</span>
                                    </div>
                                  </div>
                                );
                            
                            })
                        }
                    </div>
        </div>
    </div>
  )
}

export default Skills
