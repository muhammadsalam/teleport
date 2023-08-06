import { FolderItem } from "entities/folder-item";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar";

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
