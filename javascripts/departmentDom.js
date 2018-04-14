const events = require('./events');
const departmentOutputDiv = document.getElementById('departments');

const domString = (departments) => {
  let domStrang = '';
  departments.forEach((department) => {
    domStrang += `<div class="col-sm-3 department">`;
    domStrang +=   `<h3 class="department-title hide" data-department-id="${department.id}">${department.name}</h3>`;
    domStrang +=   `<img class="department-image" src="${department.img}">`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printDepartmentToDom = (departments) => {
  departmentOutputDiv.innerHTML = domString(departments);
  events.addDepartmentEvents();
};

module.exports = printDepartmentToDom;
