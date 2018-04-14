const xhr = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', ifFileLoads);
  myRequest.addEventListener('error', ifFileFails);
  myRequest.open('GET', '/db/departments.json');
  myRequest.send();
};

function ifFileLoads () {
  const myData = JSON.parse(this.responseText);
  console.log(myData.departments);
};

function ifFileFails () {
  console.error('I have failed, my friend.');
};

module.exports = {
  xhr,
};
