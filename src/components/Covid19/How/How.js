import classes from "./How.module.scss";

const How = () => {
  return (
    <div className={classes["how-container"]}>
      <h1 className={classes.question}>How coronavirus spread</h1>
      <p className={classes.overview}>
        The coronavirus - known as COVID-19 - spreads from person to person in
        close proximity, similar to other respiratory illnesses, such as the
        flu.
      </p>
      <div className={classes["main-content"]}>
        <div className={classes.case}>
          <img src="assets/Cough.png" alt="cough" />
          <p>Air transmission by cough or sneeze</p>
          <p>
            In droplet form, the coronavirus is airborne for a few seconds after
            someone sneezes or coughs.
          </p>
        </div>
        <div className={classes.case}>
          <img src="assets/contaminatedobjects.png" alt="cough" />
          <p>Contaminated objects</p>
          <p>
            Touch own mouth, nose, or possibly their eyes, but this is not
            thought to be the main way the virus spreads.
          </p>
        </div>
        <div className={classes.case}>
          <img src="assets/humancontact.png" alt="cough" />
          <p>Transmission among humans</p>
          <p>
            Between people who are in close contact with one another within
            about 6 feet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default How;
