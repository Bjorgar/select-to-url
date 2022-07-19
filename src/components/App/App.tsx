import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from '../Navigation';

const FormPage = lazy(() => import('@src/pages/FormPage'));
const UrlTestPage = lazy(() => import('@src/pages/UrlTestPage'));

export default function App(): JSX.Element {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="form-page" element={<FormPage />} />
        <Route path="query-page" element={<UrlTestPage />} />
      </Routes>
    </Suspense>

  );
}
