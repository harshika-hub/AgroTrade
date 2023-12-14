// import "./OrgSignup.css"
// import factory from "../../Images/factory1.jpeg"
// function OrgSingupComponent() {

//   const getData = (event)=>{
//     const {name,value} = event.target;
//     setUserData({
//       ...userData,
//       [name] : value
//     });
//   }

//   return (
//     <>
//       <div className="container-fluid p-3  " >
//         <div className="container  bg-white p-0" id="OrgFromBox" >
//           <div className="row w-100 m-0 g-0 " >

//             <div className="col-12 col-md-12 col-lg-7 m-0 pt-3" >
//               <h2 className="midgreen text-center wght-600 " >Orgnisation Sign Up</h2>
//               <form className="" encType="multipart/form-data">
//                 <div className="row m-0 w-100" >

//                   <div class=" col-12 col-md-6  p-2">
//                     <label for="validationServer01" class="form-label midgreen">Orgnisation name</label>
//                     <input name="company_name" type="text" class="form-control form-control-sm" id="validationServer01"  placeholder="Enter orgnisation name"  />
//                     <div class="valid-feedback">
//                       Looks good!
//                     </div>
//                   </div>

//                   <div class=" col-12 col-md-6  p-2">
//                     <label for="validationServer01" class="form-label midgreen">Regestration  name</label>
//                     <input name="reg_name" type="text" class="form-control form-control-sm" id="validationServer01" placeholder="Enter regestration name" zy  />
//                     <div class="valid-feedback">
//                       Looks good!
//                     </div>
//                   </div>

//                   <div class=" col-12 col-md-6  p-2">
//                     <label for="validationServer01" class="form-label midgreen">Registration number</label>
//                     <input name="reg_number" type="number" class="form-control form-control-sm" id="validationServer01" placeholder="Enter registration number" onChange={getData}  />
//                   </div>


//                   <div class=" col-12 col-md-6  p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">Orgnisation email</label>
//                     <input name="email" type="email" class="form-control form-control-sm" id="validationServer01" placeholder="Enter orgnisation email" onChange={getData}  />
//                     <div class="valid-feedback">
//                       Looks good!
//                     </div>
//                   </div>

//                   <div class=" col-12 col-md-6  p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">Password</label>
//                     <input name="password" type="password" class="form-control form-control-sm" id="validationServer01" placeholder="Enter Password" onChange={getData}  />
//                     <div class="valid-feedback">
//                       Looks good!
//                     </div>
//                   </div>
//                   <div class=" col-12 col-md-6 p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">Orgnisation Type</label>
//                     <select name="org_type" className="form-control form-control-sm " onChange={getData}>
//                       <option value="">Select Orgnisation Type</option>
//                       <option value="Option 1">Option 1</option>
//                       <option value="Option 2">Option 2</option>
//                     </select>
//                   </div>

//                   <div class=" col-12 col-md-6 p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">Orgnisation Image </label>
//                     <input type="file" className="form-control form-control-sm" name="org_image" value="org_image"  onChange={getData}/>
//                   </div>

//                   <div class=" col-12 col-md-6  p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">State</label>
//                     <select name="state" className="form-control form-control-sm " onChange={getData} >
//                       <option value="">Select State</option>
//                       <option value="Madhya Pradesh">Madhya Pradesh</option>
//                       <option value="Uttar Pradesh">Uttar Pradesh</option>
//                     </select>
//                   </div>

//                   <div class=" col-12 col-md-6 p-2 ">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">City</label>
//                     <select name="city" className="form-control form-control-sm " onChange={getData} >
//                       <option value="">Select City</option>
//                       <option value="Indore">Indore</option>
//                       <option value="Bhopal">Bhopal</option>
//                     </select>
//                   </div>

//                   <div class=" col-12 col-md-6 p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">Zip code</label>
//                     <input name="zip_code" type="number" onChange={getData} class="form-control form-control-sm" id="validationServer01" placeholder="Enter zip code"  />

//                   </div>

//                   <div class=" col-12 col-md-6  p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">Address</label>
//                     <textarea name="address" onChange={getData} className="form-control form-control-sm" rows="3" cols="20"></textarea>
//                   </div>

