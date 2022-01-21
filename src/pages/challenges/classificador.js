import React, {useState, useEffect} from 'react';

export default function Classificador(){
    const [dadosClassificador, setDadosClassificador] = useState([]);
    const [dados, setDados] = useState();

    const classificador = () =>{
        const nome = document.getElementById('nomeUser').value;
        if (window.confirm("É você?")) {
            if (window.confirm("Você é o responsavel?")) {
                setDadosClassificador(oldArray => [...oldArray, {
                    souEu: true,
                    responsavel: true,
                    nome: nome
                }]);
            }else{
                setDadosClassificador(oldArray => [...oldArray, {
                    souEu: true,
                    responsavel: false,
                    nome: nome
                }]);
            }
        }else{
            if (window.confirm("É o responsavel?")) {
                setDadosClassificador(oldArray => [...oldArray, {
                    souEu: false,
                    responsavel: true,
                    nome: nome
                }]);
            }else{
                setDadosClassificador(oldArray => [...oldArray, {
                    souEu: false,
                    responsavel: false,
                    nome: nome
                }]);
            }
        }
    }

    useEffect(() => {

        const organizeRespon = dadosClassificador.sort(
            function(a,b){
               return (a.responsavel === b.responsavel) ? 0 : a.responsavel ? -1 : 1
            }
        );
        const organizeSouEu = organizeRespon.sort(
            function(a,b){
               return (a.souEu === b.souEu) ? 0 : a.souEu ? -1 : 1
            }
        );
        setDados(organizeSouEu)
        
    },[dadosClassificador]);
    return(
        <>
            <div className='classificador'>
                <h1>Classificador.js</h1>
                <label htmlFor="nome">Nome: </label><br/>
                <input type="text" id="nomeUser" name="nome"/>
                <button onClick={()=>{classificador()}}>Adicionar</button>
                 
                <div style={{marginTop: 15}}>
                    {dados 
                    ?  dados.map((n, index) =>{
                            return(
                                <div style={{backgroundColor: '#EDEDED', padding: '15px 15px 0 15px'}}  key={index}>
                                    <p style={{margin: 0}}> 
                                        {n.nome} | 
                                        {n.responsavel ? ' É Responsavel |' : ' Não responsavel |'} 
                                        {n.souEu ? ' Sou eu' : ''} 
                                    </p>
                                    <br/>
                                </div>
                            )
                        })
                    : ''}
                </div> 
                
            </div>
        </>
    )
}