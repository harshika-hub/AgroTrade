import { ADMIN_REQUESTED_URL } from "../../../urls";
import { useState, useEffect } from "react";
import { statusVerifyupdate, statusUser } from "../../../store/adminSlice"
import axios from "axios";
import Swal from "sweetalert2";


function UserList() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            axios.get(ADMIN_REQUESTED_URL + "/adminUerList").then((userDatas) => {
                setUserData(userDatas.data.result)
            })
                .catch(err => console.log('error ', err));
        } catch (err) {
            console.log("Eroor in get uer data", err);
        }
    }


    const updateStatususer = (_id) => {
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
                statusUser({ "_id": _id }).then(data => {
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
    const updateStatusVerify = (_id) => {
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
                statusVerifyupdate({ "_id": _id }).then(data => {
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

    return (
        <>
            <p className="mt-5 text-center fs-2 darkgreen fw-bold">User List</p>
            <div className="container mt-5 mr-5 table-responsive ">
                <table className="table table-bordered table-sm ">
                    {console.log("userData", userData)}
                    <thead>
                        <tr>
                            <th className="fs-6 p-1">S. No</th>
                            <th className="fs-6 p-1">Name</th>
                            <th className="fs-6 p-1">Email</th>
                            <th className="fs-6 p-1">Address</th>
                            <th className="fs-6 p-1">Contact</th>
                            <th className="fs-6 p-1">Profile</th>
                            <th className="fs-6 p-1">Status</th>
                            <th className="fs-6 p-1">Verify</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.length === 0 ? (
                                <tr>
                                    <td colSpan="13" className="text-center">No data available</td>
                                </tr>
                            ) : (
                                userData.map((user, index) => (
                                    <tr key={index}>
                                        <td className="fs-6">{index + 1}</td>
                                        <td className="fs-6">{user.name}</td>
                                        <td className="fs-6">{user.email}</td>
                                        <td className="fs-6">{user.address}</td>
                                        <td className="fs-6">{user.number}</td>
                                        <td>
                                            {/* <a href={"http://localhost:3000/" + user.image}>
                                            <img width={"100%"} height={"100vw"} src={"http://localhost:3000/" + user.image}></img>
                                            {user.image}
                                        </a> */}
                                            <a href={"http://localhost:3000/" + user.image} style={{ textDecoration: 'none', color: 'black',fontSize:"18px" }}>
                                                {user.image}
                                            </a>

                                        </td>
                                        <td className="fs-6">{user.status == "deactive" ? <button type="button" name="" id="" className="btn btn-outline-success btn-sm" onClick={() => updateStatususer(user._id)} >Active
                                        </button> : <button type="button" name="" id="" className="btn btn-outline-danger btn-sm" onClick={() => updateStatususer(user._id)}>Deactive
                                        </button>}</td><td className="fs-6">{user.verify_status ? <button type="button" name="" id="" className="btn btn-outline-success btn-sm" onClick={() => updateStatusVerify(user._id)} >Verify
                                        </button> : <button type="button" name="" id="" className="btn btn-outline-danger btn-sm" onClick={() => updateStatusVerify(user._id)}>Not Verify
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
export default UserList;