const loadDepartments = require('./departments');
const dom = require('./dom');

const whenDepartmentsLoad = function () {
  const data = JSON.parse(this.responseText).departments;
  dom(data);
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
