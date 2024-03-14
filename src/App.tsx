import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from '@shared/Navbar'

import HomePage from '@pages/Home'
import SigninPage from '@pages/Signin'
import CheckListPage from '@pages/checklist'
import { AuthContextProvider } from './contexts/Auth'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/checklist" element={<CheckListPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
