import { ADMIN_REQUESTED_URL } from "../../../urls";
import { useState, useEffect } from "react";
import {statusUpdate,statusVerify} from "../../../store/adminSlice"
import axios from "axios";
import Swal from "sweetalert2";

function OrganizationList() {
    const [organizationData, setOrganizationData] = useState([])
    useEffect(() => {
        getData();
    }, []);
    const getData = ()=>{
        try {
            axios.get(ADMIN_REQUESTED_URL + "/adminOrganizationList").then((userDatas) => {
                setOrganizationData(userDatas.data.result)
            })
                .catch(err => console.log('error ', err));
        } catch (err) {
            console.log("Eroor in get uer data", err);
        }
    }
    const updateStatus = (_id)=>{
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
                statusUpdate({"_id":_id}).then(data=>{
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
                   
                }).catch((err)=>{
                    console.log("err",err);
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
    const updateStatusVerify = (_id)=>{
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
                statusVerify({"_id":_id}).then(data=>{
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
                   
                }).catch((err)=>{
                    console.log("err",err);
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
            <p className="mt-5 text-center fs-2 darkgreen fw-bold">Organization List</p>
            <div className="container mt-5 mr-5 table-responsive ">
                <table className="table table-bordered table-sm ">
                    {console.log("organizationData", organizationData)}
                    <thead>
                        <tr>
                            <th className="fs-6 p-1">S. No</th>
                            <th className="fs-6 p-1">Org-Name</th>
                            <th className="fs-6 p-1">Org-Email</th>
                            <th className="fs-6 p-1">Dealer Email</th>
                            <th className="fs-6 p-1">Dealer Name</th>
                            <th className="fs-6 p-1">Dealer Contact</th>
                            <th className="fs-6 p-1">Details</th>
                            <th className="fs-6 p-1">Status</th>
                            <th className="fs-6 p-1">Verify</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            organizationData.length === 0 ? (
                                <tr>
                                    <td colSpan="13" className="text-center">No data available</td>
                                </tr>
                            ) : (
                                organizationData.map((org, index) => (
                                    <tr key={index}>
                                        <td className="fs-6">{index + 1}</td>
                                        <td className="fs-6">{org.company_name}</td>
                                        <td className="fs-6">{org.org_email}</td>
                                        <td className="fs-6">{org.dealer_email}</td>
                                        <td className="fs-6">{org.dealer_name}</td>
                                        <td className="fs-6">{org.dealer_contact}</td>
                                        <td className="fs-6"><button type="button" name="" id="" className="btn btn-warning btn-sm" >See Details
                                        </button></td><td className="fs-6">{org.status=="daactive"? <button type="button" name="" id="" className="btn btn-outline-success btn-sm" onClick={()=>updateStatus(org._id)} >Active
                                        </button>:<button type="button" name="" id="" className="btn btn-outline-danger btn-sm" onClick={()=>updateStatus(org._id)}>Deactive
                                        </button>}</td><td className="fs-6">{org.verify_status? <button type="button" name="" id="" className="btn btn-outline-success btn-sm" onClick={()=>updateStatusVerify(org._id)} >Verify
                                        </button>:<button type="button" name="" id="" className="btn btn-outline-danger btn-sm" onClick={()=>updateStatusVerify(org._id)}>Not Verify
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
export default OrganizationList;

