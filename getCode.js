const Airtable = require("airtable");

const env = require("env2");
env("./config.env");

if (!process.env.API_KEY || !process.env.BASE_KEY) {
  throw new Error("Error API_KEY and BASE_KEY should be set");
}

const apiKey = process.env.API_KEY;
const base = new Airtable({ apiKey }).base(process.env.BASE_KEY);

//fetches the first (and only) row from the Code Airtable, dedined by an id
const getCode = cb => {
  base("code").find("recL71yXmBgS44Ub0", function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    cb(null, record.fields);
  });
};

module.exports = getCode;
