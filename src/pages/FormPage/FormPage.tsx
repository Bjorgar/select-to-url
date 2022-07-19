import { lazy, Suspense } from 'react';

import Header from './components/Header';
import MainBody from './components/MainBody';
import Wrapper from './components/Wrapper';

const Footer = lazy(() => import('./components/Footer'));

export default function FormPage() {
  return (
    <>
      <Wrapper isFixed>
        <Header />
      </Wrapper>
      <Wrapper>
        <MainBody />
        <Suspense>
          <Footer />
        </Suspense>
      </Wrapper>
    </>
  );
}
