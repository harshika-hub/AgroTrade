import React from 'react';
import { useState ,useEffect} from 'react'
import jscookie from "js-cookie";
import axios from 'axios';
import { ORGANIZATION_REQUESTED_URL } from '../../../urls';
import OrgProfileUpdate from './OrgProfileUpdate';
import Footer from "../../Footer/Footer.js"
export default function OrgProfile() {
    const[dataOrg,setDataOrg]=useState({});
    var getOrgProfile=()=>{
        const dealer_email=jscookie.get("dealer_email");
        // console.log('dealer_email',dealer_email);
        
        axios.post(ORGANIZATION_REQUESTED_URL+"/getOrgProfile",{dealer_email}).then((orgprofile)=>{
            setDataOrg(orgprofile.data.result);
            // console.log("orgprofile",setDataOrg);
        }).catch(err=>console.log('error',err));
    }

    useEffect(getOrgProfile,[])
    return (
        <div>
            <section className="bg-light py-2">
                <div className="container-fulid p-2">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card mb-4 ">
                                <div className="card-body text-center">
                                    <img
                                        src={"http://localhost:3000/"+dataOrg.org_image}
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: '150px' }}
                                    />
                                    <h5 className="my-3">{dataOrg.company_name}</h5>
                                    <p className="text-muted mb-1">{dataOrg.org_email}</p>
                                    <p className="text-muted mb-4"><i className="bi bi-geo-alt text-danger"></i>{dataOrg.city},{dataOrg.state}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 ">
                        <div className="card ">
                            <div className="card-body overflow-auto">
                                <div className='row'>
                                    <div className='col  p-0 '>
                                        <div className='col-lg-12'>
                                            <div className="d-flex justify-content-between align-items-center p-1 col-12">
                                                <h6 className='col-md-4 col-4 darkgreen'>Reg No</h6>
                                                <p className="m-0 col-md-8 col-8 ">{dataOrg.reg_number}</p>
                                            </div>

                                        <div className="d-flex justify-content-between align-items-center p-1 col-12">
                                            <h6 className='col-md-4 col-4 darkgreen'>Reg Name</h6>
                                            <p className="m-0 col-8 col-md-8">{dataOrg.reg_name}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center p-1 col-12">
                                            <h6 className='col-4 col-md-4 darkgreen'>Owner Name</h6>
                                            <p className="m-0 col-8 col-md-8">{dataOrg.owner_name}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center p-1 col-12">
                                            <h6 className='col-4 col-md-4 darkgreen'>Dealer Name</h6>
                                            <p className="m-0 col-8 col-md-8">{dataOrg.dealer_name}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center p-1 col-12">
                                            <h6 className='col-4 col-md-4 darkgreen'><i class="bi bi-envelope text-success px-1"></i>Dealer</h6>
                                            <p className="m-0 col-8 col-md-8">{dataOrg.dealer_email}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center p-1 col-12">
                                            <h6 className='col-4 col-md-4 darkgreen'><i class="bi bi-telephone text-danger px-1"></i>Dealer</h6>
                                            <p className="m-0 col-8 col-md-8">{dataOrg.dealer_contact}</p>
                                        </div>
                                        
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                       <div className="d-flex justify-content-between align-items-center p-1 col-12">
                                            <h6 className='col-4 darkgreen'>Org-Type</h6>
                                            <p className="m-0 col-md-8 col-8">{dataOrg.org_type}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center p-1 col-12">
                                                <h6 className='col-lg-4 col-md-4 darkgreen'><i class="bi bi-geo text-danger px-1"></i>Address</h6>
                                                <p className="m-0 col-8 col-md-8">{dataOrg.address}</p>
                                           </div>
                                             <div className="d-flex justify-content-between align-items-center p-1 col-12">
                                                <h6 className='col-4 col-md-4 darkgreen '><i class="bi bi-crosshair px-1"></i>Pin Code</h6>
                                                <p className="m-0 col-8 col-md-8">{dataOrg.zip_code}</p>
                                           </div>
                                           
                                            <div className='d-flex justify-content-between align-items-center p-1 col-12'>
                                                  <h6 className='darkgreen '>Description</h6>
                                                  <p className="m-0 col-8 col-md-8 overflow-auto">
                                                  {dataOrg. org_description}
                                                  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid   justify-content-center gap-2">
                                    <OrgProfileUpdate DataOrg={dataOrg} getOrgProfile={getOrgProfile}/>
                                  {/* <button type="button"  className="btn btn-outline-success btn-sm"> <i class="bi bi-arrow-up-circle"></i>&nbsp;Edit Here </button> */}
                                </div>
                            </div>
                        
                            </div>
                         </div>
                       </div>
            </section>
            <Footer/>
        </div>
    );
}
