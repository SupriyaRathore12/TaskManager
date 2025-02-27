import { createSlice } from "@reduxjs/toolkit";

// Local storage se user fetch karna (error handling ke sath)
const getUserFromLocalStorage = () => {
    try {
        const user = localStorage.getItem("userInfo");
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error("Error fetching user from localStorage:", error);
        return null;
    }
};

const initialState = {
    user: getUserFromLocalStorage(),
    isSidebarOpen: false,
};

console.log("Initial Redux State:", initialState);  // Debugging ke liye

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload;
            try {
                localStorage.setItem("userInfo", JSON.stringify(action.payload));
            } catch (error) {
                console.error("Error saving user to localStorage:", error);
            }
            console.log("User Updated in Redux:", state.user); // Debugging ke liye
        },
        logout: (state) => {
            state.user = null;
            try {
                localStorage.removeItem("userInfo");
            } catch (error) {
                console.error("Error removing user from localStorage:", error);
            }
            console.log("User Logged Out"); // Debugging ke liye
        },
        setOpenSidebar: (state, action) => {
            state.isSidebarOpen = action.payload ?? !state.isSidebarOpen;  // Toggle bhi ho sakta hai
        },
    },
});

export const { setCredentials, logout, setOpenSidebar } = authSlice.actions;
export default authSlice.reducer;
