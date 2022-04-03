import React from 'react'

const Header = () => {
    return (
        <nav class="bg-blue-600 py-2 md:py-4 w-screen">
        <div class="bg-blue-600 container px-8 mx-auto md:flex md:items-end w-screen">
    
          <div class="flex justify-start">
            <div class="font-bold text-3xl text-white">
                📰
                NewsBugle
            </div>
          </div>
          <div class="flex justify-end align-end">
            <div class="font text-2xl justify-end text-white">&nbsp;...... Your one stop solution for news 💯</div>
          </div>
    </div>
  </nav>
    );
}

export default Header;