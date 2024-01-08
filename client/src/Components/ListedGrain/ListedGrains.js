import "./ListedGrains.css"
import ListedGrainsCards from "./ListedGrainsCards";
function ListedGrains() {
    return ( <>

    <div className="row m-2 p-0 " id="ListedGrainsBox" >
 <div className="col-12 d-flex justify-content-between p-3" >
 <h2 className="text-center midgreen"> <i class="fa-solid fa-wheat-awn"></i>&nbsp;Listed Grains</h2>
 <button type="button" className="btn btn-outline-success btn-sm" ><i class="bi bi-plus-lg"></i>&nbsp;Add grains</button>
  </div>
        <ListedGrainsCards/>
         <ListedGrainsCards/>
         <ListedGrainsCards/>
         <ListedGrainsCards/>
         <ListedGrainsCards/>
         <ListedGrainsCards/>
    </div>
 

    </> );
}

export default ListedGrains;