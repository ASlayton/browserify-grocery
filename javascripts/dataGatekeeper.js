const loadDepartments = require('./departments');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenDepartmentsLoad = function () {
  const departmentsdata = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsdata);
  departmentDom(departmentsdata);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, errorFunction);
};

module.exports = {
  initializer,
};
