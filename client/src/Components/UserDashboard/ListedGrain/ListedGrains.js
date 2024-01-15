import "./ListedGrains.css"
import ListedGrainsCards from "./ListedGrainsCards";
import AddGrain from "./AddGrain";
import { useEffect, useState } from "react";
import axios from 'axios';
import { USER_REQUESTED_URL } from '../../../urls.js';
import jscookie from "js-cookie"
function ListedGrains(props) { 
    const [dataGrain, setDataGrain] = useState([]);
    var getGrians=() => {
        const userEmail = jscookie.get("userEmail");
        
        axios.post(USER_REQUESTED_URL + "/getGrain", { userEmail }).then((grains) => {
            setDataGrain(grains.data.result)
            console.log("dataGrain", dataGrain);
        }).catch(err => console.log('error ', err));
    }
    
    useEffect(getGrians, [])
    console.log(dataGrain);
import { useDispatch } from "react-redux";
import jscookie from "js-cookie"
function ListedGrains(props) {
    const [dataGrain, setDataGrain] = useState([]);
    useEffect(() => {
        const userEmail = jscookie.get("userEmail");
        axios.post(USER_REQUESTED_URL + "/getGrain", { userEmail }).then((grains) => {
            setDataGrain(grains.data.result)
            console.log("dataGrain", dataGrain);
        })
            .catch(err => console.log('error ', err));
    }, [])

    return (<>

        <div className="row m-2 p-0 " id="ListedGrainsBox" >
            <div className="col-12 d-flex justify-content-between p-3" >
                <h1 className="text-center darkgreen wght-600"> <i className="fa-solid fa-wheat-awn"></i>&nbsp;Listed Grains</h1>
                <AddGrain getGrians={getGrians}  />
            </div>
            
    {dataGrain.map((Grain,index)=>{
           return(<ListedGrainsCards key={index} Grain={Grain} index={index} getGrians={getGrians} />)
    })}
             
                <AddGrain />
            </div>
            <ListedGrainsCards />
            <ListedGrainsCards />
            <ListedGrainsCards />
            <ListedGrainsCards />
            <ListedGrainsCards />
            <ListedGrainsCards />
        </div>


    </>);
}

export default ListedGrains;