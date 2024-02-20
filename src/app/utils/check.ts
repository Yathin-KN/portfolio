interface MonthsData {
    [key: string]: { [key: string]: number };
  }
  
  function generateYearTimestamps(year: number): MonthsData {
    const timestamps: MonthsData = {};
    for (let month = 0; month < 12; month++) {
      timestamps[(month + 1).toString()] = {};
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      for (let day = 1; day <= daysInMonth; day++) {
        const timestamp = new Date(Date.UTC(year, month, day, 0, 0, 0)).getTime() / 1000;
        timestamps[(month + 1).toString()][timestamp.toString()] = 0;
      }
    }
    
    return timestamps;
  }
  
  const year: number = 2023;
  export const data: MonthsData = generateYearTimestamps(year);
  