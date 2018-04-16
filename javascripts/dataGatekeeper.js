const loadDepartments = require('./departments');
const loadItems = require('./items');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenDepartmentsLoad = function () {
  const departmentsdata = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsdata);
  departmentDom(departmentsdata);
};

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  console.log('items data: ', itemsData);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, errorFunction);
  loadItems(whenItemsLoad, errorFunction);
};

module.exports = {
  initializer,
};
