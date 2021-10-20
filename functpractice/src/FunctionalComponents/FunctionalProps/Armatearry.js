import react, {useState} from 'react';

function Armatearry (){
    const [calc, setCalc] = useState({num1: 0, num2: 0, result:0})

    const handleNum=(event)=>{
       setCalc({
           ...calc,
        num1:event.target.value
       })
    }
// for num 2 we did in paralal line

const handleSum=()=>{
setCalc({
    ...calc,
    result: parseInt(calc.num1) + parseInt(calc.num2),
})
}
const handleDiff=()=>{
    setCalc({
        ...calc,
        result: parseInt(calc.num1) - parseInt(calc.num2),
    })
    }
    const handleMul=()=>{
        setCalc({
            ...calc,
            result: parseInt(calc.num1) * parseInt(calc.num2),
        })
        }
        const handleDiv=()=>{
            setCalc({
                ...calc,
                result: parseInt(calc.num1) / parseInt(calc.num2),
            })
            }
            const handleCls=()=>{
                setCalc({
                    ...calc,
                    result: 0,
                    num1: 0,
                    num2: 0
                })
                }




    return(
        <>
            <h1>Functional Arithmate Solution</h1>
            <input type="number" value={calc.num1} onChange={handleNum} /><br/><br/>
            <input type="number" value={calc.num2} onChange={(event)=>{
            setCalc({
                ...calc,
                num2:event.target.value
            })
            }} /><br/><br/>
            <button onClick={handleSum}>Sum</button>
            <button onClick={handleDiff}>Diff</button>
            <button onClick={handleMul}>Mul</button>
            <button onClick={handleDiv}>Div</button>
            <button onClick={handleCls}>CLS</button>

            <p>Number One: <span style={{fontSize: 30, fontWeight: "bold"}}>{calc.num1}</span>, &amp; Number Two: <span style={{fontSize: 30, fontWeight: "bold"}}>{calc.num2}</span>, </p>
            <h3>Result: {calc.result}</h3>
        </>
    )
}
export default Armatearry;