

function About(){
    return(
        <>
        <div className="h-25 container-xl aboutus w-100 ">
            <h1 className="topic border-top border-2 pt-4">About us</h1>
            <p className="paragraph border-bottom border-2 pb-5">Welcome to Foodie Site where flavor meets tradition! We are passionate about bringing the rich, diverse, and vibrant world of Indian non-vegetarian cuisine directly to your table. Our mission is to offer a culinary experience that celebrates the art of cooking and the joy of sharing delicious meals.</p>
        </div>
        <div className="gallery w-100 container-xl ">
            <img className=" aboutimg d-block mx-auto  w-100 " src=".\assets\pexels-chanwalrus-958545.jpg" alt="error"/>

        </div>
        <div className="container-xl feature">
            <p className="one">FEATURES</p>
            <p className="two">What We Offer</p>

        </div>
         <div className=" list  container-xl border border-light  ">
            <div className="list1 p-5">
             <div classname="box1 border border-light  ">
             <i className=" cal fa-regular fa-calendar-days fa-lg text-light "></i>
                <h3 className="text-light text-center opacity-50">Daily Fresh Menu</h3>
                <p className="text-light text-center ">We continuously update our menu with new dishes every day.</p>
             </div>
             <div classname="tag2">
             <i class="fa-solid fa-bowl-food fa-lg text-light"></i>
             <h3 className="text-light text-center opacity-50">Fresh Ingredients</h3>
             <p className="text-light text-center ">"Fresh Ingredients" emphasizes the value of using high-quality, seasonal produce in cooking.</p>
             </div>
             <div classname="tag3">
             <i class="fa-solid fa-hand-sparkles fa-lg text-white"></i>
             <h3 className="text-light text-center opacity-50">hygienic</h3>
             <p className="text-light text-center">"Hygienic food practices ensure safety, prevent contamination, and promote health."</p>
             </div>
           </div>

             <div className="list2 p-5">
             <div classname="tag4"> 
             <i class="fa-solid fa-utensils fa-lg text-light"></i>
                <h3 className="text-light text-center opacity-50">Creative Chefs</h3>
             <p className="text-light text-center ">"Creative chefs innovate, transforming simple ingredients into extraordinary dishes."</p></div>
             <div classname="tag5"> 
             {/* <i class="fa-solid fa-plate-wheat fa-lg text-light" ></i> */}
             <i class="fa-solid fa-bell-concierge fa-lg text-white"></i>
                 <h3 className="text-light text-center opacity-50">Authentic Cuisine</h3>
             <p className="text-light text-center ">"Authentic cuisine reflects culture, tradition, and genuine regional flavors."</p></div>
             <div classname="tag6"> 
             <i class="fa-solid fa-user fa-lg text-white"></i>
                <h3 className="text-light text-center opacity-50">Customer Support</h3>
             <p className="text-light text-center ">"Customer support provides resolving issues and enhancing satisfaction."</p></div>
             </div>
         </div>
         <div className="last container-xl p-5">
            <h2>Join the Foodie Community!</h2>
            <p>
            Thank you for choosing Foodie Site! We’re thrilled to be part of your dining experience. Explore our platform, discover new flavors, and enjoy the convenience of ordering your favorite meals online.
             </p>
             <p>
           Let’s make every meal a delightful occasion!
            </p>
         </div>
        </>
    )
}
 export default About