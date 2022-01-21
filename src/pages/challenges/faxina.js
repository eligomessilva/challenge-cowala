export default function Faxina(){

    var test = {
        test1: null,
        test2: 'algo',
        test3: 3,
        test4: ''
    }   
    function limpar(obj) {
        alert('Verifique o console!')
        console.log('Objeto com lixo:', test)
        for (var name in obj) {
            if (obj[name] === null || obj[name] === undefined || obj[name] === '') {
                delete obj[name];
            }
        }
        return obj
    }
    return(
        <>
            <div className='faxina'>
                <h1>Faxina.js</h1> 
                <button onClick={()=>{limpar(test); console.log("Objeto limpo:",test)}}>Limpar</button>
            </div>
        </>
    )
}