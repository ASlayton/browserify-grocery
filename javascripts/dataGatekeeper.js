const loadDepartments = require('./departments');
const departmentDom = require('./departmentDom');

const whenDepartmentsLoad = function () {
  const data = JSON.parse(this.responseText).departments;
  departmentDom(data);
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
