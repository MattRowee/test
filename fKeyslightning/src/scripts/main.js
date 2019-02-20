
const fetchAllEmployees = () => {
    fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
        .then(employee => employee.json())
        .then(parsedEmployees => {
            console.log(parsedEmployees)
            parsedEmployees.forEach(employee => {
                document.querySelector("#employeeContainer").innerHTML +=
                    `<article class="employee">
<header class="employee_name">
    <h1>${employee.name}</h1>
</header>
<section class="employee_department">${employee.department.name}</section>
<section class="employee_computer">${employee.computer.brand} ${employee.computer.model}</section>
</article>`
            }
            )
        }
        )
}


fetchAllEmployees()


// <article class="employee">
//     <header class="employee__name">
//         <h1>Rainu Ittycheriah</h1>
//     </header>
//     <section class="employee__department">
//         Works in the IT department
//     </section>
//     <section class="employee__computer">
//         Currently using a 2015 MacBook Pro
//     </section>
// </article>

