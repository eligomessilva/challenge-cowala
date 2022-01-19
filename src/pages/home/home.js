import React, {useState, useEffect} from 'react';
import axios from "axios";

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

    return(
        <>
            <label htmlFor="nome">Nome: </label>
            <input type="text" id="nome" name="nome" defaultValue={dados.nome}/>
            <br/>
            <label htmlFor="profissao">Profissão: </label>
            <input type="text" id="profissao" name="profissao" defaultValue={dados.profissao}/>
            <br/>
            <label htmlFor="celular">Celular: </label>
            <input type="number" id="celular" name="celular" defaultValue={dados.celular}/>
            <br/>
            <label htmlFor="ip">Meu IP: </label>
            <input type="text" id="ip" name="ip" defaultValue={dados.ip} disabled/>
            <br/>
            <button onClick={()=>{verifyInputs()}}>SALVAR</button>
            <button onClick={()=>{verifyDelete()}}>LIMPAR</button>
            <button onClick={()=>{rastrerIp()}}>ENCONTRAR IP</button>
        </>
    )
}