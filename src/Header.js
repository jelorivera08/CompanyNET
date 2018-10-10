import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <Grid item xs={12}>
    <Grid container justify="flex-end">
      <Grid item style={{ padding: '0px 10px', cursor: 'pointer' }}>
        <Typography>Home</Typography>
      </Grid>
      <Grid item style={{ padding: '0px 10px', cursor: 'pointer' }}>
        <Typography> About us </Typography>
      </Grid>
      <Grid item style={{ padding: '0px 10px', cursor: 'pointer' }}>
        <Typography> Contact</Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default Header;
