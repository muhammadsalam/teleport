import Dropdown from "./components/Input/Dropdown";

function App() {
    return (
        <div className="App">
            <Dropdown
                options={["hh.ru", "google.com", "moomoo.moo"]}
                label="Домен"
                placeholder="Выберите домен"
            />
        </div>
    );
}

export default App;
