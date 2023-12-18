
export function Service1({ title, content, image }){
    return (
      
      <section class="py-3 py-md-5 bg-white mt-5">
      <div class="container-fluid">
        <div class="row gy-md-4 gy-lg-0 ">
        <div class="col-12 col-lg-6">
            <img class="rounded w-100" loading="lazy" src={image} alt=""/>
          </div>
          <div class="col-12 col-lg-6">
            <div class="row justify-content-xl-center">
              <div class="col-12 col-xl-10 align-items-lg-center">
                <h2 class="h1 mb-3 mt-3">{title}</h2>
                <p class="lead fs-4 mb-3 mb-xl-5 ">{content}</p>
                <button type="button" class="btn bsb-btn-2xl btn-outline-primary rounded-pill">Know More</button>
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
      <section class="py-3 py-md-5 bg-white mt-5">
        <div class="container-fluid">
          <div class="row gy-md-4 gy-lg-0 ">
            
            <div class="col-12 col-lg-6">
              <div class="row justify-content-xl-center">
                <div class="col-12 col-xl-10 align-items-lg-center">
                  <h2 class="h1 mb-3 mt-3">{title}</h2>
                  <p class="lead fs-4 mb-3 mb-xl-5 ">{content}</p>
                  <button type="button" class="btn bsb-btn-2xl btn-outline-primary rounded-pill">Know More</button>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <img class="rounded w-100" loading="lazy" src={image} alt=""/>
            </div>
          </div>
        </div>
      </section>
    );
}


