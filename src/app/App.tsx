import { Auth, Recovery, Register } from "pages/access";
import { InternalServerError, NotFoundError } from "pages/error";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={"чё по кайфу"} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recovery" element={<Recovery />} />

                <Route path="*" element={<NotFoundError />} />
                <Route path="500" element={<InternalServerError />} />
            </Routes>
        </div>
    );
}

export default App;
