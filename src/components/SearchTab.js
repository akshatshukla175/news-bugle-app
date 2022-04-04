import React from "react";

const SearchTab = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
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
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Global
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      India
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      General
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Science
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Politics
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Technology
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Sports
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Entertainment
                    </button>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
                      <div>
                        <div>
                        <i class="fa fa-search text-gray-400"></i>
                        <input type="text" class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything..."/>
                        <button class="h-10 w-20 text-white rounded-lg bg-blue-600 hover:bg-blue-800">Search</button>

                        </div>
                      </div>
                  </div>
                  <div className="flex justify-center content-end align-end">
                      Sort by : &nbsp;
                      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600  transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="r1" id="r1" checked /><label>Popularity</label>&emsp;
                      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600  transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="r2" id="r2"/><label>Relevancy</label>&emsp;
                      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600  transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="r3" id="r3"/><label>Date Of Publish</label>
                  </div>
                </div>
                  
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    
                  <div className="flex justify-center content-center">
                  Positivity Section is a place that views wholesome and positive news articles. The color labels for different news articles denote the vibes that they bring along.

                  </div>
                  <div class="flex justify-center content-center">
                    <label class="inline-flex items-center mt-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" checked={true}/><span class="ml-2 text-gray-700">Enable Positivity Section</span>
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

export default function TabsRender() {
  return (
    <>
      <SearchTab color="blue" />
    </>
  );
}
