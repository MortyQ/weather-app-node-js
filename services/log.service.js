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
    Температура: ${res.main.temp}°C відчувається як ${res.main.feels_like}°C
    Мінімальна температура: ${res.main.temp_min}°C
    Максимальна температура: ${res.main.temp_max}°C
    Вологість повітря: ${res.main.humidity}%
    Швидкість вітру: ${res.wind.speed} м/с
    `
  );
};
