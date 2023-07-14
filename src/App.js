import { Sidebar } from "Component/";
import FolderItem from "./components/FolderItem/FolderItem";
import EditPopup from "./components/Popup/EditPopup";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <FolderItem count={150} text="Получи 15 материалов бесплатно" />
        </div>
    );
}

export default App;
