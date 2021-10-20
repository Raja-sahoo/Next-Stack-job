import react, {useState} from 'react';

function Arithmate (){
    const [num1, setNum1] = useState();
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
        <input type="text" placeholder="enter number 1" value={num1} onChange={handleNum}/><br/>

        <h1>name: {num1}</h1>
        </>
    )
}
export default Arithmate;