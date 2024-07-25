import React from 'react';
import classes from './MainPageFooter.module.css';

function MainPageFooter() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footercontainer}>
        <div className={classes.footercolumn}>
          <h3>Contact Us</h3>
          <p>123 Main St.</p>
          <p>Anytown, USA 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@company.com</p>
        </div>
        <div className={classes.footercolumn}>
          <h3>Products</h3>
          <ul>
            <li><a href="/equipments">Sell Equipment</a></li>
            <li><a href="/crop_recommendation">Crop Prediction</a></li>
            <li><a href="/ImagePrediction">Image Prediction</a></li>
            <li><a href="/fertilizer">Predict Fertiliser</a></li>
          </ul>
        </div>
        <div className={classes.footercolumn}>
          <h3>Company Details</h3>
          <p><a href="/aboutUs">About Us</a></p>
        </div>
      </div>
      <div className={classes.footercopy}>
        <p>&copy; 2023 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default MainPageFooter;
