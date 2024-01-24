import { ADMIN_REQUESTED_URL } from "../../../../urls";
import { useState, useEffect } from "react";
import { verifyAdminStatus} from "../../../../store/adminSlice"
import axios from "axios";
import Swal from "sweetalert2";
import CardModal from "./CardModal.js"
function ListedGrainsAd(){
    const [grainData, setGrainData] = useState([])
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            axios.get(ADMIN_REQUESTED_URL + "/adminViewsGrain").then((userDatas) => {
                setGrainData(userDatas.data.result)
            })
                .catch(err => console.log('error ', err));
        } catch (err) {
            console.log("Eroor in get uer data", err);
        }
    }

    const updateAdminStatus = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Verify it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                verifyAdminStatus({ "_id": _id }).then(data => {
                    if (data.message === "success") {
                        Swal.fire({
                            position: "middle",
                            icon: "success",
                            title: "Update Successfully",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        getData();
                    }
                    else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Unavailable to Delete Grain. Please try Again...",
                        });
                    }

                }).catch((err) => {
                    console.log("err", err);
                });


            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'You not Update Verify Status :)',
                    'info'
                );
            }
        });
    }

    
    return(<>
    <p className="mt-5 text-center fs-2 darkgreen fw-bold">Listed Grains</p>
            <div className="container mt-5 mr-5 table-responsive ">
                <table className="table table-bordered table-sm ">
                    <thead>
                        <tr>
                        <th className="fs-6 p-1">S. No</th>
                            <th className="fs-6 p-1">User Email</th>
                            <th className="fs-6 p-1">Grain Name</th>
                            <th className="fs-6 p-1">Grain Type</th>
                            <th className="fs-6 p-1">Address</th>
                            <th className="fs-6 p-1">Details</th>
                            <th className="fs-6 p-1">Verify Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            grainData.length === 0 ? (
                                <tr>
                                    <td colSpan="13" className="text-center">No data available</td>
                                </tr>
                            ) : (
                                grainData.map((grain, index) => (
                                    <tr key={index}>
                                        <td className="fs-6">{index + 1}</td>
                                        <td className="fs-6">{grain.userEmail}</td>
                                        <td className="fs-6">{grain.grainname}</td>
                                        <td className="fs-6">{grain.graintype}</td>
                                        <td className="fs-6">{grain.city},{grain.state}</td>
                                        <td className="fs-6"><CardModal Grain={grain}/></td>
                                        <td className="fs-6">{grain.admin_verify? <button type="button" name="" id="" className="btn btn-outline-success btn-sm" onClick={()=>updateAdminStatus(grain._id)} >Verified
                                        </button>:<button type="button" name="" id="" className="btn btn-outline-danger btn-sm" onClick={()=>updateAdminStatus(grain._id)} >Not Verified
                                        </button>}</td>
                                        
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
    </>)

}
export default ListedGrainsAd;