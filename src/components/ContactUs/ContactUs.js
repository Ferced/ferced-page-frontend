import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { MessageSharp, PhoneSharp, EmailSharp, AccountCircle } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {
  Row,
  Col,
} from "reactstrap";
import "./ContactUs.css"


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function ContactUs() {
  const classes = useStyles();
  return (
    <div style={{ paddingBottom: "60px" }}>
      <div style={{ background: "white", height: "50%", textAlign: "center", marginTop: "50px", marginBottom: "2px" }}>
        <Typography variant="h2" gutterBottom style={{ color: "Black" }}>
          Contactanos
          </Typography>
        <Typography variant="body1" gutterBottom>
          Contanos tu idea y la desarrollamos
           </Typography>
      </div>
      <Col className="justify-content-md-center" style={{ margin: "0%" }}>
        <Row className="justify-content-md-center">
          <div className={classes.margin} style={{ marginRight: "8%" }}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField style={{ width: "130%" }} id="input-with-icon-grid" label="Nombre" />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <PhoneSharp />
              </Grid>
              <Grid item>
                <TextField style={{ width: "130%" }} id="input-with-icon-grid" label="Telefono" />
              </Grid>
            </Grid>
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <div className={classes.margin} style={{ marginRight: "8%" }}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <EmailSharp />
              </Grid>
              <Grid item>
                <TextField style={{ width: "130%" }} id="input-with-icon-grid" label="Email" />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <MessageSharp />
              </Grid>
              <Grid item>
                <TextField style={{ width: "130%" }} id="input-with-icon-grid" label="Mensaje" />
              </Grid>
            </Grid>
          </div>
        </Row>
      </Col>
      <br></br>
      <Button
        variant="contained"
        className={classes.button}
        style={{ background: "black", color: "white" }}
      >
      Enviar
      </Button>
    </div>
  );
}

