import React from 'react';
import Navbar from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
function Home() {
   return (
      <div className="">
         <Navbar />
         <div className="content">
            {/* Your main content goes here */}
            <h1>Welcome to ChefConnect!</h1>
            <p>Your content goes here...</p>
         </div>
         <Footer />
      </div>
   );
}

export default Home;