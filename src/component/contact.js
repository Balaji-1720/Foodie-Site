
function Contact(){
        
    function dynamic(){
        let Username=document.getElementById("box1").value;
        alert("Thank you"+Username+"!")
    }
    return (
    <>
    <div className="container-xl main ">
     <p className="  content-topic text-center ">Contact</p>
     <h2 className="sub-topic text-center">Get in Touch</h2>
     </div>
    
    <div className="review container-xl">
    <div className="form">
        <input type="text" id="box1" placeholder="Name"/>
        <input type="text" id="box2" placeholder="Email-Address"/>

    </div>
    <div className="form1">
        <input type="text" id="box3" placeholder="Phone Number"/>
        <input type="text" id="box4" placeholder="Subject"/>


    </div>
    <div className="form2">
    <input type="text" id="box5" placeholder="Message"/>
    </div>

    <div className="container centered-button  ">
    <button type="submit" onClick={dynamic} className="btn btn-primary d-block mx-auto">Submit</button>


   
</div>

<div className="info container-xl ">


<div className="icon1">
<i class="fa-solid fa-location-dot fa-sm address"/>
<p>porur,chennai-600122</p>
</div>
<div className="icon2">
<i class="fa-solid fa-envelope fa-sm mail"/>
<p>Foodiesite@gmail.com</p>
</div>
<div className="icon3">
<i class="fa-solid fa-phone fa-sm number"/>
<p>044-4545454</p>

</div>

</div>
    
  </div>  
   
    </>
    )
}
 export default Contact;