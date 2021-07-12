import React from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";

export default function Formulario() {
    const classes = useStyles();
  
    return( <>
      <IndexNavbar color='1' />
      <React.Fragment>
        <main className="navbar_separation">
          {/* Hero unit */}
          
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </footer>
        {/* End footer */}
        </React.Fragment>
    </>
    );
}