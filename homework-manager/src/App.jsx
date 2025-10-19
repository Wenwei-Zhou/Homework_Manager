import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { routes } from "./Routes/Routes.js";
import { UserProgressContextProvider } from "./Context/UserProgressContext.jsx";
import Login from "./Account/Login.jsx";
import Signup from "./Account/Signup.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <BrowserRouter>
        <Login />
        <Signup />
        <Routes>
          {routes.map((route) => {
            const Component = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </UserProgressContextProvider>
  );
}

export default App;
