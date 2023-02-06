function isLeapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        // console.log("This is leap year")
        return true;
    }
    else{
        // console.log("This is not leap year")
        return false;
    }
}
  const isMyYearLeapYear = isLeapYear(1940);
  console.log("This is My Leap Year", isMyYearLeapYear);
  const isHerYearLeapYear =  isLeapYear(2020);
  console.log("This is Her Leap Year",    isHerYearLeapYear);