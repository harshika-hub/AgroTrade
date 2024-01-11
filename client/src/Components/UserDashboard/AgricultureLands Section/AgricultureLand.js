import AgricultureLandCard from "./AgricultureLandCard";
function AgricultureLand() {
  return (
    <>
      <div className="row m-2 p-0 " id="ListedGrainsBox">
        <div className="col-12 d-flex justify-content-between p-3">
          <h1 className="text-center darkgreen wght-600">
            {" "}
            <i className="fa-solid fa-wheat-awn"></i>&nbsp;Agriculture Lands
          </h1>
          <button type="button" className="btn btn-outline-success btn-sm">
            <i class="bi bi-plus-lg"></i>&nbsp;Add Land
          </button>
        </div>
      <div className="col-12" >
               <AgricultureLandCard/>
               <AgricultureLandCard/>
               <AgricultureLandCard/>
               <AgricultureLandCard/>
               
        
      </div>

      </div>
    </>
  );
}

export default AgricultureLand;
