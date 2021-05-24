import BenefitsSliderData from "./BenefitsSliderData";

export default function Dots(props) {
  return (
    <div className="allDots">
      {BenefitsSliderData.map((slide, index) => (
        <span
          key={index}
          className={`${props.activeIndex === index ? "dot activeDot" : "dot"}`}
          onClick={(event) => props.onClick((event.target.value = index))}
        ></span>
      ))}
    </div>
  );
}
