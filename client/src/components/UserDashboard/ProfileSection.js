import { useDispatch } from "react-redux";
import logo from "../../assets/Agro-Trade-logo.png"
function Profile() {

    


    return ( <>
    <div className="row m-0 w-100">
       <div className="col-12 col-md-5 bg-success p-3">
            <img src={logo} style={{width:"35%"}} alt=""/>
              <h4 className="drakgreen text-center">Vikas Joshi</h4>
              <h4 className="drakgreen text-center">Phone No.9977839880</h4>
              <h4 className="drakgreen text-center">vikashjoshi187@gmail.com</h4>
              <button type="button" className="btn btn-success w-50 " >Update</button>
       </div>
       <div className="col-12 col-md-7 bg-light p-3">
                <h1 className="drakgreen text-center" >Update Profile</h1>
               <div className="w-75" >

               <label for="floatingInput">Enter name</label>
               <input type="text" class="form-control"  placeholder="Enter name required"/>


               <label for="floatingInput">Enter number</label>
               <input type="number" class="form-control " placeholder="Enter number required"/>

               <label for="floatingInput">Enter email</label>
               <input type="email" class="form-control " placeholder="Enter email required"/>

               
            </div>
       </div>

        
    </div>       

    </> );
}

export default Profile;