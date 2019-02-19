const Airtable = require("airtable");

const env = require("env2");
env("./config.env");

if (!process.env.API_KEY || !process.env.BASE_KEY) {
  throw new Error("Error API_KEY and BASE_KEY should be set");
}

const apiKey = process.env.API_KEY;
const base = new Airtable({ apiKey }).base(process.env.BASE_KEY);

const getDriver = (verifyData, cb) => {
  const { id } = verifyData;
  base("Drivers")
    .select({
      filterByFormula: `({ID} = "${id}")`,
      maxRecords: 1,
      view: "Grid view"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        if (records.length === 0) {
          console.log("no one here!!");
          return cb(null, false);
        }
        const { Name: name } = records[0].fields;
        console.log("here in the getDriver", { name });
        return cb(null, { name });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
        }
      }
    );
};

module.exports = getDriver;
