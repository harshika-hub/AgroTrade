import tractor from "../../../assets/john-deere-wallpaper-19-642x462 (1).jpg";
import "./ListedEquiments.css";
import ListedEquipmentCard from "./ListedEquipmentCard";
function ListedEquipments() {
  return (
    <>
      <div className="row m-0 w-100" id="cardsRow">
        <div className="col-12  d-flex justify-content-between aling-items-center pt-2 ps-3 pe-3">
          <h1 className="darkgreen wght-600 text-center">
            {" "}
            <i className="fa-solid fa-tractor"></i>&nbsp;Equipments
          </h1>
          <button type="button" className="btn btn-outline-success btn-sm">
            <i class="bi bi-plus-lg"></i>&nbsp;Add equipment
          </button>
        </div>
        <ListedEquipmentCard />
        <ListedEquipmentCard />
        <ListedEquipmentCard />
        <ListedEquipmentCard />
        <ListedEquipmentCard />
        <ListedEquipmentCard />
        <ListedEquipmentCard />
        <ListedEquipmentCard />
      </div>
    </>
  );
}

export default ListedEquipments;
