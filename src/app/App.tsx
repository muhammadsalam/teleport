import { Auth, Recovery, Register } from "pages/access";
import { InternalServerError, NotFoundError } from "pages/error";
import { Home } from "pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="pages" />
                    <Route path="balance" />
                    <Route path="domains" />
                    <Route path="affiliate" />
                    <Route path="materials" />
                    <Route path="settings" />
                </Route>
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
