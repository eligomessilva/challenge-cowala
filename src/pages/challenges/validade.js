export default function Validade(){

    function deleteLetra(string) {
        var numsStr = string.replace(/[^0-9]/g,'');
        return parseInt(numsStr);
    }

    function teste() {
        var data = new Date(document.getElementById('data').value)
        var days = document.getElementById('diasPassados').value;

        const date = new Date(data);
        date.setDate(date.getDate() + (Number(deleteLetra(days)) + 1));

        if(new Date(date) > Date.now()){
            alert('Valido!')
        }else{
            alert('Expirado!')
        }
    };
    
    return(
        <>
            <div className='validade'>
                <h1>Validade.js</h1>

                <label htmlFor="data">Data: </label>
                <input type="date" id="data" name="data"/>

                <label htmlFor="diasPassados">Dias passados: </label>
                <input type="text" id="diasPassados" name="diasPassados"/>

                <button onClick={()=>{teste()}}>Teste</button>
            </div>
        </>
    )
}