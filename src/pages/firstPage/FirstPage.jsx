import "../../styles/pages/firstPage.css";
import laptop from "./images/laptop.png";

export default function FirstPage() {
  return (
    <section>
      <h2 id="responsive">
        Tem cliente entrando no seu site, mas não se cadastra pra receber
        novidades? Vamos mudar isso!!!
      </h2>
      <div className="containerImage">
        <div className="laptop">
          <img src={laptop} alt="" />
        </div>
        <div className="info">
          <h2>
            Tem cliente entrando no seu site, mas não se cadastra pra receber
            novidades? Vamos mudar isso!!!
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore
          </p>
          <button>teste grátis.</button>
        </div>
      </div>
    </section>
  );
}
