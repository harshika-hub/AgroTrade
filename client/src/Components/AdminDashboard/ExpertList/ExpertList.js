import { ADMIN_REQUESTED_URL } from "../../../urls";
import { useState, useEffect } from "react";
import {statusExpert,statusVerifyExpert} from "../../../store/adminSlice"
import axios from "axios";
import Swal from "sweetalert2";
function ExpertListView() {

    const [expertData, setExpertData] = useState([])
    useEffect(() => {
        getData();
    }, []);

    const updateStatusExpert = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Update it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                statusExpert({ "_id": _id }).then(data => {
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
                    'You not Update Status :)',
                    'info'
                );
            }
        });
    }
    const expertStatusVerify = (_id) => {
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
                statusVerifyExpert({ "_id": _id }).then(data => {
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

    const getData = () => {
        try {
            axios.get(ADMIN_REQUESTED_URL + "/adminExpertList").then((userDatas) => {
                setExpertData(userDatas.data.result)
            })
                .catch(err => console.log('error ', err));
        } catch (err) {
            console.log("Eroor in get uer data", err);
        }
    }

    return(
        <>
          <p className="mt-5 text-center fs-2 darkgreen fw-bold">Expert List</p>
            <div className="container mt-5 mr-5 table-responsive ">
                <table className="table table-bordered table-sm ">
                    <thead>
                        <tr>
                        <th className="fs-6 p-1">S. No</th>
                            <th className="fs-6 p-1">Name</th>
                            <th className="fs-6 p-1">Email</th>
                            <th className="fs-6 p-1">Education</th>
                            <th className="fs-6 p-1">Experience</th>
                            <th className="fs-6 p-1">C_Fee Chat</th>
                            <th className="fs-6 p-1">C_Fee Video</th>
                            <th className="fs-6 p-1">Details</th>
                            <th className="fs-6 p-1">Verify</th>
                            <th className="fs-6 p-1">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            expertData.length === 0 ? (
                                <tr>
                                    <td colSpan="13" className="text-center">No data available</td>
                                </tr>
                            ) : (
                                expertData.map((expert, index) => (
                                    <tr key={index}>
                                        <td className="fs-6">{index + 1}</td>
                                        <td className="fs-6">{expert.name}</td>
                                        <td className="fs-6">{expert.email}</td>
                                        <td className="fs-6">{expert.education}</td>
                                        <td className="fs-6">{expert.experience}</td>
                                        <td className="fs-6">{expert.consultancy_fee_chat}</td>
                                        <td className="fs-6">{expert.consultancy_fee_video}</td>
                                        <td className="fs-6"><button type="button" name="" id="" className="btn btn-warning btn-sm" >See Details
                                        </button></td>
                                        <td className="fs-6">{expert.status=="deactive"? <button type="button" name="" id="" className="btn btn-outline-success btn-sm" onClick={()=>updateStatusExpert(expert._id)} >Active
                                        </button>:<button type="button" name="" id="" className="btn btn-outline-danger btn-sm" onClick={()=>updateStatusExpert(expert._id)}>Deactive
                                        </button>}</td><td className="fs-6">{expert.verify_status? <button type="button" name="" id="" className="btn btn-outline-success btn-sm" onClick={()=>expertStatusVerify(expert._id)} >Verify
                                        </button>:<button type="button" name="" id="" className="btn btn-outline-danger btn-sm" onClick={()=>expertStatusVerify(expert._id)}>Not Verify
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
export default ExpertListView;