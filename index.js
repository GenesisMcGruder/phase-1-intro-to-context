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

 function wagesWorkedOnDate(employee, date) {
    const pay = employee.find(event => event.pay === payPerHour)
    console.log("pay", pay)
    const hoursWorked = hoursWorkedOnDate(employee, date)
    return pay * hoursWorked
 }
 

