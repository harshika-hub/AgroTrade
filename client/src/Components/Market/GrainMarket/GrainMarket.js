// import './GrainMarket.css'
// export  function GrainMarketCard({data}){  
// return(

//           <div className="col-lg-3 col-md-12 mb-4">
//         <div className="card">
//           <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
//             data-mdb-ripple-color="light">
//             <img  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
//             // <img  src={`https://localhost:3000/${data.image}`}
//             className="w-100" />
//               <div className="mask">
//                 <div className="d-flex justify-content-start align-items-end h-100">
//                   <h5><span className="badge bg-success ms-2">New</span></h5>
//                 </div>
//               </div>
//               <div className="hover-overlay">
//                 <div className="mask" style={{backgroundColor: 'red'}}></div>
//               </div>
//           </div>
//           <div className="card-body">
//               <h5 className="card-title mb-3">Product name:{data.grainname}</h5>
//               <p>Category</p>
//             <h6 className="mb-3">$61.99</h6>

//           </div>
//         </div>
//         </div>


//       )



// }


import React, { useState } from 'react';
import './GrainMarket.css';

export function GrainMarketCard({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card border-3 border-success">
        <div
          className="position-relative hover-zoom"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleModalOpen}
          style={{ cursor: 'pointer' }}
        >
          {/* <img  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp" */}
          <img src={"http://localhost:3000/" + data.image}
            className="w-img"
            alt="Product Image"
          />
          {isHovered && (
            <button
              type="button"
              className="btn btn-success position-absolute top-50 start-50 translate-middle"
            >
              <i className="bi bi-eye-fill"></i> View
            </button>
          )}
          <span className="badge bg-success position-absolute top-0 end-0 mt-2 me-2">{data.grain}</span>

        </div>
        <div className="card-body">
          <h5 className="card-title mb-1 txt-s">Product name: {data.grainname}</h5>
          <p className='mb-1 fs-4 me-2 txt-s'><b>State:</b> {data.state}</p>
          <p className="mb-1 fs-3 txt-s"><b>Price:</b>{data.price}</p>
          <button className="btn btn-success d-block px-5 d-flex mx-5">More</button>
        </div>
      </div>

      <div
        className={`modal fade ${modalOpen ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden={!modalOpen}
        style={{ display: modalOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{data.grainname} Details</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleModalClose}
              ></button>
            </div>
            <div className="modal-body border-3 border-success">
              <div className="row">
                <div className="col-md-6">
                  {/* <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp" */}
                              <img src={"http://localhost:3000/" + data.image}

                    className="w-100 h-100"
                    alt="Product Image"
                  />
                </div>
                <div className="col-md-6">
                  <p>Description: {data.description}</p>
                  <p>Grain: {data.grain}</p>
                  <p>Grain Type: {data.graintype}</p>
                  <p>Moisture Level: {data.moisturelevel}</p>
                  <p>Price: ${data.price}</p>
                  <p>Quantity: {data.quantity}</p>
                  <p>Shelf Life: {data.selflife} months</p>
                  <p>State: {data.state}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
