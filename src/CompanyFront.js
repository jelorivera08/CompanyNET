import React from 'react';
import Grid from '@material-ui/core/Grid';

const CompanyHeader = () => (
  <Grid item xs={12}>
    <Grid container justify="center">
      <Grid item xs={12}>
        <span style={{ fontFamily: 'Arvo', fontSize: '25px' }}>CompanyNET</span>
      </Grid>
      <Grid item xs={12}>
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#0C6CD4',
            borderRadius: '10px',
            textAlign: 'center',
            verticalAlign: 'middle',
            lineHeight: '200px',
            margin: '20px 0px'
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'Charmonman',
              fontSize: '25px'
            }}
          >
            Upload any file, any time.
          </span>
        </div>
      </Grid>
    </Grid>
  </Grid>
);

export default CompanyHeader;
