// import chawal from "../../../assets/rice.jpeg"
import UpdateColdStModal from "./UpdateColdSt.js";
import { deleteColdStId } from "../../../store/userSlice";
import Swal from "sweetalert2";
function ListedColdStorageCards(props) {
    const {ColdSt,getcoldSts}=props;

   

    const deleteColdSt = (coldStId)=>{
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
             
                deleteColdStId({coldStId}).then((data) => {
                    if (data.message === "success") {
                      Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: "Delete Successfully",
                        showConfirmButton: false,
                        timer: 2000
                      });
                      getcoldSts();
                    }
                    else {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Unavailable to Delete Cold Strorage Land. Please try Again...",
                      });
                    }
                  }).catch((err) => {
                    console.log("err", err);
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Unavailable to Delete Cold Strorage Land. Please try Again...",
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
    <div className=" col-6 col-sm-6 col-md-6  col-lg-6  p-2  d-flex justify-content-center">
      <div className="card bg-light">
        <div className="row g-0">
          <div className=" col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6  ">
            <img src={"http://localhost:3000/"+ColdSt.image} className="img-fluid h-100 rounded-start w-100" alt={ColdSt.image} />
          </div>
          <div className=" col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6 ">
            <div className="card-body">
              {/* <div className="d-flex justify-content-end">
                {Grain.grain=="inorganic"? <span className="badge bg-warning fs-6">Inorganic</span>: <span className="badge bg-success fs-6">Organic</span>}
              </div> */}
              <h3 className="card-title darkgreen fs-4"><b>Area</b> : {ColdSt.area}</h3>
              <p className="card-text darkgreen fs-6">
                
                <b>Rent</b>: Rs.{ColdSt.rent}/Month<br/>
                <b>Infrastructure</b>:{ColdSt.infrastructure} <br/>
                <b>address</b>: {ColdSt.address} <br/>
                <b>State</b>: {ColdSt.state} <br/>
                <b>Pincode</b>: {ColdSt.pincode} <br/>
              </p>
              <p className="card-text darkgreen fs-6" style={{maxHeight:"40px",overflow:"scroll"}} ><b>Description</b>: {ColdSt.description}</p>
              <p className="card-text darkgreen fs-5"><small className="text-muted"><i className="bi bi-geo-alt text-danger"></i>&nbsp;{ColdSt.city}</small></p>
              <div className="d-grid gap-2">
                <UpdateColdStModal getcoldSts={getcoldSts} ColdSt={ColdSt}/>
                <button type="bu tton" name="" id="" className="btn btn-outline-danger btn-sm" onClick={()=>{deleteColdSt(ColdSt._id)}}><i className="bi bi-trash"></i>&nbsp;Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </> );
}

export default ListedColdStorageCards;