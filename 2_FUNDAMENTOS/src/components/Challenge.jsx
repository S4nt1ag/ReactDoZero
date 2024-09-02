export const Challenge = () => {

    const xx = 1;
    const yy = 5;

    const handleSumNumbers = () => {
        console.log(xx + yy)
    };



    return (
        <div>
            <div>
                <h1>O valor de x é {xx} e de y é {yy}</h1>
            </div>
            <div>
                <button onClick={handleSumNumbers}>some os valores acima</button>
            </div>
        </div>
    )

}