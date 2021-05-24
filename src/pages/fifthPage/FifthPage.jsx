import ClientSlider from '../../components/ClientSlider/ClientSlider'
import '../../styles/pages/fifthPage.css'


export default function FifthPage(){
    return(
        <div>
            <div className="container5">
                <h1>Nossos clientes</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing </p>
                <div className="clientSliderContainer">
                    <ClientSlider />
                </div>
                
            </div>
        </div>
    )
}