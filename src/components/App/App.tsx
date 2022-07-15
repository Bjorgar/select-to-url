import { ToastContainer } from 'react-toastify';
import Box from '@mui/material/Box';

import { useGetAllData } from '../../hooks/useGetAllData';
import BrandSelect from '../BrandSelect/BrandSelect';
import Loader from '../Loader';
import ServiceSelect from '../ServiceSelect/ServiceSelect';

import 'react-toastify/dist/ReactToastify.css';

export default function App(): JSX.Element {
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
