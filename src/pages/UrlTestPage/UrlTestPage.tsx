import { ToastContainer } from 'react-toastify';
import Box from '@mui/material/Box';

import BrandSelect from './components/BrandSelect';
import Loader from './components/Loader';
import ServiceSelect from './components/ServiceSelect';
import { useGetAllData } from './hooks/useGetAllData';

import 'react-toastify/dist/ReactToastify.css';

export default function UrlTestPage(): JSX.Element {
  const { isLoading, selections } = useGetAllData();
  return (
    <>
      <ToastContainer />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
      >
        { isLoading && <Loader /> }
        { selections && (
          <>
            <BrandSelect list={selections.brands} />
            <ServiceSelect list={selections.services} />
          </>
        )}
      </Box>
    </>
  );
}
