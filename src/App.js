import React , {useState, useEffect} from 'react';
import Header from "./components/Header"
import JobBoardComponent from './components/JobBoardComponent';
import data from './assets/data.json'

console.log(data);

function App() {
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => setJobs(data), []);

const filterFunc = ({role, level, tools, languages}) => {
    
  
  const titles = [role, level]

    if(filters.length === 0){
      return true
    }

    //languages and tools can have multiple titles and role and level only have one each
    if(tools){
      titles.push(...tools)
    }

    if(languages){
      titles.push(...languages)
    }

  
    //at least one title is included in the filter. 
    return titles.some(title => filters.includes(title))
}

  const handleTitleClick = (title) => {

     // this doesn't allow  adding the tag twice
     if(filters.includes(title)) return;

    setFilters([...filters, title])
  }


  const handleRemoveClick = (passedFilter) => {
    setFilters(filters.filter(fil => fil !== passedFilter))
  }

  const clearFilters = () => {
    setFilters([])
  }


  const filteredJobs = jobs.filter(filterFunc)



  return (
    <div className="App">
      <Header />
      <div  className="container m-auto">
          {filters.length > 0 && (
              <div className="flex bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded z-10 relative">
                {filters.map((filter) => (
              <div className="flex flex-row mr-2 mb-2">
                  <span className="font-bold text-teal-500 bg-gray-100 px-2 py-1 rounded-l-sm">{filter}</span>
                  <span
                      onClick={() => handleRemoveClick(filter)}
                      className="bg-teal-500 flex flex-col justify-center px-2 rounded-r-md 
                    transition-colors duration-300 cursor-pointer hover:bg-gray-900">
                      <img src='./images/icon-remove.svg' alt="remove-icon" />
                    </span>
              </div>
              
              ))}
                 <button onClick={clearFilters} className="font-medium text-teal-500 ml-auto cursor-pointer hover:underline">Clear</button>
              </div>
            )}

      </div>

      {jobs.length === 0 ? (
            <p>Jobs fetching...</p>
          ) : (
            filteredJobs.map((job) => (
              <JobBoardComponent 
                job={job} 
                key={job.id} 
                handleTitleClick={handleTitleClick}
           
              />
            ))
          )
        }

 

    </div>
  );
}

export default App;
