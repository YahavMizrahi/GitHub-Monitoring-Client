import axios from "axios";

const server = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://github-monitoring-server.herokuapp.com",
});

const tokenScreenshot = "4RZW7ST-QGK42RJ-MCAQS8Y-26M15H3";
const screenshot_api = axios.create({
  baseURL: `https://shot.screenshotapi.net/screenshot?token=${tokenScreenshot}&url=`,
});

export { server, screenshot_api };
