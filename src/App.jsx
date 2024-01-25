import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout';
import AnnouncementsPage from './pages/AnnouncementsPage';
import FilesPage from './pages/FilesPage';
import LoginPage from './pages/LoginPage';
import MembersPage from './pages/MembersPage';
import NotFoundPage from './pages/NotFoundPage';
import SpacePage from './pages/SpacesPage';
import TicketsPage from './pages/TicketsPage';

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
            <Route path="announcements" element={<AnnouncementsPage />} />
            <Route path="files" element={<FilesPage />} />
            <Route path="members" element={<MembersPage />} />
            <Route path="spaces" element={<SpacePage />} />
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
