import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import CompanyFront from './CompanyFront.js';
import UploadSection from './UploadSection';
import ContactUs from './ContactUs';
import Location from './Location';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  0;
  render() {
    return (
      <Grid container justify="center">
        <Paper style={{ padding: '20px' }}>
          <Grid item xs={8} style={{ maxWidth: '1500px' }}>
            <Header />
            <CompanyFront />
            <UploadSection />
            <Grid container style={{ padding: '30px 0' }}>
              <ContactUs />
              <Location />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default App;
