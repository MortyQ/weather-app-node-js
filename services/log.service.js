import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (error) => {
  console.log(`${chalk.bgRed(" Error ")}: ${error}`);
};

export const printSuccess = (message) => {
  console.log(`${chalk.bgGreen(" Success ")}: ${message}`);
};

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" Help ")}
    without parameters - display weather
    -h - display help
    -s [CITY] - display weather for city
    -t [API_KEY] - set token
    `
  );
};

export const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(" WEATHER ")} Погода у місті ${res.name}
    ${icon}  ${res.weather[0].description}
    Температура: ${res.main.temp}°C (від ${res.main.temp_min}°C до ${
      res.main.temp_max
    }°C) відчувається як ${res.main.feels_like}°C
    Вологість повітря: ${res.main.humidity}%
    Швидкість вітру: ${res.wind.speed} м/с
    `
  );
};
