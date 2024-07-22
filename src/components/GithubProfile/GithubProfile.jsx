import React,{useEffect, useState} from "react";

function GithubProfile(children) {
    const name = children.name;
   
    const [gitHubData,setGitHubData]=useState("");

    useEffect(()=>{
        fetch(`https://api.github.com/users/${name || 'AniOpd'}`)
            .then((res)=>res.json())
            .then((data)=>{
                setGitHubData(data);
                console.log(gitHubData);
    })
    },[name])
    const pic=gitHubData.avatar_url;



  return (
    <>
      <div className="border-2 border-black p-5 w-full h-full bg-black">
      <div className="my-2 border-2 border-yellow-700 w=full">
        <h1 className="text-white text-3xl text-center uppercase">Github Profile</h1>
      </div>
      <div className="gitHub_Profile flex flex-col justify-center items-center md:flex-row w-full border-2 border-yellow-400">
            <div className="gitHub_avatar w-full md:w-1/2 flex justify-center items-center mt-2 p-2">
                <img src={pic} alt="" className="lg:h-2/3 h-32 rounded-full brightness-125"/>
            </div>
            <div className="gitHubDisc w-full md:w-1/2 flex flex-col md:p-10">
                    <h1 className="text-white text-2xl text-center m-3">Name: {gitHubData.name}</h1>
                    <h1 className="text-white text-2xl text-center m-3">Followers: {gitHubData.followers}</h1>
                    <h1 className="text-white text-2xl text-center m-3">Following: {gitHubData.following}</h1>
                    <h1 className="text-white text-2xl text-center m-3">Public Repos: {gitHubData.public_repos}</h1>
            </div>
      </div>
    <div className="text-white flex justify-center content-center w-full mt-3">
    <a href={gitHubData.html_url} target="_blank" rel="noreferrer">
        <button className="p-4 bg-orange-500 rounded-3xl hover:bg-red-600 cursor-pointer">
            View Profile
        </button>
        </a>
    </div>
      </div>

    </>
  );
}

export default GithubProfile;
