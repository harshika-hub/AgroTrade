import "./services.css"
export function Service1({ title, content, image }){
    return (
      
      <section className="py-3 py-md-5 bg-white mt-5">
      <div className="container-fluid">
        <div className="row gy-md-4 gy-lg-0 ">
        <div className="col-12 col-lg-6 order-first">
            <img className="rounded w-100" loading="lazy" src={image} alt=""/>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-10 align-items-lg-center">
                <h2 className="h1 mb-3 mt-3 darkgreen">{title}</h2>
                <p className=" mb-3 mb-xl-5 servicePara midgreen ">{content}</p>
                <button type="button" className="btn bsb-btn-2xl btn-outline-primary rounded-pill">Know More</button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
    );
}


export function Service2({ title, content, image }){
  return (
      <section className="py-3 py-md-5 bg-white mt-5 ">
        <div className="container-fluid  p-4">
          <div className="row gy-md-4 gy-lg-0 ">
            
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-10 align-items-lg-center">
                  <h2 className="h1 mb-3 mt-3 darkgreen">{title}</h2>
                  <p className="servicePara mb-3 mb-xl-5 midgreen ">{content}</p>
                  <button type="button" className="btn bsb-btn-2xl btn-outline-primary rounded-pill">Know More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-lg-last order-sm-1 bg-danger ">
              <img className="rounded w-100" loading="lazy" src={image} alt=""/>
            </div>
          </div>
        </div>
      </section>
    );
}


