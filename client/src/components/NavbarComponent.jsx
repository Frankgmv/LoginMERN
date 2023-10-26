import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { AuthProvider } from "../context/AuthContext";
import HomePage from "../pages/HomePage";
import TaskPage from "../pages/TaskPage";
import TaskFormPage from "../pages/TaskFormPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoutes from "../ProtectedRoutes";
import { TaskProvider } from "../context/TaskContext";


const NavbarComponent = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>

            {/* publicar */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* privadas */}
            <Route element={<ProtectedRoutes />} >
              <Route path="/task" element={<TaskPage />} />
              <Route path="/add-task" element={<TaskFormPage />} />
              <Route path="/task/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default NavbarComponent
