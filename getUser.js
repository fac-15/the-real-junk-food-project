const Airtable = require("airtable");

const env = require("env2");
env("./config.env");

if (!process.env.API_KEY || !process.env.BASE_KEY) {
  throw new Error("Error API_KEY and BASE_KEY should be set");
}

const apiKey = process.env.API_KEY;
const base = new Airtable({ apiKey }).base(process.env.BASE_KEY);

const getUser = (loginData, cb) => {
  const { email, pin, userRole } = loginData;
  base(userRole)
    .select({
      filterByFormula: `(AND({pin} = "${pin}", {email} = "${email}"))`,
      maxRecords: 1,
      view: "Grid view"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        console.log("heres records", records);
        if (records.length === 0 || !records[0].fields.ID) {
          console.log("into the return of false");
          return cb(null, false);
        }
        const { Name: name, ID: id } = records[0].fields;
        return cb(null, { name, id, userRole });
        o;
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
