import "./AgricultureLandCard.css"
import { removeAgriLand } from "../../../store/userSlice"
import Swal from "sweetalert2";
import View from "./View.js";
function AgricultureLandCard(props) {
  const {Land,sendLands}= props
  function removeLand(_id,ownerEmail) {
     // Open a confirmation dialog
Swal.fire({
  title: 'Are you sure?',
  text: 'You won\'t be able to revert this!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
   
        removeAgriLand({_id:_id,ownerEmail:ownerEmail}).then((data)=>{
        console.log("this is the data",data);
        if (data.message=="success") {
          Swal.fire({
            position: "middle",
            icon: "success",
            title: "Land Removed Successfully",
            showConfirmButton: false,
            timer: 2000
          });
          sendLands(data.Lands)
        }
        else{
          Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Unavailable to remove Land. Please try Again...",
          });
        }
      }).catch((err)=>{
        console.log("Error in deleting land");
        Swal.fire({
          icon: "error",
          title: "ERROR",
          text: "Unavailable to remove Land. Please try Again...",
        });
      })
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    );
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    // User cancelled, do nothing or show a message
    Swal.fire(
      'Cancelled',
      'Your file is safe :)',
      'info'
    );
  }
});
}
  return (
    <>
      <div className="card mb-4 w-100 p-0">
        <div className="row g-0">
          <div className="col-md-4 bg-dark" id="imgeDiv">
            <img src={"http://localhost:3000/"+Land.image} className="img-fluid rounded-start w-100" alt="..." />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <div className="p-1" >
               <div className="d-flex justify-content-between" >
                <h3 className="card-title darkgreen ">{Land.landTitle}</h3> <div>
                <span className="badge bg-success fs-6">Organic</span></div>
               </div>
                <h5 className="darkgreen">
                  <span className="text-danger">
                    <i className="bi bi-geo-alt text-danger"></i>
                    &nbsp;{Land.city+" "+Land.state}
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <span className="text-primary">
                    <i className="bi bi-rulers"></i>&nbsp;Size :{Land.area} acres
                  </span>{" "}
                </h5>
                <h5 className="darkgreen">
                  Soil Type: {Land.soilType}
                </h5>
                <h5 className="darkgreen">
                  Condition: {Land.infrastructure}
                </h5>
                
                <h5 className="darkgreen">
                  Address: {Land.address},{Land.zipCode}
                </h5>
                <h5 className="darkgreen">
                  Suitable For: {Land.suitableFor}
                </h5>
                <h5 className="card-text text-break darkgreen  landparag">
                  Description: {Land.description}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3  p-2">
            <div className="row m-0 w-100 d-flex flex-column">
              <div className="col-12 d-flex justify-content-end pt-3 pe-3">
                <span className="badge bg-warning text-dark fs-6 ">Available</span>
              </div>
              <div className="col-12  midgreen">
                <h5>
                  Rent: {Land.rent}/Month
                </h5>
          
                <h5 className="darkgreen ">
                  From: {Land.avilableFrom}
                </h5>

                <h5 className="darkgreen">
                  To: {Land.avilableTill}
                </h5>
                <div className="d-grid gap-2">
                  <View image360={Land.image360} />
                    <button type="button" name="" id="" className="btn btn-outline-success btn-sm"><i class="bi bi-arrow-up-circle"></i>&nbsp;Update</button>
                  <button type="button" onClick={()=>{removeLand(Land._id,Land.ownerEmail)}}  className="btn btn-outline-danger btn-sm"> <i class="bi bi-trash"></i>&nbsp;Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgricultureLandCard;
