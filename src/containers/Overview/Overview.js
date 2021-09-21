import React from "react";
import CountrySelector from "../../components/Covid19/CountrySelector/CountrySelector";
import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Overview.module.scss";
import OverViewBoard from "../../components/Covid19/OverViewBoard/OverViewBoard";
import LineChart from "../../components/Covid19/LineChart/LineChart";
import Map from "../../components/Covid19/Map/Map";

const initialState = {
  Confirmed: 0,
  Deaths: 0,
  Recovered: 0,
};
export default function Overview() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryID, setSelectedCountryID] = useState("vn");
  const [casesStatus, setCasesStatus] = useState(initialState);
  const [dataForChart, setDataForChart] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    (async () => {
      if (selectedCountryID) {
        const mapData = await import(
          `@highcharts/map-collection/countries/${selectedCountryID}/${selectedCountryID}-all.geo.json`
        );
        setMapData(mapData);
      }
    })();
  }, [selectedCountryID]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await axios.get(
        `https://api.covid19api.com/total/country/${selectedCountryID}`
      );
      setLoading(false);
      setCasesStatus(response.data[response.data.length - 1]);
      setDataForChart(response.data);
    })();
  }, [selectedCountryID]);
  const onChangeHandler = (country) => {
    setSelectedCountryID(country.toLowerCase());
  };
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/countries")
      .then((response) => setCountries(response.data));
  }, []);
  return (
    <div className={classes["overview__container"]}>
      <div className={classes.summary}>
        <div>
          <h1 className={classes["overview__title"]}>Covid-19 Tracker</h1>
          <h2 className={classes.date}>
            Last update: {new Date().toDateString()}
          </h2>
          <CountrySelector
            countries={countries}
            onChange={onChangeHandler}
            value={selectedCountryID}
          />
        </div>
        <OverViewBoard {...casesStatus} loading={isloading} />
      </div>
      {dataForChart.length > 0 ? (
        <div className={classes.charts}>
          <LineChart data={dataForChart} />
          <Map mapData={mapData} />
        </div>
      ) : (
        <h1 className={classes["update"]}>It's not update yet</h1>
      )}
    </div>
  );
}
