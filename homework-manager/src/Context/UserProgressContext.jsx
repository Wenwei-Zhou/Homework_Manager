import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: "",
    showLogin: () => {},
    hideLogin: () => {},
    showSignup: () => {},
    hideSignup: () => {},
});

export function UserProgressContextProvider({children}) {
    const [userProgress, setUserProgress] = useState("");

    function showLogin() {
        setUserProgress("login");
    }

    function hideLogin() {
        setUserProgress("");
    }

    function showSignup() {
        setUserProgress("signup");
    }

    function hideSignup() {
        setUserProgress("");
    }

    const userProgressCtx = {
        progress: userProgress,
        showLogin,
        hideLogin,
        showSignup,
        hideSignup,
    };

    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    )
}

export default UserProgressContext;