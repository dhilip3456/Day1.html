let employees = [];

// Add employee
function addEmp(id, name, salary = true) {
    employees.push({ id, name, salary });
    console.log("Employee added:", employees);
}

// Update employee
function updateEmp(id, newDetail) {
    const emp = employees.find(e => e.id === id);
    if (emp) {
        Object.assign(emp, newDetail);
        console.log("Employee updated:", employees);
    } else {
        console.log("Employee not found");
    }
}

// Remove employee
function removeEmp(id) {
    const index = employees.findIndex(e => e.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee removed:", employees);
    } else {
        console.log("Employee not found");
    }
}

// Calculate total salary
function totalSalary() {
    const total = employees.reduce((sum, emp) => {
        return sum + (typeof emp.salary === "number" ? emp.salary : 0);
    }, 0);
    console.log("Total salary is:", total);
}

// Sample usage
addEmp(1, "Dhilip", 20000);
addEmp(2, "Kishore", 30000);
addEmp(3, "Dhilipkumar", 400);

updateEmp(3, { name: "Kumar" });

removeEmp(1);

totalSalary();
