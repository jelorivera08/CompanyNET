import React from 'react';
import Typography from '@material-ui/core/Typography';
import loc from './images/loc.JPG';
import Grid from '@material-ui/core/Grid';

const Location = () => (
  <Grid
    item
    xs={6}
    style={{
      height: '300px',
      textAlign: 'left'
    }}
  >
    <Typography variant="h6">Our Location</Typography>
    <img alt="location_pic" src={loc} />
  </Grid>
);

export default Location;
