import "../../styles/pages/thirdPage.css";
import Rocket from "./images/Rocket.png";

export default function ThirdPage() {
  return (
    <div>
      <div className="container3">
        <div className="firstStrip">
          <div>Visita</div>
          <div>Gameficação</div>
          <div>Conversão</div>
        </div>
        <img src={Rocket} alt="" />
        <div className="secondStrip">
          <div>Maior base</div>
          <div>Mais vendas</div>
        </div>
      </div>
    </div>
  );
}
