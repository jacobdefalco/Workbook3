"use strict";
let d = new Date(868866180000);
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let weekDay = d.getDay();
console.log(
  `${month}/${day}/${year} and that is a ${d.toLocaleDateString("en-US", {
    weekday: "long",
  })}`
);
