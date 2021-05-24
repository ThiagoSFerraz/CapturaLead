import notebook1 from "./images/Notebook1.png";
import notebook2 from "./images/Notebook2.png";
import check from './images/check.png'
import notCheck from './images/notCheck.png'
import "../../styles/pages/fourthPage.css";

export default function FourthPage() {
  return (
    <div>
      <h1>Compare os resultados de Alta Performance da CapturaLead</h1>
      <div className="container4">
        <div className="vsFirst">
          <h2>Sistema de captação do mercado - Baixa conversão</h2>
          <img src={notebook1} alt="" />
          <div className="list">
              <div className="listRow">
                  <img src={notCheck} alt="" />
                  <p className="listText">Visual poluído que afasta seus clientes.</p>
              </div>
              <div className="listRow">
                  <img src={notCheck} alt="" />
                  <p className="listText">Muitos anúncios.</p>
              </div>
              <div className="listRow">
                  <img src={notCheck} alt="" />
                  <p className="listText">Pop-ups que passam inseguirança.</p>
              </div>
              <div className="listRow">
                  <img src={notCheck} alt="" />
                  <p className="listText">Baixa conversão (1% á 4%).</p>
              </div>
          </div>
        </div>
        <div className="versus">
          <span />
            <div>VS</div>
          <span />
        </div>
        <div className="vsSecond">
          <h2>Captura Lead - Alta conversão</h2>
          <img className="notebook2" src={notebook2} alt="" />
          <div className="list">
            <div className="listRow">
                  <img src={check} alt="" />
                  <p className="listText">Visual limpo e agradável</p>
              </div>
              <div className="listRow">
                  <img src={check} alt="" />
                  <p className="listText">Gamefica - Técnicas de jogos para obter e-mails.</p>
              </div>
              <div className="listRow">
                  <img src={check} alt="" />
                  <p className="listText">Adaptado ao design do seu site.</p>
              </div>
              <div className="listRow">
                  <img src={check} alt="" />
                  <p className="listText">Conversão de visitas para inscritos 10% á 30%.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
