import { useEffect, useState } from 'react'
import HeadSlider from '../HeadSilder/HeadSlider'
import Header from '../Header/Header'
import jscookie from 'js-cookie'
import './ExpertList.css'
import ExpertCard from './ExpertCard.js'
import { getExpert } from '../../store/expertSlice';
import BookExpert from './BookExpert.js'
export default function ExpertList() {
  const [expert, setExpert] = useState([]);
  const [status, setStatus] = useState(false);


  useEffect(() => {
    const Expert = async () => {
      const token = jscookie.get("token")
      const response = await getExpert()
      console.log("expertList in component", response);
      if (response) {
        setStatus(true)
        setExpert([...response.expert]);
      }
    }
    Expert();
    // getExpert().then((expert)=>{expert.json()}).then((data)=>{
    //     console.log("expert list inside component",data)
    // });
  }, []);
  return (
    <>
      <Header />


      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
        {status ?
          expert.map((data, i) => {
            return (
          
              // <div className="col mb-3 mt-2" key={i}>
              //   <div className="card">
              //     <div className="card-body text-center mt-5 ">
              //       <img src={"http://localhost:3000/" + data.image} style={{ width: "200px", marginTop: "-65px" }} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
              //       <h5 className="card-title">{data.name}</h5>
              //       <p className="text-secondary mb-1"><b>Education-</b> {data.education}</p>
              //       <p className="text-muted font-size-sm mb-1"><b>Type-</b>{data.consultancy_type}</p>
              //       <p className="text-muted font-size-sm mb-1"><b>Type-</b>{data._id}</p>
              //       <p className="text-muted font-size-sm mb-1"><b>Fee-</b>{data.consultancy_type.trim() == "chat" ? (data.consultancy_fee_chat) : (data.consultancy_type.trim()) == "vedio_call" ? data.consultancy_fee_video : data.consultancy_fee_video + "," + data.consultancy_fee_chat}</p>

              //     </div>
              //     <div className="card-footer d-flex justify-content-center">
              //       <BookExpert ExpertId={data._id} />
              //     </div>
              //   </div>
              // </div>
              <ExpertCard expert={data} key={i}/>
            )
          })
          :
          <div className="col mb-3 mx-auto text-center" style={{ marginTop: "10%" }}>
            <div className="card">
              {/* <img src="https://www.bootdey.com/image/340x120/FFB6C1/000000" alt="Cover" className="card-img-top"/> */}

              <div className="card-body text-center mt-5 ">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{ width: "100px", marginTop: "-65px" }} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />
                <h5 className="card-title">John Doe</h5>
                <p className="text-secondary mb-1 bg-warning ">OOPs.............</p>
                <p className="font-size-sm text-danger">There is no Expert available</p>
              </div>

            </div>
          </div>

        }
      </div>


    </>

  )
}