const Airtable = require("airtable");
const env = require("env2");
env("./config.env");

if (!process.env.API_KEY) {
  throw new Error("Environment variable DATABASE_URL must be set");
}

const apiKey = process.env.API_KEY;

const loginCall = (loginData, cb) => {
  let result = [];
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
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
          result.push(record.get("Name"));
          result.push(record.get("ID"));
        });
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
        }
        return cb(result);
      }
    );
};

// loginCall({ email: "bbb@bbb.com", pin: "5198" });

module.exports = loginCall;
