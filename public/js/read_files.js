// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert("The File APIs are not fully supported in this browser.");
}

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  let output = [];
  let listOfSetupArray = [];
  $("#list2").html("");
  for (var i = 0, f; (f = files[i]); i++) {
    readFile(f, function(e) {
      // use result in callback...
      const setup = new Setup(e.target.result);
      setup.showSetupByTabs();
      delete setup._setupData;
      listOfSetupArray.push(setup);
      console.log("inside readfile");
      // console.log(listOfSetupArray);
      if (listOfSetupArray.length == i) compareSetups(listOfSetupArray);
    });
  }
}

function readFile(file, onLoadCallback) {
  var reader = new FileReader();
  reader.onload = onLoadCallback;
  reader.readAsText(file);
  // console.log("function readfile");
}

function compareSetups(setupsArray) {
  console.log("inside compare setups with the array");
  console.log(setupsArray);
  const setupsArraySeparated = separateSetupsIntoAnArray(setupsArray);
  const differencesArray = checkArrayDifferences(setupsArraySeparated);
  console.log(setupsArraySeparated);
  console.log("differencesArray");
  console.log(differencesArray);
}

function separateSetupsIntoAnArray(setupsArray) {
  let setupFillingArray = [];
  for (let i = 0; i < setupsArray.length; i++) {
    setupFillingArray.push(compareTabs(setupsArray[i]));
  }
  return setupFillingArray;
}

function compareTabs(setups, arrayWithThings = []) {
  Object.entries(setups).forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    if (typeof value === "object") compareTabs(value, arrayWithThings);
    arrayWithThings.push({ [key]: value });
  });
  return arrayWithThings;
}

function checkArrayDifferences(setupsArraySeparated) {
  let differencesArray = [];
  const numberOfSetups = setupsArraySeparated.length;
  const numberOfParams = setupsArraySeparated[0].length;
  for (let i = 0; i < numberOfParams; i++) {
    let valuesThatAreComparing = [];
    for (let j = 0; j < numberOfSetups; j++) {
      Object.entries(setupsArraySeparated[j][i]).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        valuesThatAreComparing.push({ [key]: value });
      });
    }
    console.log(valuesThatAreComparing);
    // if all values DO NOT match, push to differencesArray
    for (let j = 0; j < numberOfSetups - 1; j++) {
      if (
        String(Object.values(valuesThatAreComparing[j])) !=
        String(Object.values(valuesThatAreComparing[j + 1]))
      )
        differencesArray.push(valuesThatAreComparing);
    }
  }
  return differencesArray;
}

document
  .getElementById("file-loadSetup")
  .addEventListener("change", handleFileSelect, false);
