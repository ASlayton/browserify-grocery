const departmentOutputDiv = document.getElementById('departments');

const domString = (departments) => {
  let domStrang = '';
  departments.forEach((department) => {
    domStrang += `<div class="col-sm-3 department">`;
    domStrang +=   `<h3 class="hide">${department.name}</h3>`;
    domStrang +=   `<img class="department-image" src="${department.img}">`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printToDom = (departments) => {
  departmentOutputDiv.innerHTML = domString(departments);
};

module.exports = printToDom;
