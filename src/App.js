import Input from "./components/Input/Input";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Input condition={0} placeholder="Text" label="Input" />
            </header>
        </div>
    );
}

export default App;
