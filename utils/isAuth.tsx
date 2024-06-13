import { jwtDecode } from "jwt-decode";

export const getRoleFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded?.roles[0];
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
