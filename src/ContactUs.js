import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ContactUs = () => (
  <Grid
    item
    xs={6}
    style={{
      height: '300px',
      padding: '0px 50px'
    }}
  >
    <Typography variant="h6">Contact Us</Typography>
    <input
      placeholder="Email Address"
      style={{ margin: '5px 0px', width: '100%' }}
      type="text"
    />
    <input
      style={{ margin: '5px 0px', padding: '60px 0px', width: '100%' }}
      type="text"
    />
    <input style={{ margin: '5px 0px', padding: '60px 0px' }} type="checkbox" />
    <span style={{ margin: '0px 10px', fontFamily: 'sans-serif' }}>
      I Agree
    </span>
    <div style={{ textAlign: 'right', width: '100%' }}>
      <Button onClick={() => alert('EMAIL SENT!')} variant="contained">
        Submit
      </Button>
    </div>
  </Grid>
);

export default ContactUs;
