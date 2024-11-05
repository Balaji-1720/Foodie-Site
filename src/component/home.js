
function Home(){
    return( 
        <>
        <div className="container-lg d-flex align-items-center w-100 ">
            <div className="first ">
                <h1 className="text1 text-wrap">FOODIE SITE</h1>
                <p className="text2">"A Feast for Every Foodie!"</p>
            </div>
            {/* <div className="second my-5">
                <img className="image1" src="./assets\pexels-mithulvarshan-8156645.jpg" alt="error" />
            </div> */}
               <div id="carouselExample" class="carousel slide " data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
           
            <img className="image1 " src="./assets\pexels-mithulvarshan-8156645.jpg" alt="error" class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
                <h5>"Grilled to Perfection, Every Time!"</h5>
            </div>
        </div>
        <div class="carousel-item">
        <img className="image2" src=".\assets\pexels-rajesh-tp-749235-1600727.jpg" alt="error" class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
                <h5>"Satisfy Your Hunger: Burgers and Fries Done Right!"</h5>
            </div>
        </div>
        <div class="carousel-item">
        <img className="image3 w-100" src=".\assets\pexels-satyam-verma-2901977-4439740.jpg" alt="error" class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
                <h5>"Savor the Flavors of India: Where Every Bite Tells a Story!"</h5>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

        </div>
        
        <div className=" container-md para1 w-75 ">
            <p>"Your favorite meals are just a click away! At Foodie Site, we bring deliciousness directly to your doorstep, making it easier than ever to enjoy high-quality food from the comfort of your home"</p>
       </div>
       
       <div className="footer container-xl w-100 h-50">
        <div className="foot-content">
             <p className="hours">Hours of Operation</p>
             <p className="day">MON-FRI</p>
             <p className="time">10.00am-1.00pm</p>
             <p className="time">4.00pm-10.30pm</p>
            <p className="day">SAT</p>
            <p className="time">3.00pm-10.30pm</p>
            <p className="day">SUN</p>
            <p className="time">We are Closed</p>

        </div>
       </div>
      
        </>
    )
}
 export default Home