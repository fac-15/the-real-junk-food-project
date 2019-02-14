const Airtable = require("airtable");
const env = require("env2");
env("./config.env");

if (!process.env.API_KEY) {
  throw new Error("Environment variable DATABASE_URL must be set");
}

const apiKey = process.env.API_KEY;

const getUser = (loginData, cb) => {
  var base = new Airtable({ apiKey }).base("appyRQ1dyAAvZyIPI");
  const { email, pin } = loginData;
  base("Drivers")
    .select({
      filterByFormula: `(AND({pin} = "${pin}", {email} = "${email}"))`,
      maxRecords: 1,
      view: "Grid view"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        const { Name, ID } = records[0].fields;
        return cb({ Name, ID });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
        }
      }
    );
};

module.exports = getUser;
