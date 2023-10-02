  import emailjs from "emailjs-com"
 
 const Contact=()=>{
  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm("service_mhkmgf3","template_ozumdt9",e.target,"CUubxwCzq7dXsrW7Q")
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
 
  }

return(

    <>
    <div className="container border" style={{marginTop:"50px",width:"50%",backgroundImage:`url(https://img.freepik.com/free-vector/cloudy-purple-pink-background_91008-257.jpg?w=996&t=st=1696230817~exp=1696231417~hmac=977e1f24ce1ab7d92f8e8df2bc9babb6c39661ad32f6e839eafec06443a98f21)`,

   backgroundPosition:"center",
   backgroundSize:"cover"
}}>

    <h2>Contact Me</h2>
        <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail} >
 
      <input type="text" name="name" className="form-control" placeholder="Name"/>
 
      <input type="email" name="user_email" className="form-control my-4" placeholder="Email" />

     
      <textarea name="message" className="form-control"  rows="4" placeholder="Message"></textarea>
    <input type="submit"  className="mt-4 form-control btn btn-secondary" value="send" />



        </form>
    </div>
    
    
    
    </>
)



}
export default Contact;