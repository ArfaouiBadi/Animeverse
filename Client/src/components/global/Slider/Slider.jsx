import { Slides } from "../../../data/data";
import { Carousel } from "./Carousel";



function Slider() {
  return (
    <div className="Slider">
      <Carousel data={Slides} />
    </div>
  );
}

export default Slider;

