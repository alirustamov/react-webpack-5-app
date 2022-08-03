import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/pages/Main';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';

export const AppRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
