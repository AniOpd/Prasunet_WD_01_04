import React,{useState} from 'react'
import axios from 'axios';

function AddProject() {
  const BaseUrl = import.meta.env.VITE_BASE_URL;
  const [features, setFeatures] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [projectImage, setProjectImage] = useState(null);
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description= e.target.projectDescription.value;
    const github = e.target.github.value;
    const demo = e.target.demo.value;
    const date = e.target.date.value;
    const image = projectImage;

    const data= new FormData();
    data.append('file', image);
    data.append('upload_preset', 'ml_default');
    data.append('cloud_name', 'dfhkh8399');
    const imageUri = await fetch('https://api.cloudinary.com/v1_1/dfhkh8399/image/upload', {
      method: 'POST',
      body: data
    }).then(res => res.json()).then(data => {
      console.log(data);
      return data.secure_url;
    }).catch(err => {
      console.error(err);
      return null;
    });



    try {
      const response = await axios.post(`${BaseUrl}create/createProject`, {
        title,
        description,
        github,
        demo,
        date,
        image: imageUri,
        features,
        techStack,
        token
      });
      alert(response.data.message);
      console.log(response);
    } catch (error) {
      console.error(error);
      alert(error.response.data.message)
    }
  }

  

  return (
    <>
      <div className='w-full flex justify-center items-center'>
        <form action="submit" className='m-2 bg-gray-100 md:w-2/3 rounded-2xl w-full overflow-hidden p-5' onSubmit={handleSubmit} >
          <div className='w-full flex flex-col gap-4'>
          <div className="flex w-full mx-3 my-2 gap-5">
            <label htmlFor="projectName">Project Name</label>
            <input className='outline-none border-b-2 border-gray-600 bg-transparent' type="text" id="projectName" name="title" placeholder="Project Name" required/>
          </div>
          <div className="w-full pr-5 flex mx-3 my-2 gap-5">
            <label htmlFor="projectDescription">Project Description</label>
            <textarea className='flex-auto border-b-2 mx-2 border-gray-700 outline-none bg-transparent text-black' name="projectDescription" id="projectDescription" placeholder="Project Description" required></textarea>
          </div>
          <div className="flex w-full mx-3 my-2 gap-5">
            <label htmlFor="GitHub">Github Link</label>
            <input className='bg-transparent border-b-2 border-gray-700 flex-1' type="text" id="githublink" name="github" placeholder="github link" required/>
          </div>
          <div className="flex w-full mx-3 my-2 gap-5">
            <label htmlFor="GitHub">Demo Link</label>
            <input className='bg-transparent border-b-2 border-gray-700 flex-1' type="text" id="demoLink" name="demo" placeholder="demo link" required/>
          </div>
          <div className="flex w-full mx-3 my-2 gap-5">
            <label htmlFor="projectImage">Project Image</label>
            <input type="file" id="projectImage" name="projectImage" onChange={(e)=>{
              setProjectImage(e.target.files[0]);
            }} required/>
          </div>
          <div className="flex w-full mx-3 my-2 gap-5 flex-wrap">
            <label htmlFor="features">Features</label>
           <div className='border-b-2 border-gray-700 flex-1'>{features.map((feature, index) => <p key={index} className='mx-1 '>{index+1}-{feature}-{<button className=' text-xs font-thin text-red-700' onClick={()=>{
              const newFeatures = features.filter((_, i) => i !== index);
              setFeatures(newFeatures); 
           }}>X</button>}</p>)} 
          <div className='flex gap-2'>
          <textarea className='flex-1 border-none mx-2 border-gray-700 outline-none bg-transparent text-black' name="feature" id="features" placeholder="features" ></textarea>
            <div className=' cursor-pointer' onClick={(e) => {
              e.preventDefault();
              setFeatures([...features, document.getElementById('features').value]);
              document.getElementById('features').value = '';
            }}>Add Feature</div>
          </div>
          </div>
          </div>
          <div className="flex w-full mx-3 my-2 gap-5">
            <label htmlFor="techStack">Tech Stack</label>
            <div className='border-b-2 border-gray-700'>
            <div className='flex gap-1'>
            {techStack.map((tech, index) => <p className=' bg-yellow-200 border-none rounded-xl p-1 outline-none hover:scale-110 cursor-pointer' key={index}>{tech}-{<span onClick={()=>{
              const newTechStack = techStack.filter((_, i) => i !== index);
              setTechStack(newTechStack);
            }}>x</span>}</p>)}
            </div>
            <div className='flex gap-2'>
            <input className='bg-transparent border-none outline-none' type="text" id="techStack" name="techStack" placeholder="Tech Stack" />  
            <div className=' cursor-pointer' onClick={(e) => {
              e.preventDefault();
              setTechStack([...techStack, document.getElementById('techStack').value]);
              document.getElementById('techStack').value = '';
            }}>Add Tech Stack</div>
            </div>
             </div>
          </div>
          <div className='flex w-full mx-3 my-2 gap-5'>
            <label htmlFor="date">Date</label>
            <input type="month" id="date" name="date" required/>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 ">
            <button className='p-2 bg-blue-500 rounded-xl hover:scale-125 hover:bg-blue-400' type="submit">Add Project</button>
          </div>  
          </div>
        </form>  
      </div>    
    </>
  )
}

export default AddProject