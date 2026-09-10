import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const Admin = import.meta.env.DEV && window.location.pathname === '/admin'
  ? lazy(() => import('./admin/Admin'))
  : null;

const Root = Admin ? (
  <Suspense fallback={<p>Carregando editor...</p>}><Admin /></Suspense>
) : <App />;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {Root}
  </StrictMode>,
);
