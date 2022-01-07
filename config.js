var config = {};

config.url = process.env.my_template;
config.port = process.env.my_port || 8080;
config.app_name = process.env.HEROKU_APP_NAME || 'testee'

module.exports = config;
