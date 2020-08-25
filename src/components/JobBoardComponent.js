import React from 'react';

const JobBoardComponent = ({ job
        , handleTitleClick
    }) => {

    const titles = [job.role, job.level]

    //languages and tools can have multiple titles and role and level only have one each
    if(job.tools){
      titles.push(...job.tools)
    }

    if(job.languages){
      titles.push(...job.languages)
    }


    return (

        <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${job.featured && 'border-l-4 border-teal-500 border-solid'} lg:flex-row lg:my-4`}>
            <div>
                <img className="-mt-16 mb-4 w-20 h-20 lg:w-24 lg:h-24 lg:my-0" src={job.logo} alt={job.company}/>
            
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {job.company} 
                    {job.areNew && (<span className="text-teal-100 bg-teal-500 m-2 py-1 px-2 rounded-full  text-sm">NEW!</span>)} 
                    {job.featured && (<span className="bg-gray-800 text-white py-1 px-2 rounded-full  text-sm">FEATURED</span>)}</h3>
                <h2 className="font-bold text-xl my-2 hover:text-teal-500 cursor-pointer">{job.position}</h2>
                <p className="flex flex-row  text-md text-gray-500 font-light">
                    {job.postedAt} · {job.contract} · {job.location}
                </p>
            </div>
            <div className="flex flex-row flex-wrap items-center mt-2 pt-4 border-t-2 border-gray-400 
                border-solid lg:border-0 lg:pt-0 lg:mt-2 lg:ml-auto">
                       <span onClick={() => handleTitleClick(job.role)}
                        className="cursor-pointer bg-gray-100 font-bold text-teal-500 mr-4 mb-4 p-2 rounded lg:mb-0 hover:bg-teal-500 hover:text-teal-100">{job.role}</span>
                    <span onClick={() => handleTitleClick(job.level)} className="cursor-pointer bg-gray-100 font-bold text-teal-500 mr-4 mb-4 p-2 rounded lg:mb-0 hover:bg-teal-500 hover:text-teal-100">{job.level}</span>
                     {job.languages ? job.languages.map((language) => <span  onClick={() => handleTitleClick(language)} className="cursor-pointer bg-gray-100 font-bold text-teal-500 mr-4 mb-4 p-2 rounded lg:mb-0 hover:bg-teal-500 hover:text-teal-100">
                          {language}</span>) : ''}
                     {job.tools ? job.tools.map((tool) => <span  onClick={() => handleTitleClick(tool)}className="cursor-pointer bg-gray-100 font-bold text-teal-500 mr-4 mb-4 p-2 rounded lg:mb-0 hover:bg-teal-500 hover:text-teal-100">
                          {tool}</span>) : ''}
                    
            </div>
        </div>

    )
   
 }

export default JobBoardComponent;