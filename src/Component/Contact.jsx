  import emailjs from "emailjs-com"
import Swal from "sweetalert2";
 
 const Contact=()=>{
  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm("service_mhkmgf3","template_ozumdt9",e.target,"CUubxwCzq7dXsrW7Q")
    .then(res=>{
        console.log(res)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
      e.target.reset();
    })
    .catch(err=>console.log(err))
 
  }

return(

    <>
    <div className="container border" style={{marginTop:"50px",width:"50%",backgroundImage:`url(https://img.freepik.com/free-vector/cloudy-purple-pink-background_91008-257.jpg?w=996&t=st=1696230817~exp=1696231417~hmac=977e1f24ce1ab7d92f8e8df2bc9babb6c39661ad32f6e839eafec06443a98f21)`,

   backgroundPosition:"center",
   backgroundSize:"cover"
}}>

<div>
  <h2>Contact Me</h2>
  <form
    className="row"
    style={{ margin: "25px 15px", maxWidth: "400px", width: "100%" }}
    onSubmit={sendEmail}
  >
    <div className="col-md-12">
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Name"
      />
    </div>
    <div className="col-md-12 mt-4">
      <input
        type="email"
        name="user_email"
        className="form-control"
        placeholder="Email"
      />
    </div>
    <div className="col-md-12 mt-4">
      <textarea
        name="message"
        className="form-control"
        rows="4"
        placeholder="Message"
      ></textarea>
    </div>
    <div className="col-md-12 mt-4">
      <input
        type="submit"
        className="form-control btn btn-secondary"
        value="Send"
      />
    </div>
  </form>
</div>

    </div>
    
    </>
)



}
export default Contact;