// import { useDispatch } from "react-redux";
import logo from "../../../assets/Agro-Trade-logo.png"
import "./ProfileSection.css"
import { useReducer } from "react";

const initialsate={
  name:"Vikas Joshi",
  number:9977839880,
  email:"vikashjoshi187@gmail.com",
  address:"Mission Compound Mandleshwaer"
}
var clone ={}
const reducer=(state,action)=>{
 switch(action.action){
          case "name":
            return  {...clone,name:action.value}

            case "number":
            return  {...clone,number:action.value}

            case "email":
             return {...clone,email:action.value}


            case "address":
              return   {...clone,address:action.value}

          }  
}
function changeProfile(e){
  var  profilePhoto = document.getElementById("profilePhoto");
  const file = profilePhoto.files[0];
if (file) {
    console.log('Original file name:', file);
    console.log('File size:', file.size, 'bytes');
    // You can perform further actions with the file object here
  }
}
function showUpdateForm (){
  if (window.screen.width>=800) {
     document.getElementById("profileCard").classList.remove("offset-lg-3")
    document.getElementById("updateProfileSection").style.display="block"
  }
  else{
    document.getElementById("profileCard").style.display="none"
    document.getElementById("updateProfileSection").style.display="block"
    document.getElementById("updateProfileSection").classList.add("offset-lg-3")
  }
}  
function Updateprofile(params) {
  // 767
  console.log();
  document.getElementById("profileCard").classList.add("offset-lg-3")
  document.getElementById("updateProfileSection").style.display="none"


  if (window.screen.width>=800) {
    document.getElementById("profileCard").classList.add("offset-lg-3")
   document.getElementById("updateProfileSection").style.display="none"
 }
 else{
   document.getElementById("profileCard").style.display="block"
   document.getElementById("updateProfileSection").style.display="none"
   document.getElementById("updateProfileSection").classList.add("offset-lg-3")
 }
}
function Profile() {
  const [fields,dispatch] =  useReducer(reducer,initialsate)
      clone={...fields} 
    return ( <>
    <div className="row m-0 w-100 h-100" style={{height:"auto"}}>
       <div className="col-12 col-md-6 bg-midgreen p-0 offset-lg-3" id="profileCard">
             <div className="p-5 h-75" >
             <img src={logo} className="rounded mx-auto d-block" style={{width:"35%"}} alt=""/>
              <h4 className="drakgreen text-center text-white">{fields.name}</h4>
              <h4 className="drakgreen text-center text-white">{fields.number}</h4>
              <h4 className="drakgreen text-center text-white">{fields.email}</h4>
            </div>  
             <div className="h-25 bg-warning  text-center darkgreen">
              <div className="h-75 d-flex align-items-center justify-content-center " >
               <p> {fields.address}</p>
              </div>
              <div className="h-25" >
              <button type="" className="h-100 text-white bg-midgreen" onClick={showUpdateForm} style={{width:"100%"}}>Update Profile</button>
            
              </div>
            
             </div>  

       </div>

       <div className="col-12 col-md-6 bg-light p-4" id="updateProfileSection" style={{display:"none"}}>
               <h2 className="drakgreen text-center darkgreen" >Update Here</h2>
               <div className="" >
                <div className=""  style={{marginTop:"10px"}}>
                <label htmlFor="floatingInput" className="fs-5">Enter name</label>
                <input type="text" className="form-control" onChange={(e)=>{dispatch({action:"name",value:e.target.value})}} name="name" placeholder="Enter name"/>
               </div>
                
              <div className="" style={{marginTop:"10px"}} >
               <label htmlFor="floatingInput" className="fs-5">Enter number</label>
               <input type="number" className="form-control" onChange={(e)=>{dispatch({action:"number",value:e.target.value})}}  name="number" placeholder="Enter number"/>
              </div>

               <div className="">
                <label htmlFor="floatingInput" className="fs-5">Enter email</label>
                <input type="email" className="form-control"  onChange={(e)=>{dispatch({action:"email",value:e.target.value})}}  name="email" placeholder="Enter email"/>
               </div>

               <div className="" style={{marginTop:"10px"}} >
                <label htmlFor="floatingInput" className="fs-5">Enter Address</label>
                 <textarea className="form-control" name="address" onChange={(e)=>{dispatch({action:"address",value:e.target.value})}} rows="3" cols=""></textarea>
               </div>
               <div className=""  style={{marginTop:"10px"}}>
                <label htmlFor="floatingInput" className="fs-5">Choose Photo</label>
                <input type="file" className="form-control" onChange={changeProfile} id="profilePhoto" placeholder="Enter email required"/>
               </div>

               <div className=" " style={{marginTop:"10px"}} >
                 <button className="w-100 btn btn-warning" type="button" onClick={Updateprofile}>Update</button>
              </div>
               
               
            </div>
       </div>

        
    </div>       

    </> );
}

export default Profile;