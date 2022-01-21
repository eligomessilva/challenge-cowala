import Classificador from "./classificador";
import Faxina from "./faxina";
import Fibonnaci from "./fibonacci";
import Validade from "./validade";
import Header from "../../components/header/header";
import './index.css';


export default function Challenges(){  
    return(
        <>
            <Header/>
            <div className='bodyLayout'>
               <div className='card'>
                    <div className="cardBodyDesafios">
                        <div className="col-1">
                            <div className="row-1">
                                <Fibonnaci/>
                            </div>
                            <div className="row-2">
                                
                                <Classificador/>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row-3">
                                <Validade/>
                            </div>
                            <div className="row-4">
                                <Faxina/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}