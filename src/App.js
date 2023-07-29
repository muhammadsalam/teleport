import { Sidebar } from "./components";
import FolderItem from "./components/FolderItem/FolderItem";
import { Header } from "./components/Header";

function App() {
    return (
        <div className="App">
            <div className="grid-block">
                <Sidebar />
                <Header />
                <div className="main">
                    <FolderItem text="TEXT" count={12} />
                </div>

            </div>
        </div>
    );
}

export default App;
