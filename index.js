const { Keystone } = require("@keystonejs/keystone");
const { NextApp } = require("@keystonejs/app-next");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const initialiseData = require("./initialData");
const setupKeystoneLists = require("./keystoneLists");

const { KnexAdapter } = require("@keystonejs/adapter-knex");

const PROJECT_NAME = "hurumap-covid19";

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new KnexAdapter({ dropDatabase: true }),
  onConnect: initialiseData
});

setupKeystoneLists(keystone);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      // If enabled, the path of the Admin UI app will be set to /.
      enableDefaultRoute: true,
      authStrategy: keystone.createAuthStrategy({
        type: PasswordAuthStrategy,
        list: "User"
      })
    }),
    new NextApp({ dir: __dirname })
  ]
};
