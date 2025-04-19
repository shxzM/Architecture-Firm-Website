import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import ContactUs from './screens/ContactUs';
import About from './screens/About'; 
import Projects from './screens/Projects';
import Services from './screens/Services';
import Gallery from './screens/Gallery';
import ScrollToTop from './components/ScrolltoTop';
import Error404 from './screens/Error404';
import Admin from './screens/Admin';
import AdminDashboard from './screens/AdminDashboard';
import ProtectedRoute from "./components/ProtectedRoute"
import ProjectUpdate from './screens/ProjectUpdate';
import ProjectDetails from './screens/ProjectDetails';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop/>
    <Routes>
      <Route path="*" element={<Error404/>} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
      <Route path="/Admin-Dashboard" element={
          <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      <Route path="/update/:projectId" element={
        <ProtectedRoute>
          <ProjectUpdate />
        </ProtectedRoute>} />

      

    </Routes>
  </BrowserRouter>
);
