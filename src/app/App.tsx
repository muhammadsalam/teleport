import { Auth } from "pages/auth";
import { NotFoundError } from "pages/error";
import { InternalServerError } from "pages/error/500";
import { Recovery } from "pages/recovery";
import { Register } from "pages/register";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="*" element={<NotFoundError />} />
                <Route path="500" element={<InternalServerError />} />
                <Route path="/" element={"чё по кайфу"} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recovery" element={<Recovery />} />
            </Routes>
        </div>
    );
}

export default App;
