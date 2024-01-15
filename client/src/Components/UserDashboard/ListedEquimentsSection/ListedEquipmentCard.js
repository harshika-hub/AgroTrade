import tractor from "../../../assets/john-deere-wallpaper-19-642x462 (1).jpg"
import "./ListedEquipmentCard.css"
import Swal from "sweetalert2";
import { deleteEquipmentId } from "../../../store/userSlice";
import UpdateEquipmentModal from "./UpdateEquipment.js";

function ListedEquipmentCard(props) { 
const {Equipment,getEquipments}=props;


// const deleteEquipment = (EquipmentId)=>{
//   deleteEquipmentId({EquipmentId}).then((data) => {
//     if (data.message == "success") {
//       Swal.fire({
//         position: "middle",
//         icon: "success",
//         title: "Delete Successfully",
//         showConfirmButton: false,
//         timer: 2000
//       });
//       getEquipments();
//     }
//     else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Unavailable to Delete Equipment. Please try Again...",
//       });
//     }
//   }).catch((err) => {
//     console.log("err", err);
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Unavailable to Delete Equipment. Please try Again...",
//     });
//   })
// }

const deleteEquipment = (EquipmentId)=>{
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
       
        deleteEquipmentId({EquipmentId}).then((data) => {
          if (data.message == "success") {
            Swal.fire({
              position: "middle",
              icon: "success",
              title: "Delete Successfully",
              showConfirmButton: false,
              timer: 2000
            });
            getEquipments();
          }
          else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Unavailable to Delete Equipment. Please try Again...",
            });
          }
        }).catch((err) => {
          console.log("err", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Unavailable to Delete Equipment. Please try Again...",
          });
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your file is safe :)',
          'info'
        );
      }
    });


}
return ( <>

        <div className="col-12 col-sm-12 col-md-6   p-0 p-3  d-flex justify-content-center " >
                    <div className="card bg-light  w-100" style={{borderRadius:"5px"}}>
                      <div className="row g-0">
                        <div className="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6">
                            <img src={"http://localhost:3000/"+Equipment.image} className="img-fluid h-100 rounded-start w-100" alt={Equipment.image} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6">
                          <div className="card-body">
                            <div className="d-flex justify-content-end" >
                              <span className="badge bg-warning text-black mb-3 fs-6">Available</span>
                            </div>
                            <h3 className="card-title darkgreen"> {Equipment.name}</h3>
                            <p className="card-text darkgreen fs-5 ">
                              ModelNo: {Equipment.modelnumber}<br/>
                              Type: {Equipment.equipmenttype} <br />
                              Price: Rs. {Equipment.price}/hour  <br />
                              Condition: {Equipment.condition} <br />
                              Quantity: {Equipment.quantity}<br/>
                              State: {Equipment.state}<br/>
                              Address: {Equipment.address}

                            </p>
                            <p className="card-text darkgreen fs-6" style={{maxHeight:"40px",overflow:"scroll"}} >Description: {Equipment.description}</p>
                            <p className="card-text darkgreen fs-5"><small className="text-muted"><i className="bi bi-geo-alt text-danger"></i>&nbsp;{Equipment.city}</small></p>
                            <div className="d-grid gap-2">
                            <UpdateEquipmentModal getEquipments={getEquipments} Equipment={Equipment}/>
                            <button type="button" name="" id="" className="btn btn-outline-danger btn-sm" onClick={()=>{deleteEquipment(Equipment._id)}}><i className="bi bi-trash"></i>&nbsp;Delete
                            </button> 
                           </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </>);
}

export default ListedEquipmentCard;