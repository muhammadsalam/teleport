import { Auth } from "pages/auth";
import { Register } from "pages/register";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
