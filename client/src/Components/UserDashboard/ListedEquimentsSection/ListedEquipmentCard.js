import tractor from "../../../assets/john-deere-wallpaper-19-642x462 (1).jpg"
import "./ListedEquipmentCard.css"
function ListedEquipmentCard() {
    return ( <>
        <div className="col-12 col-sm-12 col-md-6   p-0 p-3  d-flex justify-content-center  card-col" >
                    <div className="card bg-light  w-100" style={{borderRadius:"5px"}}>
                      <div className="row g-0">
                        <div className="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6">
                          <img src={tractor} className="img-fluid h-100 rounded-start" alt="..." />
                        </div>
                        <div className="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6">
                          <div className="card-body">
                            <div className="d-flex justify-content-end" >
                              <span className="badge bg-warning text-black mb-3 fs-6">Available</span>
                            </div>
                            <h3 className="card-title darkgreen">Jhon Deere Tractor</h3>
                            <p className="card-text darkgreen fs-5 ">
                              Type: Vehicle <br />
                              Price: Rs. 1500/hour  <br />
                              Quality: 50575(75HP,4WD) <br />
                            </p>
                            <p className="darkgreen text-danger fs-5 "><small ><i className="bi bi-geo-alt"></i>&nbsp;Indore</small></p>
                            <div className="d-grid gap-2">
                              <button type="button" name="" id="" className="btn btn-outline-success btn-sm"><i className="bi bi-arrow-up-circle"></i>&nbsp;Update</button>
                              <button type="button" name="" id="" className="btn btn-outline-danger btn-sm"><i className="bi bi-trash3"></i>&nbsp;Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </>);
}

export default ListedEquipmentCard;