import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import StoriesList from './components/StoriesList';
import StoryDetail from './components/StoryDetail';
import SearchResults from './components/SearchResults';
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreateStory from './components/CreateStory';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/signin" />;
};

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { user, signOut } = useAuth();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header toggleSidebar={toggleSidebar} user={user} signOut={signOut} />
        <div className="flex-grow flex">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <main className="flex-grow p-6 md:p-8 max-w-4xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<PrivateRoute><StoriesList /></PrivateRoute>} />
              <Route path="/story/:id" element={<PrivateRoute><StoryDetail /></PrivateRoute>} />
              <Route path="/search" element={<PrivateRoute><SearchResults /></PrivateRoute>} />
              <Route path="/create" element={<PrivateRoute><CreateStory /></PrivateRoute>} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;