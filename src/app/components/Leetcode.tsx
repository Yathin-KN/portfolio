"use client";

interface MonthsData {
  [key: string]: { [key: string]: number };
}

interface LeetCodeData {
  [key: string]: number;
}

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
  }
  


import { useState } from "react";
import { data } from "./../utils/check";
import { leetcodeData } from "./../utils/leetcode_submission_json";
import Cell from "./Cell";
const Leetcode = () => {
  const [months, setMonths] = useState<MonthsData>(data);
  console.log(months);
  return (
    <div className="flex  flex-wrap w-full justify-center">
       {Object.keys(months).map(_month => (
        <div key={_month} className="p-4 mix-blend-difference z-[60]">
          {_month}
          <div className="grid grid-cols-5 w-fit gap-2 mt-3">
            {Object.keys(months[_month]).map(timestamp => (
            
              <div key={timestamp}>
                <Cell num={leetcodeData[timestamp] !== undefined ? leetcodeData[timestamp] : months[_month][timestamp]}/>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leetcode;
