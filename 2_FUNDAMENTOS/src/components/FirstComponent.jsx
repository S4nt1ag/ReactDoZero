import { MyComponent } from "./MyComponent"

export const FirstComponent = () => {

    return (
        <div>
            {/* algum comentario */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
        </div>
    )

}