import React from "react";

const SearchTab = (props) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [query, setQuery] = React.useState("")
  let color = "blue";
  console.log(props);
  return (
    <>
      <div className="flex flex-wrap bg-indigo-100 w-screen">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Explore
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>  Search By Keyword
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Positivity Section
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto justify-center content-center">
              <div className="tab-content tab-space ">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex justify-center content-center">
                    Explore the latest news available 🗞️ or explore a genre 🔍
                  </div> 
                    
                  <div className="grid p-3 grid-cols-9 sm:grid-cols-1 md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-9 gap-3">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={props.handleButtonClick.bind(this,"global")} >
                      Global
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={props.handleButtonClick.bind(this,"in")}>
                      India
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={props.handleButtonClick.bind(this,"business")} >
                      Business
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={props.handleButtonClick.bind(this,"science")}>
                      Science
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={props.handleButtonClick.bind(this,"politics")}>
                      Politics
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={props.handleButtonClick.bind(this,"technology")}>
                      Technology
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={props.handleButtonClick.bind(this,"sports")}>
                      Sports
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={props.handleButtonClick.bind(this,"entertainment")}>
                      Entertainment
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={props.handleButtonClick.bind(this,"health")}>
                      Health
                    </button>
                  </div>
                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2" >
                  <div className="flex justify-center content-center"> 
                    Search your news based on a keyword ⌨️, news sources ℹ️, or simply sort by relevancy 👍, popularity 👨‍🎤, date of publish 📅.
                  </div>
                  <br/>
                  <div className="flex justify-center content-center">
                        <div class="flex"><span class="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-indigo-600 rounded-full text-sm bg-indigo-100 items-center rounded-r-none pl-2 py-1 text-indigo-800 border-r-0 placeholder-indigo-300"><i class="fas fa-search"></i></span>
                        <input type="text" class="px-2 py-1 h-10 w-2/3 border border-solid  border-indigo-600 rounded-full text-sm leading-snug text-indigo-700 bg-indigo-100 shadow-none outline-none focus:outline-none font-normal rounded-l-none flex-1 border-l-0 placeholder-black" onChange={event => setQuery(event.target.value)} placeholder="Search news ... "/>&emsp;
                        <button class="h-10 w-20 text-white rounded-lg bg-blue-600 hover:bg-blue-800" onClick={props.handleSearch.bind(this,query)}>Search</button>                        </div>
                  </div>

                </div>
                  
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    
                  <div className="flex justify-center content-center">
                  Positivity Section is a place that views wholesome and positive news articles. The color labels for different news articles denote the vibes that they bring along.

                  </div>
                  <div class="flex justify-center content-center">
                    <label class="inline-flex items-center mt-3">
                        <input type="checkbox" onChange={props.handlePositive.bind(this)} class="form-checkbox h-5 w-5 text-blue-600" checked={props.positive}/><span class="ml-2 text-gray-700">Enable Positivity Section</span>
                    </label>
                  </div>
                  <br/>

                  <div className="flex justify-center content-center">
                    <span class="inline-circle bg-green-400 rounded-full px-4 py-1 text-sm font-semibold text-white mr-2 mb-2"> signifies positive articles</span>
                    <span class="inline-circle bg-yellow-400 rounded-full px-4 py-1 text-sm font-semibold text-white mr-2 mb-2"> signifies neutral articles</span>
                    <span class="inline-circle bg-red-400 rounded-full px-4 py-1 text-sm font-semibold text-white mr-2 mb-2"> signifies negative articles</span>
                  
                  </div>
                  <div className="flex justify-center content-center">
                    Positivity Section helps you to know about the good things happening around you by removing negative articles. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchTab;
