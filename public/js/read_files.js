// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert("The File APIs are not fully supported in this browser.");
}

let fileNameGlobal = "";
let counterGlobal = "";

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  let output = [];
  let listOfSetupArray = [];
  // $("#setupstab").html("");
  // $("#generaltab").html("");
  // $("#suspensiontab").html("");
  // $("#chassistab").html("");
  // $("#advancedtab").html("");
  // $("#list2").html("");

  for (var i = 0, f; (f = files[i]); i++) {
    readFile(f, function(e) {
      // use result in callback...
      const setup = new Setup(e.target.result);
      setup.showSetupByTabs();
      delete setup._setupData;
      listOfSetupArray.push(setup);
      console.log("inside readfile");
      // console.log(listOfSetupArray);
      if (listOfSetupArray.length == i && i > 1) {
        const comparisonObjectToShow = compareSetups(listOfSetupArray);
        showComparisonOnScreen(comparisonObjectToShow);
        console.log("Should append here at the end");
      }
      // if (listOfSetupArray.length == 1) {
      //   // showComparisonOnScreen(comparisonObjectToShow);
      //   console.log("Should append here at the end if only 1 file inputted");
      // }
    });
  }
}

function readFile(file, onLoadCallback) {
  var reader = new FileReader();
  reader.onload = onLoadCallback;
  reader.readAsText(file);
  console.log("function readfile");
  fileNameGlobal = file.name;
}

function compareSetups(setupsArray) {
  console.log("inside compare setups with the array");
  console.log(setupsArray);
  const setupsArraySeparated = separateSetupsIntoAnArray(setupsArray);
  const differencesArray = checkArrayDifferences(setupsArraySeparated);
  console.log(setupsArraySeparated);
  console.log("differencesArray");
  console.log(differencesArray);
  return differencesArray;
}

function separateSetupsIntoAnArray(setupsArray) {
  let setupFillingArray = [];
  for (let i = 0; i < setupsArray.length; i++) {
    let setupsTab = new SetupsTab();
    setupsTab = Object.getOwnPropertyNames(setupsTab);
    setupFillingArray.push(compareTabs(setupsArray[i]));
  }
  return setupFillingArray;
}

function compareTabs(setups, lastTab = "", arrayWithThings = []) {
  Object.entries(setups).forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    let lastTabName = "";
    if (typeof value === "object")
      compareTabs(value, lastTabName, arrayWithThings);
    arrayWithThings.push({ [key]: value });
  });
  return arrayWithThings;
}

function checkArrayDifferences(setupsArraySeparated) {
  let differencesArray = [];
  const numberOfSetups = setupsArraySeparated.length;
  const numberOfParams = setupsArraySeparated[0].length;
  // let namesArray = [];
  let files = $("#file-loadSetup").prop("files");
  let namesArray = $.map(files, function(val) {
    return val.name;
  });
  for (i = 0; i < numberOfParams; i++) {
    let valuesThatAreComparing = [];
    for (let j = 0; j < numberOfSetups; j++) {
      Object.entries(setupsArraySeparated[j][i]).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        let tab = checkTab(key);
        valuesThatAreComparing.push({
          setupName: namesArray[j],
          tab: tab,
          [key]: value
        });
      });
    }
    // if third value DO NOT match, push to differencesArray
    // First value is the setup name
    // Second value is the setupTab name
    // So we duplicate the array, delete the first and second value so we can compare (because it compares it as a string)
    for (let j = 0; j < numberOfSetups - 1; j++) {
      let duplicate = JSON.parse(
        JSON.stringify(Object.values(valuesThatAreComparing)[j])
      );
      delete duplicate.setupName;
      delete duplicate.tab;
      duplicate = String(Object.values(duplicate));
      let duplicate2 = JSON.parse(
        JSON.stringify(Object.values(valuesThatAreComparing)[j + 1])
      );
      delete duplicate2.setupName;
      delete duplicate2.tab;
      duplicate2 = String(Object.values(duplicate2));

      if (duplicate != duplicate2)
        differencesArray.push(valuesThatAreComparing);
    }
  }
  return differencesArray;
}

function checkTab(key) {
  //setupTab
  let tabClass = new SetupsTab();
  let result = giveMeTabNameFromClass(tabClass, key);
  if (result != undefined && result != "") return result;

  //generalTab
  tabClass = new GeneralTab();
  result = giveMeTabNameFromClass(tabClass, key);
  if (result != undefined && result != "") return result;

  //suspensionTab
  tabClass = new SuspensionTab();
  result = giveMeTabNameFromClass(tabClass, key);
  if (result != undefined && result != "") return result;

  //chassisTab
  tabClass = new ChassisTab();
  result = giveMeTabNameFromClass(tabClass, key);
  if (result != undefined && result != "") return result;

  //advancedTab
  tabClass = new AdvancedTab();
  result = giveMeTabNameFromClass(tabClass, key);
  if (result != undefined && result != "") return result;

  return "";
}

function giveMeTabNameFromClass(obj, key) {
  let constructorName = obj.constructor.name.toLowerCase();
  let r;
  let temp = Object.keys(obj).map(k => {
    if (k.toString() == key.toString()) {
      return constructorName;
    } else return;
  });
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == constructorName) {
      r = constructorName;
      break;
    }
  }
  return r;
}

