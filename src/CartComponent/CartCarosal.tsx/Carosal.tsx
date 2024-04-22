import images from "../../images/images";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./carosal.less";
const Carosal = () => {
  return (
    <div>
      <Carousel className="carosal" showThumbs={false}>
        <div>
          <img src={images.image2} />
        </div>
        <div>
          <img src={images.image3} />
        </div>
        <div>
          <img src={images.image4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Carosal;
