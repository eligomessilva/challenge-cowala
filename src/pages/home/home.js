import React, {useState, useEffect} from 'react';
import axios from "axios";
import Header from '../../components/header/header';
import "./home.css";

export default function Home(){
  
    const [dados, setDados] = useState({
        nome: null,
        profissao: null,
        celular: null,
        ip: null
    });
    const salvar = () =>{
        const nomeVal = document.getElementById('nome').value;
        const profissaoVal = document.getElementById('profissao').value;
        const celularVal = document.getElementById('celular').value;
        const ipVal = document.getElementById('ip').value;

        localStorage.setItem('nome', nomeVal);
        localStorage.setItem('profissao', profissaoVal);
        localStorage.setItem('celular', celularVal);
        localStorage.setItem('ip', ipVal);

        setDados({
            nome: nomeVal,
            profissao: profissaoVal,
            celular: celularVal,
            ip: ipVal
        })

        return alert('Dados salvos com sucesso!');
    }

    const limpar = () =>{
        document.getElementById('nome').value = '';
        document.getElementById('profissao').value = '';
        document.getElementById('celular').value = '';
        document.getElementById('ip').value = '';

        localStorage.removeItem('nome');
        localStorage.removeItem('profissao');
        localStorage.removeItem('celular');
        localStorage.removeItem('ip');
    }
    const rastrerIp = () =>{
        axios.get('https://ip-fast.com/api/ip/')
        .then(res => {
            document.getElementById('ip').value = res.data;
        });
    }
    useEffect(() => {
        const nomeVal = localStorage.getItem('nome');
        const profissaoVal = localStorage.getItem('profissao');
        const celularVal = localStorage.getItem('celular');
        const ipVal = localStorage.getItem('ip');

        setDados({
            nome: nomeVal,
            profissao: profissaoVal,
            celular: celularVal,
            ip: ipVal,
        })
    },[]);

    const verifyInputs = () =>{
        const nomeVal = document.getElementById('nome').value;
        const profissaoVal = document.getElementById('profissao').value;
        const celularVal = document.getElementById('celular').value;
        const ipVal = document.getElementById('ip').value;

        if(nomeVal === ''){
            alert('Preencha o campo "Nome"!')
        }else if(profissaoVal === ''){
            alert('Preencha o campo "Profissão"!')
        }else if(celularVal === ''){
            alert('Preencha o campo "Celular"!')
        }else if(ipVal === ''){
            alert('Encontre o seu IP!')
        }else{
            salvar();
        }
    }
    const verifyDelete = () =>{
        if (window.confirm("Você realmente deseja excluir seus dados?")) {
            limpar();
        }
        else{
            alert("Acão cancelada!");
        }
    }
    function criaMascara(mascaraInput) {
        const maximoInput = document.getElementById(`celular`).maxLength;
        let valorInput = document.getElementById(`celular`).value;
        let valorSemPonto = document.getElementById(`celular`).value.replace(/([^0-9])+/g, "");

        const mascaras = {
            Celular: valorInput.replace(/[^\d]/g, "").replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        };

        valorInput.length === maximoInput ? document.getElementById(`celular`).value = mascaras['Celular'] : document.getElementById(`celular`).value = valorSemPonto;
    };
    return(
        <> 
           <Header/>
           <div className='bodyLayout'>
               <div className='card'>
                   <div className='cardBody'>
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" id="nome" name="nome" defaultValue={dados.nome}/>
                        <br/>
                        
                        <div className='secondLine'>
                            <div className='divProfissao'>
                                <label htmlFor="profissao">Profissão: </label><br/>
                                <input type="text" id="profissao" name="profissao" defaultValue={dados.profissao}/>
                            </div>
                            <div className='divCelular'>
                                <label  htmlFor="celular">Celular: </label><br/>
                                <input maxLength="11" onInput={()=>{criaMascara('celular')}} id="celular" name="celular" defaultValue={dados.celular}/>
                            </div>
                        </div>
                        
                        <br/>
                    
                        <div className='divIP'>
                            <div className='divInputIP'>
                                <label htmlFor="ip">Meu IP: </label><br/>
                                <input type="text" id="ip" name="ip" defaultValue={dados.ip} disabled/>
                            </div>
                            <div className='divBtnIP'>
                                <button className='encontrar' onClick={()=>{rastrerIp()}}>ENCONTRAR IP</button>
                            </div>
                        </div>
                        
                        <div className='divSalLim'>
                            <button className='salvar' onClick={()=>{verifyInputs()}}>SALVAR</button>
                            <button className='limpar' onClick={()=>{verifyDelete()}}>LIMPAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )   
}