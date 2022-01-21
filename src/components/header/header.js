import "./header.css";
import logo from '../../assets/Cowala Software (1).png';
import coala from '../../assets/Logo.png';

export default function Header(){
    return(
        <>
            <div className="container">
                <div className="containerLogo">
                    <img src={coala} alt="logo cowala" className="coala"/>
                    <img src={logo} alt="logo cowala software" className="logo"/>
                </div>
                <div className="opcoes">
                    <button className='btnHome' onClick={()=>{window.location.replace("/")}}>DESAFIO FRONT-END</button>
                    <button className='btnDesafios' onClick={()=>{window.location.replace("/desafios")}}>ALGORITMOS</button>
                </div>
            </div>
        </>      
    )
}



