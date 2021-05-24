import BenefitsSliderData from "./BenefitsSliderData";

export default function BenefitsSliderContent(props) {
  return (
    <div>
      {BenefitsSliderData.map((slide, index) => (
        <div
          key={index}
          className={
            index === props.activeIndex ? "slides activeSlide" : "inactive"
          }
        >
          <img src={slide.url} alt="" />
          <div>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
