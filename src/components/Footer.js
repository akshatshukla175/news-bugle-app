import React from 'react'

const Footer = () => {
    return (
    <nav class="bg-blue-600 py-2 md:py-4 w-screen">
        <div class="bg-blue-600 container px-8 mx-auto md:flex md:items-end w-screen">
    
          <div class="flex justify-start">
            <div class="font-bold text-2xl text-white">
                📰
                NewsBugle
            </div>
          </div>
            <div class="font text-2xl justify-end text-white align-end">&nbsp;by <a href='https://www.linkedin.com/in/akshat-shukla-b66b4b16b/'>Akshat Shukla</a> and <a href='https://www.linkedin.com/in/arshdeepsingh2000/'>Arshdeep Singh</a> 🤓</div>
        </div>
    </nav>
    );
}

export default Footer;