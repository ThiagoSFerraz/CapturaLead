import "../../styles/pages/secondPage.css";
import roleta from "./image/Roleta.png";
import promo from "./image/Promo.png";
import heart from "./image/Heart.png";
import cifrao from "./image/Cifrao.png";
import BenefitsSlider from "../../components/BenefitsSlider/BenefitsSlider";

export default function SecondPage() {
  return (
    <section>
      <h1>Benefícios</h1>
      <div className="container">
        <div className="benefits">
          <div className="esquerda">
            <div className="card">
              <img src={roleta} alt="" />
              <div>
                <h2>CONVERTE TRÁFEGO</h2>
                <p>
                  Capture as visitas do seu site convertendo para inscritos e
                  aumente a geração de contatos de uma forma que você nunca viu
                </p>
              </div>
            </div>
            <div className="card">
              <img src={heart} alt="" />
              <div>
                <h2>ENGAJAMENTO DO SEU PÚBLICO</h2>
                <p>
                  Melhore a experiencia de compra do seu cliente. Todo mundo
                  gosta de recompensa, ofereça prêmios que estimulam
                  comprovadamente o engajamento.
                </p>
              </div>
            </div>
          </div>
          <div className="direita">
            <div className="card">
              <img src={promo} alt="" />
              <div>
                <h2>NEWSLETTERS E PROMOÇÕES DIRECIONADAS</h2>
                <p>
                  Suas promoções serão direcionadas a um novo público, muito
                  mais engajado e disposto a comprar
                </p>
              </div>
            </div>
            <div className="card">
              <img src={cifrao} alt="" />
              <div>
                <h2>MUITO MAIS VENDAS</h2>
                <p>
                  Mais base de leads te trará mais divulgação de campanhas e com
                  isso muito mais vendas! comprovadamente o engajamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BenefitsSlider />
    </section>
  );
}