function showComparisonOnScreen(comparisonObjectToShow) {
  console.log("comparisonObjectToShow");
  console.log(comparisonObjectToShow);
  console.log("comparisonObjectToShow.length");
  console.log(comparisonObjectToShow.length);
  let oldTab = "";
  let firstRowTH = true;
  let closeRowTH = false;
  let firstRowTD = true;
  let rowTH = false;
  let closeRowTD = false;
  let completedTHforThisTab = false;
  for (let i = 0; i < comparisonObjectToShow.length; i++) {
    console.log("comparisonObjectToShow[i].length");
    console.log(comparisonObjectToShow[i].length);
    for (let j = 0; j < comparisonObjectToShow[i].length; j++) {
      firstRowTD = j == 0;
      closeRowTD = j == comparisonObjectToShow[i].length - 1;
      let name = nameToShow(i, j, comparisonObjectToShow).trim();
      let tab = tabToPlace(i, j, comparisonObjectToShow).trim();
      let diffParam = diffParamToShow(i, j, comparisonObjectToShow).trim();
      let diffValue = diffValueToShow(i, j, comparisonObjectToShow).trim();
      // if (oldTab == "") oldTab = tab;
      // if (j == comparisonObjectToShow[i].length - 1) closeRowTH = true;
      if (j == comparisonObjectToShow[i].length - 1) {
        if (comparisonObjectToShow[i + 1]) {
          let nextTab = tabToPlace(i + 1, j, comparisonObjectToShow);
          if (nextTab != tab) closeRowTH = true;
        } else closeRowTH = true;
      }

      firstRowTH = oldTab != tab;

      oldTab = tab;
      if (
        j > 0 &&
        j < comparisonObjectToShow[i].length &&
        !completedTHforThisTab
      )
        rowTH = true;
      else rowTH = false;

      // TODO: dirty trick to save into an array the old tabs to see if
      // a new tab has already been painted so it doesn't add TH

      console.log("rowTH");
      console.log(rowTH);
      appendComparisonToHTML(
        name,
        tab,
        diffParam,
        diffValue,
        firstRowTH,
        rowTH,
        closeRowTH,
        firstRowTD,
        closeRowTD
      );
    }
    if (closeRowTH) completedTHforThisTab = true;
    firstRowTH = false;
    closeRowTH = false;
    rowTH = false;
  }

  // $("#setupstab").html("<li>LOOOOOOOOL</li>");
}

function nameToShow(i, j, comparisonObjectToShow) {
  return comparisonObjectToShow[i][j].setupName;
}

function tabToPlace(i, j, comparisonObjectToShow) {
  return comparisonObjectToShow[i][j].tab;
}

function diffParamToShow(i, j, comparisonObjectToShow) {
  let r = "";
  Object.entries(comparisonObjectToShow[i][j]).forEach(entry => {
    if (String(entry[0].startsWith("_"))) {
      r = String(entry[0]);
    }
  });
  //look for the right text on the dictionary
  return dic[r.substring(1, r.length)];
}
function diffValueToShow(i, j, comparisonObjectToShow) {
  let r = "";
  Object.entries(comparisonObjectToShow[i][j]).forEach(entry => {
    if (String(entry[0].startsWith("_"))) {
      r = String(entry[1]);
    }
  });
  return r;
}

function appendComparisonToHTML(
  name,
  tab,
  diffParam,
  diffValue,
  firstRowTH,
  rowTH,
  closeRowTH,
  firstRowTD,
  closeRowTD
) {
  console.log(
    "inside loop",
    name,
    tab,
    diffParam,
    diffValue,
    firstRowTH,
    rowTH,
    closeRowTH,
    firstRowTD,
    closeRowTD
  );
  // if (firstRowTH)
  //   $("#" + tab + "Table thead").append("<tr><th></th><th>" + name + "</th>");
  // if (rowTH) $("#" + tab + "Table thead tr").append("<th>" + name + "</th>");
  // if (closeRowTH)
  //   $("#" + tab + "Table thead")
  //     .last()
  //     .append("</tr>");

  if (firstRowTD) {
    $("#" + tab + "Table tbody").append(
      "<tr><td>" + diffParam + "</td><td>" + diffValue + "</td>"
    );
  } else
    $("#" + tab + "Table tbody tr")
      .last()
      .append("<td>" + diffValue + "</td>");
  if (closeRowTD)
    $("#" + tab + "Table tbody tr")
      .last()
      .append("</tr>");
  // if (firstRowTH) {
  //   $("#" + tab + "Table thead").append("<tr><th></th><th>" + name + "</th>");
  //   $("#" + tab + "Table tbody").append(
  //     "<tr><td>" + diffParam + "</td><td>" + diffValue + "</td>"
  //   );
  // } else {
  //   $("#" + tab + "Table tbody tr").append("<td>" + diffValue + "</td>");
  // }
  // if (closeRowTH)
  //   $("#" + tab + "Table thead tr").append("<th>" + name + "</th></tr>");
  // if (lastColumn) {
  //   // $("#" + tab + "Table thead").append("</tr>");
  //   $("#" + tab + "Table tbody").append("</tr>");
  // }
}

document
  .getElementById("file-loadSetup")
  .addEventListener("change", handleFileSelect, false);
