const data = require('./data');
const itemsDom = require('./itemsDom');

const departmentContainerDiv = document.getElementById('departments');
const departmentCards = document.getElementsByClassName('department');

const showDepartmentName = (e) => {
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];
  departmentName.classList.remove('hide');
  departmentImg.classList.add('greyOut');
};

const hideDepartmentName = (e) => {
  const departmentImg = e.target.children[1];
  const departmentName = e.target.children[0];
  departmentName.classList.add('hide');
  departmentImg.classList.remove('greyOut');
};

const addDepartmentEvents = () => {
  for (let i = 0; i < departmentCards.length; i++) {
    departmentCards[i].addEventListener('mouseenter',showDepartmentName);
    departmentCards[i].addEventListener('mouseleave', hideDepartmentName);
    departmentCards[i].addEventListener('click', showItems);
  };
};

const showItems = (e) => {
  const departmentId = e.target.parentNode.children[0].dataset.departmentId;
  console.log('data-id: ', departmentId);
  const selectedItems = data.getItemsByDepartment(departmentId);
  console.log('selected items: ', selectedItems);
  departmentContainerDiv.innerHTML = '';
  itemsDom(selectedItems);
};

module.exports = {
  addDepartmentEvents,
};
