import "./AdminLogin.css"
function AdminLogin() {
    return ( <>
<section className="">

  <div className="px-4 py-5 px-md-5 text-center text-lg-start bg-darkgreen d-flex aling-items-center justify-content-center p-5" id="main-div" style={{BackgroundColor: "hsl(0, 0%, 96%)"}}>
    <div className="container d-flex aling-items-center justify-content-center">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0 " id="text-div">
          <h1 className="my-5 display-3 fw-bold text-white ">
            The best offer <br />
            <span className=" text-midgreen">for your business</span>
          </h1>
          <p style={{color: "white"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0 ">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form>
                 <h1 className="text-center">Admin Login</h1>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" className="form-control" />
                </div>


                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example4">Password</label>
                  <input type="password" id="form3Example4" className="form-control" />
                </div>
               <button className=" login-btn bg-midgreen w-100 text-white "  type="submit">Log in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

    
    
    
    </> );
}

export default AdminLogin;