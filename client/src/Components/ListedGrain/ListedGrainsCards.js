import chawal from "../../assets/rice.jpeg"
function ListedGrainsCards() {
    return ( <>
    
    <div className=" col-6 col-sm-6 col-md-6  col-lg-6  p-2  d-flex justify-content-center">
      <div className="card ">
        <div className="row g-0">
          <div className=" col-12 col-sm-6 col-md-12 col-lg-6  ">
            <img src={chawal} className="img-fluid h-100 rounded-start" alt="..." />
          </div>
          <div className=" col-12 col-sm-6 col-md-12 col-lg-6 ">
            <div className="card-body">
              <div className="d-flex justify-content-end" >
                <span className="badge bg-success fs-6">Organic</span>
              </div>
              <h3 className="card-title darkgreen fs-4">Tuur Daal</h3>
              <p className="card-text darkgreen fs-6">
                Type: Basmati <br />
                Price: Rs. 14,500/quintal  <br />
                Quality: Good <br />
                Shelf Life: 1 Year <br />
                Moisture Level: 30%
              </p>
              <p className="card-text darkgreen fs-5"><small className="text-muted"><i className="bi bi-geo-alt text-danger"></i>&nbsp;Indore</small></p>
              <div className="d-grid gap-2">
                <button type="bu tton" name="" id="" className="btn btn-outline-success btn-sm"><i class="bi bi-arrow-up-circle-fill"></i>&nbsp;Update
                </button>
                <button type="bu tton" name="" id="" className="btn btn-outline-danger btn-sm"><i class="bi bi-trash"></i>&nbsp;Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </> );
}

export default ListedGrainsCards;