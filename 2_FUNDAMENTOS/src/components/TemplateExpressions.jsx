import { MyComponent } from "./MyComponent";

export const TemplateExpressions = () => {

    const data = {
        name: {
            firstName: 'Gabriel',
            lastName: 'Santiago',
        },
        age: 18,
        job: 'programmer',
    };

    return (
        <div>
            <h1>Olá {data.name.lastName}, tudo bem?</h1>
            <p>Você tem {data.age} anos e trabalha como {data.job}</p>
            <MyComponent/>
        </div>
    )
}