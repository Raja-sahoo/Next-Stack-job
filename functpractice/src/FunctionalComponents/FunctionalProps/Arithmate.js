import react, {useState} from 'react';

function Arithmate (){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleNum=(event)=>{
       setNum1({
        num1:event.target.value,
       })
    }



    return(
        <>
        <h1>new arithmate solution</h1>
        <input type="number" value={num1} onChange={handleNum}/>

        <h1>name: {num1}</h1>
        </>
    )
}
export default Arithmate;