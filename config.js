const env = process.env;

export default {
  port: env.PORT || 3000,
  host: env.HOST || 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}`
  }
};
