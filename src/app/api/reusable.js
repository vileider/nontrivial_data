
import { parse } from "@fast-csv/parse";

export default async function  BuildJsonDataFromCsv (dataStream)  {
    const extractCsv = () => {
      let records = [];
      return new Promise((resolve) => {
        const stream = parse({ headers: true })
          .on("error", (error) => console.error(error))
          .on("data", (row) => {
            records.push(row);
          })
          .on("end", () =>  resolve(records));
        stream.write(dataStream);
        stream.end();
      });
    };
  
   async function  asyncCall() {
      const temp = await extractCsv();
      if (temp.length > 0) {console.log("succedfuly sent!");}
      return JSON.stringify(temp);
    }
    return asyncCall();
  }