//                   <div class=" col-12 col-md-6  p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">Orgnisation description</label>
//                     <textarea name="description" onChange={getData} className="form-control form-control-sm " rows="3" cols="20"></textarea>
//                   </div>



//                   <div class=" col-12 col-md-6  p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">Owner name</label>
//                     <input name="owner_name" type="text" onChange={getData} class="form-control form-control-sm" id="validationServer01" placeholder="Enter owner name"  />
//                     <div class="valid-feedback">
//                       Looks good!
//                     </div>
//                   </div>

//                   <div class=" col-12 col-md-6  p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">Dealer name</label>
//                     <input name="dealer_name" type="text" onChange={getData} class="form-control form-control-sm" id="validationServer01" placeholder="Enter dealer name"  />
//                     <div class="valid-feedback">
//                       Looks good!
//                     </div>
//                   </div>

//                   <div class=" col-12 col-md-6 p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1 ">Dealer email</label>
//                     <input name="dealer_email" type="email" onChange={getData} class="form-control form-control-sm" id="validationServer01" placeholder="Enter dealer email"  />
//                     <div class="valid-feedback">
//                       Looks good!
//                     </div>
//                   </div>

//                   <div class=" col-12 col-md-6 p-2">
//                     <label for="validationServer01" class="form-label midgreen m-0 mt-1">Dealer contact number</label>
//                     <input name="dealer_contact" type="number" onChange={getData} class="form-control form-control-sm" id="validationServer01" placeholder="Enter contact number"  />
//                     <div class="valid-feedback">
//                       Looks good!
//                     </div>
//                   </div>

//                   <div class=" col-12 col-md-6 mt-1  p-1">
//                     <div class="d-grid gap-2">
//                       <button type="reset" name="" id="" class="btn btn-danger"> Reset </button>
//                     </div>

//                   </div>

//                   <div class=" col-12 col-md-6 mt-1 mb-1 p-1">
//                     <div class="d-grid gap-2">
//                       <button type="submit" name="" id="" class="btn btn-success" > Register </button>
//                     </div>

//                   </div>
//                 </div>
//               </form>
//             </div>
//             <div id="imageColumn" className="col-12 col-lg-5"  >
//               <img src={factory} alt="" className="w-100 h-100" />
//             </div>


//           </div>
//         </div>
//       </div>
//     </>);
// }

// export default OrgSingupComponent;

