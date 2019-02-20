(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

const fetchAllEmployees = () => {
  fetch("http://localhost:8088/employees?_expand=department&_expand=computer").then(employee => employee.json()).then(parsedEmployees => {
    console.log(parsedEmployees);
    parsedEmployees.forEach(employee => {
      document.querySelector("#employeeContainer").innerHTML += `<article class="employee">
<header class="employee_name">
    <h1>${employee.name}</h1>
</header>
<section class="employee_department">${employee.department.name}</section>
<section class="employee_computer">${employee.computer.brand} ${employee.computer.model}</section>
</article>`;
    });
  });
};

fetchAllEmployees(); // <article class="employee">
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLE1BQU0saUJBQWlCLEdBQUcsTUFBTTtBQUM1QixFQUFBLEtBQUssQ0FBQyxxRUFBRCxDQUFMLENBQ0ssSUFETCxDQUNVLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQUR0QixFQUVLLElBRkwsQ0FFVSxlQUFlLElBQUk7QUFDckIsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQSxJQUFBLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixRQUFRLElBQUk7QUFDaEMsTUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixvQkFBdkIsRUFBNkMsU0FBN0MsSUFDSzs7VUFFWCxRQUFRLENBQUMsSUFBSzs7dUNBRWUsUUFBUSxDQUFDLFVBQVQsQ0FBb0IsSUFBSztxQ0FDM0IsUUFBUSxDQUFDLFFBQVQsQ0FBa0IsS0FBTSxJQUFHLFFBQVEsQ0FBQyxRQUFULENBQWtCLEtBQU07V0FOeEU7QUFRSCxLQVREO0FBV0gsR0FmTDtBQWlCSCxDQWxCRDs7QUFxQkEsaUJBQWlCLEcsQ0FHakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG5jb25zdCBmZXRjaEFsbEVtcGxveWVlcyA9ICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2VtcGxveWVlcz9fZXhwYW5kPWRlcGFydG1lbnQmX2V4cGFuZD1jb21wdXRlclwiKVxyXG4gICAgICAgIC50aGVuKGVtcGxveWVlID0+IGVtcGxveWVlLmpzb24oKSlcclxuICAgICAgICAudGhlbihwYXJzZWRFbXBsb3llZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWRFbXBsb3llZXMpXHJcbiAgICAgICAgICAgIHBhcnNlZEVtcGxveWVlcy5mb3JFYWNoKGVtcGxveWVlID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZWVDb250YWluZXJcIikuaW5uZXJIVE1MICs9XHJcbiAgICAgICAgICAgICAgICAgICAgYDxhcnRpY2xlIGNsYXNzPVwiZW1wbG95ZWVcIj5cclxuPGhlYWRlciBjbGFzcz1cImVtcGxveWVlX25hbWVcIj5cclxuICAgIDxoMT4ke2VtcGxveWVlLm5hbWV9PC9oMT5cclxuPC9oZWFkZXI+XHJcbjxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfZGVwYXJ0bWVudFwiPiR7ZW1wbG95ZWUuZGVwYXJ0bWVudC5uYW1lfTwvc2VjdGlvbj5cclxuPHNlY3Rpb24gY2xhc3M9XCJlbXBsb3llZV9jb21wdXRlclwiPiR7ZW1wbG95ZWUuY29tcHV0ZXIuYnJhbmR9ICR7ZW1wbG95ZWUuY29tcHV0ZXIubW9kZWx9PC9zZWN0aW9uPlxyXG48L2FydGljbGU+YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgKVxyXG59XHJcblxyXG5cclxuZmV0Y2hBbGxFbXBsb3llZXMoKVxyXG5cclxuXHJcbi8vIDxhcnRpY2xlIGNsYXNzPVwiZW1wbG95ZWVcIj5cclxuLy8gICAgIDxoZWFkZXIgY2xhc3M9XCJlbXBsb3llZV9fbmFtZVwiPlxyXG4vLyAgICAgICAgIDxoMT5SYWludSBJdHR5Y2hlcmlhaDwvaDE+XHJcbi8vICAgICA8L2hlYWRlcj5cclxuLy8gICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2RlcGFydG1lbnRcIj5cclxuLy8gICAgICAgICBXb3JrcyBpbiB0aGUgSVQgZGVwYXJ0bWVudFxyXG4vLyAgICAgPC9zZWN0aW9uPlxyXG4vLyAgICAgPHNlY3Rpb24gY2xhc3M9XCJlbXBsb3llZV9fY29tcHV0ZXJcIj5cclxuLy8gICAgICAgICBDdXJyZW50bHkgdXNpbmcgYSAyMDE1IE1hY0Jvb2sgUHJvXHJcbi8vICAgICA8L3NlY3Rpb24+XHJcbi8vIDwvYXJ0aWNsZT5cclxuXHJcbiJdfQ==
