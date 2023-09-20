import { NextResponse } from "next/server";
const fs = require("fs");
const goldStream = fs.readFileSync("@../../public/data/gold_monthly.csv");
import BuildJsonDataFromCsv from "@/app/api/reusable";


export async function GET() {
 
const res = await BuildJsonDataFromCsv(goldStream);
  return NextResponse.json(res);
}