import "./OrgSignup.css"
import factory from "../../Images/factory1.jpeg"
import { useState } from "react";
import { orgRegister } from "../../store/organisationSlice.js";
import { useDispatch } from "react-redux";
function OrgSingupComponent() {
  const [organisation, setOrganisationData] = useState({});
  const dispatch = useDispatch();
  const getData = (event) => {
    const { name, value } = event.target;
    setOrganisationData({
      ...organisation,
      [name]: value
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inside handleSubmit");
    dispatch(orgRegister(organisation));

  }
  var checkFields = false,
    state = false,
    city = false,
    image = false,
    address = false,
    description = false,
    orgtype = false,
    orgname = false,
    regname = false,
    ownername = false,
    dealername = false,
    oremail = false,
    dealer_email = false,
    passwrod = false;

  var orgObj = {}

  function validateName(e) {
    const pattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/;
    var ownerName = document.getElementById(e.target.id);
    if (pattern.test(e.target.value)) {
      const { name, value } = e.target;
      orgObj = { ...orgObj, [name]: value }
      ownerName.classList.add('is-valid');
      ownerName.classList.remove('is-invalid');
      checkFields = true;
      if (e.target.name === "company_name") {
        orgname = true;
      }
      else if (e.target.name === "reg_name") {
        regname = true;
      }
      else if (e.target.name === "owner_name") {
        ownername = true;
      }
      else if (e.target.name === "dealer_name") {
        dealername = true;
      }
    }
    else {
      ownerName.classList.remove('is-valid');
      ownerName.classList.add('is-invalid');
      checkFields = false;
      if (e.target.name === "company_name") {
        orgname = false;
      }
      else if (e.target.name === "reg_name") {
        regname = false;
      }
      else if (e.target.name === "owner_name") {
        ownername = false;
      }
      else if (e.target.name === "dealer_name") {
        dealername = false;
      }
    }
    if (e.target.value === "") {
      ownerName.classList.remove('is-valid');
      ownerName.classList.remove('is-invalid');
      checkFields = false;
    }
  }
  function validateRegnum(e) {
    const pattern = /^U\d{5}[A-Z]{2}\d{4}PTC\d{6}$/;
    const restrNumber = document.getElementById("restrNumber")
    if (pattern.test(e.target.value)) {
      const { name, value } = e.target;
      orgObj = { ...orgObj, [name]: value }
      restrNumber.classList.add('is-valid');
      restrNumber.classList.remove('is-invalid')
      checkFields = true;
    }
    else {
      restrNumber.classList.remove('is-valid');
      restrNumber.classList.add('is-invalid');
      checkFields = false;
    }

    if (e.target.value === "") {
      restrNumber.classList.remove('is-valid');
      restrNumber.classList.remove('is-invalid');
      checkFields = false;
    }
  }
  function validateEmail(e) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var EmailField = document.getElementById(e.target.id);
    if (pattern.test(e.target.value)) {
      const { name, value } = e.target;
      orgObj = { ...orgObj, [name]: value }
      console.log("helllo");
      EmailField.classList.add('is-valid');
      EmailField.classList.remove('is-invalid');
      checkFields = true;
      if (e.target.name === "email") {
        oremail = true;
      }
      else if (e.target.name === "dealer_email") {
        dealer_email = true;
      }
    }
    else {
      EmailField.classList.remove('is-valid');
      EmailField.classList.add('is-invalid');
      checkFields = false;
      if (e.target.value === "email") {
        oremail = false;
      }
      else if (e.target.value === "dealer_email") {
        dealer_email = false;
      }
    }
    if (e.target.value === "") {
      EmailField.classList.remove('is-valid');
      EmailField.classList.remove('is-invalid');
      checkFields = false;
    }
  }
  function validatePassword(e) {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var compnypasswordField = document.getElementById('compnypasswordField');
    if (pattern.test(e.target.value)) {
      const { name, value } = e.target;
      orgObj = { ...orgObj, [name]: value }
      compnypasswordField.classList.add('is-valid');
      compnypasswordField.classList.remove('is-invalid');
      checkFields = true;

    }
    else {
      compnypasswordField.classList.remove('is-valid');
      compnypasswordField.classList.add('is-invalid');
      checkFields = false;
      if (e.target.name === "password") {
        passwrod = true;
      }
      else if (e.target.name === "dealer_email") {
        dealer_email = true
      }
    }
    if (e.target.value === "") {
      compnypasswordField.classList.remove('is-valid');
      compnypasswordField.classList.remove('is-invalid');
      checkFields = false;
      if (e.target.name === "password") {
        passwrod = false;
      }
      else if (e.target.name === "dealer_email") {
        dealer_email = false;
      }
    }
  }
  function validatezipCode(e) {
    const pattern = /^[1-9][0-9]{5}$/;
    var zipCode = document.getElementById(e.target.id);
    if (pattern.test(e.target.value)) {
      const { name, value } = e.target;
      orgObj = { ...orgObj, [name]: value }
      zipCode.classList.add('is-valid');
      zipCode.classList.remove('is-invalid');
      checkFields = true;
    }
    else {
      zipCode.classList.remove('is-valid');
      zipCode.classList.add('is-invalid');
      checkFields = false;
    }
    if (e.target.value === "") {
      zipCode.classList.remove('is-valid');
      zipCode.classList.remove('is-invalid');
      checkFields = false;
    }
  }
  function validatePhnNumber(e) {
    const pattern = /^\d{10}$/;
    var EmailField = document.getElementById(e.target.id);
    if (pattern.test(e.target.value)) {
      const { name, value } = e.target;
      orgObj = { ...orgObj, [name]: value }
      EmailField.classList.add('is-valid');
      EmailField.classList.remove('is-invalid');
      checkFields = true;
    }
    else {
      EmailField.classList.remove('is-valid');
      EmailField.classList.add('is-invalid');
      checkFields = false;
    }
    if (e.target.value === "") {
      EmailField.classList.remove('is-valid');
      EmailField.classList.remove('is-invalid');
      checkFields = false;
    }
  }
  function checkField(e) {
    console.log(e.target.value);
    const field = document.getElementById(e.target.id)
    if (e.target.value === "" || e.target.value === "null") {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
      if (e.target.name === "state") {
        state = false;
      }
      else if (e.target.name === "city") {
        city = false;
      }
      else if (e.target.name === "org_image") {
        image = false;
      }
      else if (e.target.name === "address") {
        address = false;
      }
      else if (e.target.name === "org_description") {
        description = false;
      }
      else if (e.target.name === "org_type") {
        orgtype = false;
      }
    }
    else {
      field.classList.add('is-valid');
      field.classList.remove('is-invalid');
      const { name, value } = e.target;
      orgObj = { ...orgObj, [name]: value }
      if (e.target.name === "state") {
        state = true;
      }
      else if (e.target.name === "city") {
        city = true;
      }
      else if (e.target.name === "org_image") {
        image = true;
      }
      else if (e.target.name === "address") {
        address = true;
      }
      else if (e.target.name === "org_description") {
        description = true;
      }

      else if (e.target.name === "org_type") {
        orgtype = true;
      }

    }
    if (e.target.value === "" && e.target.type !== "textarea") {
      field.classList.remove('is-invalid');
    }


  }

  function handelSubmit(e) {
    // console.log(
    //   "state "+state+"\n"+
    //   "city "+city+"\n"+
    //   "image "+image+"\n"+
    //   "address "+address+"\n"+
    //   "description "+description+"\n"+
    //   "orgtype "+orgtype+"\n"+
    //   "orgname "+orgname+"\n"+
    //   "regname "+regname+"\n"+
    //   "ownername "+ownername+"\n"+
    //   "dealername "+dealername+"\n"+
    //   "oremai "+oremail+"\n"+
    //   "dealer_email "+dealer_email+"\n"+
    //   "passwrod "+passwrod+"\n"+
    //   "dealer_email "+dealer_email);  
    // ------------------------Htanaa mt----------------------

    e.preventDefault();
    if (checkFields && state && city && image && address && description && orgtype && orgname && regname && ownername && dealername && oremail && dealer_email && passwrod) {
      console.log("hiii");
    }
  }


  return (
    <>
      <div className="container-fluid p-3  " >
        <div className="container  bg-white p-0" id="OrgFromBox" >
          <div className="row w-100 m-0 g-0 " >

            <div className="col-12 col-md-12 col-lg-7 m-0 pt-3" >
              <h2 className="midgreen text-center">Orgnisation Sign Up</h2>
              <form className="" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row m-0 w-100" >

                  <div className=" col-12 col-md-6  p-2">
                    <label for="validationServer01" className="form-label midgreen">Orgnisation name</label>
                    <input name="company_name" type="text" className="form-control form-control-sm" onChange={getData} id="nameField" placeholder="Enter orgnisation name" />
                    <div className="valid-feedback">
                      Looks good!!
                    </div>
                    <div className="invalid-feedback">
                      Incorrect name!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6  p-2">
                    <label for="validationServer01" className="form-label midgreen">Regestration  name</label>
                    <input name="reg_name" type="text" className="form-control form-control-sm" id="regestrName" onChange={getData} placeholder="Enter regestration name" />
                    <div className="valid-feedback">
                      Correct regestration name!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid regestration name!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6  p-2">
                    <label for="validationServer01" className="form-label midgreen">Registration number</label>
                    <input name="reg_number" type="text" className="form-control form-control-sm" id="restrNumber" onChange={getData} placeholder="Enter registration number" />
                    <div className="valid-feedback">
                      Correct regestration number!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid regestration number!!
                    </div>
                  </div>


                  <div className=" col-12 col-md-6  p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1">Orgnisation email</label>
                    <input name="email" type="email" className="form-control form-control-sm" id="compnyEmailField" onChange={getData} placeholder="Enter orgnisation email" />
                    <div className="valid-feedback">
                      Correct email!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid email !!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6  p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1">Password</label>
                    <input name="password" type="password" className="form-control form-control-sm" id="compnypasswordField" onChange={getData} placeholder="Enter Password" />
                    <div className="valid-feedback">
                      Strong Password!!
                    </div>
                    <div className="invalid-feedback">
                      Weak Password!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6 p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1">Orgnisation Type</label>
                    <select name="org_type" className="form-control form-control-sm" onChange={getData} id="orgnisationtype" >
                      <option value="null">Select Orgnisation Type</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                    <div className="valid-feedback">
                      Orgnisation type selected!!
                    </div>
                    <div className="invalid-feedback">
                      Please select orgnisation type!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6 p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1">Orgnisation Image </label>
                    <input type="file" className="form-control form-control-sm" name="org_image"  onChange={getData} id="image" accept="image/*" />
                  </div>

                  <div className=" col-12 col-md-6  p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1" >State</label>
                    <select name="state" className="form-control form-control-sm" onChange={getData} id="state" >
                      <option value="null">Select State</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                    </select>
                    <div className="valid-feedback">
                      State selected!!
                    </div>
                    <div className="invalid-feedback">
                      Please select state !!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6 p-2 ">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1"  >City</label>
                    <select name="city" className="form-control form-control-sm" onChange={getData} id="city" >
                      <option value="null">Select City</option>
                      <option value="Indore">Indore</option>
                      <option value="Bhopal">Bhopal</option>
                    </select>
                    <div className="valid-feedback">
                      City selected!!
                    </div>
                    <div className="invalid-feedback">
                      Please select city!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6 p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1">Zip code</label>
                    <input name="zip_code" type="number" className="form-control form-control-sm" id="zipCode" onChange={getData} placeholder="Enter zip code" />
                    <div className="valid-feedback">
                      Correct zip code!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid zip code!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6  p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1">Address</label>
                    <textarea name="address" className="form-control form-control-sm" rows="3" cols="20" onChange={getData} id="address"></textarea>
                    <div className="valid-feedback">
                      Correct address!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid address!!
                    </div>

                  </div>

                  <div className=" col-12 col-md-6  p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1">Orgnisation description</label>
                    <textarea name="org_description" className="form-control form-control-sm " rows="3" cols="20" onChange={getData} id="description" ></textarea>
                    <div className="valid-feedback">
                      Correct description!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid description!!
                    </div>
                  </div>



                  <div className=" col-12 col-md-6  p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1">Owner name</label>
                    <input name="owner_name" type="text" className="form-control form-control-sm" id="ownerName" onChange={getData} placeholder="Enter owner name" />
                    <div className="valid-feedback">
                      Correct owner name!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid owner name!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6  p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1">Dealer name</label>
                    <input name="dealer_name" type="text" className="form-control form-control-sm" id="dealerName" onChange={getData} placeholder="Enter dealer name" />
                    <div className="valid-feedback">
                      Correct dealer name!!
                    </div>
                    <div className="invalid-feedback">
                      Incorrect dealer name!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6 p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1 ">Dealer email</label>
                    <input name="dealer_email" type="email" className="form-control form-control-sm" id="dealerEmail" onChange={getData} placeholder="Enter dealer email" />
                    <div className="valid-feedback">
                      Correct dealer email!!
                    </div>
                    <div className="invalid-feedback">
                      Incorrect dealer email!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6 p-2">
                    <label for="validationServer01" className="form-label midgreen m-0 mt-1">Dealer contact number</label>
                    <input name="dealer_contact" type="number" className="form-control form-control-sm" id="phoneNumber" onChange={getData} placeholder="Enter contact number" />
                    <div className="valid-feedback">
                      Correct phone number!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid phone number!!
                    </div>
                  </div>

                  <div className=" col-12 col-md-6 mt-1  p-1">
                    <div className="d-grid gap-2">
                      <button type="reset" name="" id="" className="btn btn-danger" >
                        Reset
                      </button>
                    </div>

                  </div>

                  <div className=" col-12 col-md-6 mt-1 mb-1 p-1">
                    <div className="d-grid gap-2">
                      <button type="submit" name="" id="" className="btn btn-success" >
                        Register
                      </button>
                    </div>

                  </div>
                </div>
              </form>
            </div>
            <div id="imageColumn" className="col-12 col-lg-5"  >
              <img src={factory} alt="" className="w-100 h-100" />
            </div>


          </div>
        </div>
      </div>
    </>);
}

export default OrgSingupComponent;
