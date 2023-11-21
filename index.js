// Your code here
 function createEmployeeRecord(employee) {
    return{
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    } 
 }

 function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
 }

 function createTimeInEvent(employee,timeIn) {
    let [date, hour] = timeIn.split(" ")
    let timeObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date 
    }
    employee.timeInEvents.push(timeObj);
    return employee;
 }

 function createTimeOutEvent(employee, timeOut) {
    let [date, hour] = timeOut.split(" ")
    let timeObj2 = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
    employee.timeOutEvents.push(timeObj2);
    return employee
 }


 function hoursWorkedOnDate(employee, date) {
    //access timein and timeout on a specific date for an employee and calculate the time worked
    const workDayStart = employee.timeInEvents.find(event => event.date === date)
    const workDateEnd = employee.timeOutEvents.find(event => event.date === date)
    const timeIn = workDayStart.hour
    const timeOut = workDateEnd.hour
   return (timeOut/100) - (timeIn/100);
 }

 function wagesEarnedOnDate(employee, date) {
    const pay = employee.payPerHour
    const hoursWorked = hoursWorkedOnDate(employee, date)
    return pay * hoursWorked
 }

 function allWagesFor(employee) {
   const datesWorked = employee.timeInEvents.map(timeInObj => timeInObj.date)
   const payedTime = datesWorked.reduce((acc, date) => {
      return acc + wagesEarnedOnDate(employee, date)
   },0)
   return payedTime
 }

 function calculatePayroll(employees) {
   const allDates = employees.map(employee => {
     const dates = employee.timeInEvents.map(timeInEvent => timeInEvent.date);
     return dates;
   });
 
   const allPayedDates = allDates.reduce((acc, dates, index) => {
     return acc + dates.reduce((total, date) => {
       return total + wagesEarnedOnDate(employees[index], date);
     }, 0);
   }, 0);
 
   return allPayedDates;
 }
