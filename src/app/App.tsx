import { Auth } from "pages/auth";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </div>
    );
}

export default App;
