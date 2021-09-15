import classes from "./Symptoms.module.scss";

const Symptoms = () => {
  return (
    <div className={classes["symptoms-container"]}>
      <div className={classes["image-container"]}>
        <img src="assets/symptoms.png" alt="symptoms" />
        <p className={classes["symptom-1"]}>FEVER</p>
        <p className={classes["symptom-2"]}>DYPSNOEA</p>
        <p className={classes["symptom-3"]}>HEADACHE</p>
        <p className={classes["symptom-4"]}>RUNNY NOSE</p>
        <p className={classes["symptom-5"]}>THROAT PAIN</p>
        <p className={classes["symptom-6"]}>SHAKING CHILLS</p>
      </div>
      <div className={classes["main-content"]}>
        <h1>Symptoms of Coronavirus</h1>
        <p>
          The COVID-19 virus spreads primarily through droplets of saliva or
          dischange from the nose when an infected person coughs or sneezes, so
          it's important that you also practice respiratory etiquette (by
          coughing into a flexed elbow).
        </p>
        <ul>
          <li>
            <img src="assets/logo.png" alt="virus" />
            <p>Fever</p>
          </li>
          <li>
            <img src="assets/logo.png" alt="virus" />
            <p>Headache</p>
          </li>
          <li>
            <img src="assets/logo.png" alt="virus" />
            <p>Dypsnoea</p>
          </li>
          <li>
            <img src="assets/logo.png" alt="virus" />
            <p>Runny nose</p>
          </li>
          <li>
            <img src="assets/logo.png" alt="virus" />
            <p>Throat pain</p>
          </li>
          <li>
            <img src="assets/logo.png" alt="virus" />
            <p>Shaking chills</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Symptoms;
