import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './scss/index.scss';
import Details from './pages/Details';
import Claims from './pages/Claims';
import Payments from './pages/Payments';
import Documents from './pages/Documents';
import PageLayout from './pages/PageLayout';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/claimsDashboard" replace />} />
      <Route element={<PageLayout />}>
        <Route path="/claimsDashboard" element={<Dashboard />} />
      </Route>
      <Route Component={Details}>
        <Route path="/claims" index Component={Claims} />
        <Route path="/payment" Component={Payments} />
        <Route path="/documents" Component={Documents} />
      </Route>
    </Routes>
  );
};

export default App;
