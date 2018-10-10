import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';

class UploadSection extends React.Component {
  state = {
    files: [],
    uploading: false
  };

  onDragOver = e => {
    let event = e;
    event.stopPropagation();
  };

  onDragOver = e => {
    let event = e;
    event.stopPropagation();
    event.preventDefault();
  };

  onFileDrop = e => {
    let event = e;
    let { files } = this.state;
    let collectedFiles = [];
    event.stopPropagation();
    event.preventDefault();

    collectedFiles = Object.entries(e.dataTransfer.files).map(
      file => file[1].name
    );

    if (files.length >= 5 || collectedFiles.length >= 5) {
      return alert('can not add anymore than 5 files');
    }

    this.setState({
      files: [...files, ...collectedFiles]
    });
  };

  handleUploadClick = () => {
    const { files } = this.state;

    if (files.length <= 0) {
      return alert('no files to upload yet!');
    }

    this.setState({
      uploading: true
    });
  };

  render() {
    const { files, uploading } = this.state;
    return (
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid
            style={{
              border: '1px dashed  black',
              height: '100px',
              borderRadius: '10px',
              width: '100%',
              textAlign: 'center'
            }}
            onDragEnter={this.onDragEnter}
            onDragOver={this.onDragOver}
            onDrop={this.onFileDrop}
            item
            xs={8}
          >
            {files.length === 0 ? (
              <Typography
                style={{
                  verticalAlign: 'middle',
                  lineHeight: '100px'
                }}
              >
                Drag and Drop to upload files
              </Typography>
            ) : uploading ? (
              'wait...'
            ) : (
              files.map(file => <div>{file}</div>)
            )}
          </Grid>

          {!uploading ? (
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <Button
                color="primary"
                variant="contained"
                style={{ margin: '10px' }}
                onClick={this.handleUploadClick}
              >
                Start Upload
              </Button>
            </Grid>
          ) : (
            <Grid item xs={6} style={{ textAlign: 'center' }}>
              <LinearProgress style={{ margin: '50px' }} />
            </Grid>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default UploadSection;
