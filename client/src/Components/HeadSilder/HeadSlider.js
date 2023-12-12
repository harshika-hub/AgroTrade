import banner1 from "../../Images/Banner1.jpeg"
import banner2 from "../../Images/Banner2.jpeg"
import banner3 from "../../Images/Banner3.jpeg"
import banner5 from "../../Images/banner5.jpeg"
import banner6 from "../../Images/Banner6.jpeg"
import Carousel from 'react-bootstrap/Carousel';


function HeadSlider() {
  return (
    <Carousel fade className="mb-5" >
      <Carousel.Item>
      <img src={banner3} className="w-100" alt=""/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner2} className="w-100" alt=""/>
        
      </Carousel.Item>
  

      <Carousel.Item>
      <img src={banner1} className="w-100" alt=""/>
  
      </Carousel.Item>


      <Carousel.Item>
      <img src={banner5} className="w-100" alt=""/>
    
      </Carousel.Item>

      <Carousel.Item>
      <img src={banner6} className="w-100" alt=""/>
      
      </Carousel.Item>
    </Carousel>
  );
}
export default HeadSlider;