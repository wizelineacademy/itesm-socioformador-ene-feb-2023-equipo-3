import { defineConfig } from "cypress";

export default defineConfig({
  //experimentalModifyObstructiveThirdPartyCode: true,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
