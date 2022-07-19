import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function Navigation(): JSX.Element {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link
        underline="none"
        component={RouterLink}
        to="query-page"
      >
        <Button variant="outlined">Query Page</Button>
      </Link>
      <Link
        underline="none"
        component={RouterLink}
        to="form-page"
      >
        <Button variant="outlined">Form Page</Button>
      </Link>
    </Stack>
  );
}
