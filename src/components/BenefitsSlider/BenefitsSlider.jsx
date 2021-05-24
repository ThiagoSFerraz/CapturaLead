import BenefitsSliderContent from "./BenefitsSliderContent";
import Dots from "./Dots";
import { useState } from "react";
import "../../styles/components/benefitsSlider.css";

export default function BenefitsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="sliderContainer">
      <BenefitsSliderContent activeIndex={activeIndex} />
      <Dots
        activeIndex={activeIndex}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}
