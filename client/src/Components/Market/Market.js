import { useEffect, useState } from "react";
import { GrainMarketCard } from "./GrainMarket/GrainMarket.js";
import axios from 'axios';
import { USER_REQUESTED_URL } from "../../urls.js";
import jscookie from 'js-cookie';
import { EquipmentMarket, LandMarket, storageMarket } from "../../store/marketSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function MarketCard() {
  const [data, setData] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [agriLand, setAgriland] = useState([]);
  const [storage, setStorage] = useState([]);


   var equip=useSelector(state=>state.marketSlice.equipment);
  const dispatch = useDispatch();
  const getEquipment = async (token) => {
    const equipment = await dispatch(EquipmentMarket(token));
    console.log('equipment in component', equipment.payload);
    setEquipment(equipment.payload);

  }

  const getLand = async (token) => {
    const agriLand = await dispatch(LandMarket(token));
    console.log('agriLand in component', agriLand.payload);
    setAgriland(agriLand.payload);

  }

  const getStorage = async (token) => {
    const storage = await dispatch(storageMarket(token));
    console.log('storage in component', storage.payload);
    setStorage(storage.payload);

  }

  useEffect(() => {
    const token = jscookie.get('token')

    const fetchData = async () => {
      try {
        const response = await axios.get(USER_REQUESTED_URL + "/marketGrains/" + token);
        setData(response.data.grain);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    getEquipment(token);
    getLand(token);
    getStorage(token)
    console.log('equipment by selector',equip);

  }, []);

  return (<section className='p-2' >
    <h2 className="mt-4 mb-3 text-center text-success"><strong>Grains</strong></h2>
    <div className="row ms-2">
      {data.map(item => (
        <GrainMarketCard key={item.userEmil} data={item} />
      ))}    </div>
    <h2 className="mt-4 mb-3 text-center text-success "><strong>Equipment</strong></h2>

    <div className="row ms-2">
      {equipment.map(item => (
        <GrainMarketCard key={item.userEmil} data={item} />
      ))}    </div>

    <h2 className="mt-4 mb-3 text-center text-success "><strong>Farming Land</strong></h2>

    <div className="row ms-2">
      {agriLand.map(item => (
        <GrainMarketCard key={item.userEmil} data={item} />
      ))}    </div>

  </section>)
}