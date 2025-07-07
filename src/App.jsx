import { Routes, Route } from 'react-router-dom';
import AuthProvider from './Provider/AuthProvider';
import AdminDashboard from './Pages/AdminDashboard';
import UserDashboard from './Pages/UserDashborad';
import LoginPage from './Pages/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import AdminRoute from './Components/AdminRoute';


function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/user/*"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
      
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
        </Routes>
    </AuthProvider>
  );
}

export default App;
