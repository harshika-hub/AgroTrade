import { useEffect, useState } from "react";
import { GrainMarketCard } from "./GrainMarket/GrainMarket.js";
import axios from 'axios';
import { USER_REQUESTED_URL } from "../../urls.js";
import jscookie from 'js-cookie';
import { EquipmentMarket, LandMarket, storageMarket } from "../../store/marketSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { EquipmentMarketCard } from "./EquipmentMarket/EquipmentMarket.js";
import { FarmLandMarketCard } from "./FarmLandMarket/FarmLandMarket.js";
import { StorageMarketCard } from "./StorageMarket/StorageMarket.js";
import { Link } from "react-router-dom";

export default function MarketCard() {
  const [grain, setGrain] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [agriLand, setAgriland] = useState([]);
  const [storage, setStorage] = useState([]);


  var equip = useSelector(state => state.marketSlice.equipment);
  const dispatch = useDispatch();

  const getEquipment = async (token) => {
    const equipment = await dispatch(EquipmentMarket(token));
    console.log('equipment in component', equipment.payload);
    setEquipment(equipment.payload.slice(0,2));

  }

  const getLand = async (token) => {
    const agriLand = await dispatch(LandMarket(token));
    console.log('agriLand in component', agriLand.payload);
    setAgriland((agriLand.payload).slice(0,1));

  }

  const getStorage = async (token) => {
    const storage = await dispatch(storageMarket(token));
    console.log('storage in component', storage.payload);
    setStorage((storage.payload).slice(0,1));

  }

  useEffect(() => {
    const token = jscookie.get('token')

    const fetchData = async () => {
      try {
        const response = await axios.get(USER_REQUESTED_URL + "/marketGrains/" + token);
        setGrain(response.data.grain.slice(0,2));
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    getEquipment(token);
    getLand(token);
    getStorage(token)
    console.log('equipment by selector', equip);

  }, []);

  return (<section className='p-2' >
    <h2 className="mt-4 mb-3 text-center text-success"><strong>Grains</strong></h2>
    <div className="row ms-2">
      {/* <GrainMarketCard grain={equipment}/> */}
      {grain.map(item => (
        <GrainMarketCard key={item._id} grain={item} />
      ))}
    </div>
    {/* {true?
    <button className='btn btn-success mt-1 w-50 mx-auto'>
  <Link to='/market/grainMarket' className='text-white text-decoration-none'>More</Link>
</button>: <button className='btn btn-success mt-1 w-50 ms-auto me-5'>
  <Link className='text-white text-decoration-none'>Add to Cart</Link>
</button>
  } */}


     <div className="container-fluid bg-white mt-5  d-flex justify-content-center pt-4">
        <div className="row m-0" id="lands-row">
          <h1 className="darkgreen wght-600 text-center">Lands</h1>

  {agriLand.map(item => (
    <FarmLandMarketCard key={item._id} agriLand={item} />
  ))}
</div>
</div>

    <h2 className="mt-4 mb-3 text-center text-success"><strong>Equipment</strong></h2>

<div className="row ms-2">
  {equipment.map(item => (
    <EquipmentMarketCard key={item._id} equips={item} />
  ))}
</div>
    <h2 className="mt-4 mb-3 text-center text-success "><strong>Cold Storage</strong></h2>

    <div className="row ms-2">
      {storage.map(item => (
        <StorageMarketCard key={item._id} storageLand={item} />
      ))}    </div>

  </section>)
}