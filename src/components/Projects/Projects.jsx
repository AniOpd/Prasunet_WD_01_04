import React,{useEffect, useState} from 'react'
// import projects from '../../assets/projects.json'

function Projects() {

    const [projects,setProjects] = useState([]);
    const BaseUrl=import.meta.env.VITE_BASE_URL;

    useEffect(()=>{
        fetch(`${BaseUrl}show/projects`)
            .then((res)=>res.json())
            .then((data)=>{
                setProjects(data);
            }).catch((e)=>console.log(e))
    },[])


    const projectList = projects.map((project,index) => {
            return (<>
                        <div className='block-ele w-full h-full p-4 m-4 flex flex-col items-center text-white border-2 border-yellow-600' key={index}>
                          <h5 className="card-title m-2 max-full text-3xl md:text-5xl font-bold text-center">{project.title}</h5>
                          <div className='flex md:flex-row flex-col gap-5 w-full md:p-10 p-2 justify-center'>
                          <img src={project.image} alt="..." className='h-80 w-80 md:h-96 md:w-96 grayscale-[50%] rounded-lg'></img>
                          <div className='flex flex-col gap-1'>
                          <div className='flex flex-row gap-2 flex-wrap'>
                            {project.techStack.map((technology,index)=>{
                                return <div className='' key={index}>
                                    <p className="card-text max-w-full my-3 text-xl bg-yellow-600 p-2 rounded-lg">{technology}</p>
                                </div>
                            })}
                          </div>
                          <p className="card-text max-w-full my-3 text-2xl">{project.description}</p>
                          {project.features.map((feature,index)=>{
                              return <p className="card-text max-w-full my-3 text-xl" key={index}>{feature}</p>
                          })}
                          <p className="card-text max-w-full my-3 text-xs font-extralight text-gray-300">Completed on {project.date}</p>

                          <div className='flex flex-row gap-4 justify-center'>
                            <a href={project.github} target="_blank" rel="noreferrer" className='bg-yellow-600 p-2 rounded-lg hover:bg-rose-600 hover:cursor-pointer hover:scale-125'>Github</a>
                            <a href={project.demo} target="_blank" rel="noreferrer" className='bg-yellow-600 p-2 rounded-lg hover:bg-rose-600 hover:cursor-pointer hover:scale-125'>Demo</a>
                          </div>
                  
                          </div>
                          </div>
                       </div>
                    </>
            )
    })
  return (
    <div>
        <div>
            <div className='block-ele text-white flex justify-center items-center text-3xl md:text-6xl'><h1>Projects</h1></div>
            <div className=" projects w-full flex flex-col items-center px-5">
                    {projectList.sort((project1,project2)=>project1.date>project2.date?1:-1)}
            </div>
        </div>
    </div>
  )
}

export default Projects
