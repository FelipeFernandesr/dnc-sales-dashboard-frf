import { Box, Container } from "@mui/material";
import Grid from '@mui/material/Grid';  
import { BannerImage } from '@/components';

function Login() {

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}>
            <Container maxWidth="sm">
              <h1>LOGIN</h1>
            </Container>
          </Grid>
          <Grid sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>

  )
}

export default Login