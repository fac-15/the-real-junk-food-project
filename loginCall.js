const Airtable = require("airtable");
const env = require("env2");
env("./config.env");

if (!process.env.API_KEY) {
  throw new Error("Environment variable DATABASE_URL must be set");
}

const apiKey = process.env.API_KEY;

const loginCall = (req, res) => {
    var base = new Airtable({ apiKey }).base("appyRQ1dyAAvZyIPI");

    base("Drivers")
      .select({
        // Selecting the first 3 records in Grid view:
        // filterByFormula: `(AND({pin} = "${thisPin}", {email} = "${thisEmail}"))`,
        maxRecords: 3,
        view: "Grid view"
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function(record) {
            console.log("Retrieved", record.get("Name"));
          });
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );    
}

loginCall();

// module.exports = loginCall;
