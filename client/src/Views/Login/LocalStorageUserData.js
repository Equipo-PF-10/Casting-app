export const saveData = (type, id, email, password) => {
    localStorage.setItem("logged", "true");
    localStorage.setItem("id", id);
    localStorage.setItem("type", type);
    localStorage.setItem("user", email);
    localStorage.setItem("password", password);
};

export const handleLogout = () => {
    localStorage.setItem("logged", "false");
    localStorage.removeItem("type");
    localStorage.removeItem("id");
    localStorage.removeItem("user");
    localStorage.removeItem("password");
};