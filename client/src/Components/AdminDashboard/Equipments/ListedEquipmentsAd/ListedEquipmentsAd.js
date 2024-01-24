import { ADMIN_REQUESTED_URL } from "../../../../urls";
import { useState, useEffect } from "react";
import { verifyStatusAdmin } from "../../../../store/adminSlice"
import CardModal from "./CardModal";
import axios from "axios";
import Swal from "sweetalert2";
function ListedEquipmentsAd(){
    const [equipmentsData, setEquipmentsData] = useState([])
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            axios.get(ADMIN_REQUESTED_URL + "/adminVeiwEquipment").then((userDatas) => {
                setEquipmentsData(userDatas.data.result)
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
                verifyStatusAdmin({ "_id": _id }).then(data => {
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


    return(
        <>
 <p className="mt-5 text-center fs-2 darkgreen fw-bold">Listed Equipments</p>
            <div className="container mt-5 mr-5 table-responsive ">
                <table className="table table-bordered table-sm ">
                    <thead>
                        <tr>
                        <th className="fs-6 p-1">S. No</th>
                            <th className="fs-6 p-1">User Email</th>
                            <th className="fs-6 p-1">Equipment Name</th>
                            <th className="fs-6 p-1">Equipment Type</th>
                            <th className="fs-6 p-1">Address</th>
                            <th className="fs-6 p-1">Details</th>
                            <th className="fs-6 p-1">Verify Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            equipmentsData.length === 0 ? (
                                <tr>
                                    <td colSpan="13" className="text-center">No data available</td>
                                </tr>
                            ) : (
                                equipmentsData.map((equipment, index) => (
                                    <tr key={index}>
                                        <td className="fs-6">{index + 1}</td>
                                        <td className="fs-6">{equipment.userEmail}</td>
                                        <td className="fs-6">{equipment.name}</td>
                                        <td className="fs-6">{equipment.modelnumber}</td>
                                        <td className="fs-6">{equipment.city},{equipment.state}</td>
                                        <td className="fs-6"><CardModal Equipment={equipment}/></td>
                                        <td className="fs-6">{equipment.admin_verify? <button type="button" name="" id="" className="btn btn-outline-success btn-sm" onClick={()=>updateAdminStatus(equipment._id)} >Verified
                                        </button>:<button type="button" name="" id="" className="btn btn-outline-danger btn-sm" onClick={()=>updateAdminStatus(equipment._id)} >Not Verified
                                        </button>}</td>
                                        
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )

}
export default ListedEquipmentsAd;