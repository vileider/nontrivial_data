import { NextResponse } from "next/server";
const fs = require("fs");
const { parse } = require("csv-parse");

const goldStream = fs.createReadStream("@../../public/data/gold_monthly.csv");

// this function is called when the route is called from the server
export async function GET() {
  // Initialize the parser
  const parser = parse({
    delimiter: ":",
  });

  const extractCsv = () => {
    const records = [];
   return new Promise( (resolve) => {
    goldStream
      .pipe(
        parser.on("readable", function () {
          let record;
          while ((record = parser.read()) !== null) {
            records.push(record);
          }
        })
      )
      .on("error", function (error) {
        console.log(error.message);
      })
      .on("end", function () {
        console.log("finished");
        resolve(records);
      })}
   )
    
  };

  async function asyncCall() {
    const temp = await extractCsv();
    return temp;
  }

  
  const res = await asyncCall();
  
console.log(res);

  return NextResponse.json({res});
}
