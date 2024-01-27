import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import dotenv from 'dotenv';

import Layout from './pages/Layout';
import AnnouncementsPage from './pages/AnnouncementsPage';
import FilesPage from './pages/FilesPage';
import LoginPage from './pages/LoginPage';
import MembersPage from './pages/MembersPage';
import NotFoundPage from './pages/NotFoundPage';
import SpacesPage from './pages/SpacesPage';
import TicketsPage from './pages/TicketsPage';
import DashboardPage from './pages/DashboardPage';
import CalendarPage from './pages/CalendarPage';
import FinancesPage from './pages/FinancesPage';
import MessageCenterPage from './pages/MessageCenterPage';
import SettingsPage from './pages/SettingsPage';

import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
            <Route path="announcements" element={<AnnouncementsPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="files" element={<FilesPage />} />
            <Route path="finances" element={<FinancesPage />} />
            <Route path="members" element={<MembersPage />} />
            <Route path="message center" element={<MessageCenterPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="spaces" element={<SpacesPage />} />
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
