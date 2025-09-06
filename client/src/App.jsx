import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import StudentDetailPage from './pages/StudentDetailPage';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider>
      <div className='min-h-screen bg-gray-50 dark:bg-chalk-900 transition-colors duration-300'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/s/:id' element={<StudentDetailPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
