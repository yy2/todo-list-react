import React from "react";
import "/src/styles/styles.css";

const d = new Date();
const day = d.getDay();
// const options = {weekday: "long"};

const DAYS_OF_THE_WEEK = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY"  
];

export default () => {
    return <div className="date">{DAYS_OF_THE_WEEK[day-1]}</div>;
}
