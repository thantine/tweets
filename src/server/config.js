import config from "../config/config";

export default {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
  ...config
}