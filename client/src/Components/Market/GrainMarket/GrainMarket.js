
import React, { useEffect, useState } from 'react';
// import './GrainMarket.css';
import '../../UserDashboard/ListedGrain/ListedGrinCard.css'
import { USER_REQUESTED_URL } from '../../../urls';
import axios from 'axios';
import jscookie from 'js-cookie';
import { Link } from 'react-router-dom';

export function GrainMarketCard({ grain }) {
  const [dat, setData] = useState([]);
  useEffect(()=>{
    const token = jscookie.get('token')

    if(grain){
    setData([grain]);
  }else{
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
  }

  },[grain])

  const addTocart=(grain)=>{


  }
  return (
    <>
{ dat||grain?
  dat.map((data)=>{
return(
<div className="col-6 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center p-2  d-inline-flex ">
<div className="card bg-white bg-warning">
  <div className="row g-0">
    <div className=" col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6 p-0" id="imgeDiv">
      <img src={"http://localhost:3000/"+data.image} className="img-fluid rounded-start w-100 card-image" alt={data.image} />
    </div>
    <div className=" col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6 ">
      <div className="card-body">
        <div className="d-flex justify-content-end">
          {data.grain==="inorganic"? <span className="badge bg-warning fs-6">Inorganic</span>: <span className="badge bg-success fs-6">Organic</span>}
        </div>
        <h4 className="card-title darkgreen fs-4">{data.grainname}</h4>
        <p className="card-text darkgreen fs-6 m-0">
          Type: {data.graintype}
        </p>
        <p className="card-text darkgreen fs-6 m-0">
          Price: Rs.{data.price}/quintal
        </p>
        <p className="card-text darkgreen fs-6 m-0">
          Quantity:{data.quantity} quintal
        </p>
        <p className="card-text darkgreen fs-6 m-0">
          Shelf Life: {data.selflife} Month 
        </p>
        <p className="card-text darkgreen fs-6 m-0">
          Moisture Level: {data.moisturelevel}%
        </p>
        <p className="card-text darkgreen fs-6 m-0" style={{maxHeight:"40px",overflow:"scroll"}} >Description: {data.description}</p>
        <p className="card-text darkgreen fs-6 m-0"><i className="bi bi-geo-alt text-danger"></i>&nbsp;{data.city},{data.state}</p>
      </div>
    
    </div>
    {grain?
    <button className='btn btn-success w-25 mx-auto'>
  <Link to='/market/grainMarket' className='text-white text-decoration-none'>Explore More</Link>
</button>: <button className='btn btn-success mt-1 w-50 mx-auto' onPreess={()=>{addTocart(data)}}>
  <Link className='text-white text-decoration-none'>Add to Cart</Link>
</button>
  }
  </div>
</div>
</div>
)
  }):<h1 className='text-center'>There is no Grain available</h1>
}

        
    </>
  );
}