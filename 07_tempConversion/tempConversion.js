function roundToTenth(_num) {
  return Math.round(_num * 10) / 10;
}

const convertToCelsius = function(_tempF) {
  // °C == (°F − 32) * 5/9 
  return roundToTenth((_tempF - 32) * 5 / 9);
};

const convertToFahrenheit = function(_tempC) {
  // 	°F == °C * 9/5 + 32
  return roundToTenth(_tempC * 9 / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
