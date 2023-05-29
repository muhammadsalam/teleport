import Button from "./components/Button/Button";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Button.Hug variant="secondary">Button</Button.Hug>
                <Button.Hug>Button</Button.Hug>
                <Button.Default>Создать страницу</Button.Default>
                <Button.Primary>Изменить</Button.Primary>
                <Button.Secondary>Открыть</Button.Secondary>
                <Button.SecondaryTwo>Создать папку</Button.SecondaryTwo>
                <Button.Tertiary>Создать папку</Button.Tertiary>
                <Button.Link>77.83.173.18</Button.Link>
            </header>
        </div>
    );
}

export default App;
