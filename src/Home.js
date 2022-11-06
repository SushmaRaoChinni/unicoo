import React from 'react';
import './Home.css';
import Card from './Card'


function Home() {
  return (
    <div className='home'>
        <h1>New this Week</h1>
        <div className='home__section'>
          
            <Card className="image" 
              src= "https://a0.muscache.com/im/pictures/b8a34ef9-195e-4fc6-a265-5df56a955208.jpg?im_w=720"
            />
            
            <Card className="image"
              src= "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720"
            />
            <Card className="image"
              src= "https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720"
            />
            
          </div>
          <div>
            <p>Dates</p>
          </div>
          <h1>Top seller</h1>
          <div className='home__section'>

            <Card className="video"
              src = "https://www.airbnb.co.in/experiences/2496585?currentTab=experience_tab&federatedSearchId=b9f06c49-585a-425e-bdd0-ca7d414396e7&searchId=d23a7d1e-53f7-4178-bed4-a319805bbf2b&sectionId=82e400ee-d437-4d96-8d9a-bd3827ecab07&source=p2"
            />
            
            <p></p>
            <Card className="image"
              src= ""
            />
            <Card className="image"
              src= ""
            />
            <Card className="image"
              src= ""
            />
            <Card className="image"
              src= ""
            />
            <Card className="image"
              src= ""
            />
            <Card className="image"
              src= ""
            />
            <Card className="image"
              src= ""
            />
            <Card className="image"
              src= ""
            />
            <Card className="image"
              src= ""
            />
            <Card className="image"
              src= ""
            />         
            </div>
        </div>
   
  )
}

export default Home