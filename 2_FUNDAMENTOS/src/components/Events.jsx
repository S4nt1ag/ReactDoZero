export const Events = () => {

    const handleMyEvent = () => {
        console.log('foi')
    };

    const renderSomething = (x) => {

        if (x) {
            return <h1>Renderizando isso</h1>;
        } else {
            return <h1>Também posso ser renderizado</h1>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('também foi')}>clique aqui também</button>
                <button onClick={() => {
                    if (true) {
                        console.log('isso não deveria existir');
                    }
                }}>Não precisa clicar aqui</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}