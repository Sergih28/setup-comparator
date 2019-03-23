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
    $("#list").append(
      "<li>Setup Name: " +
        escape(f.name).substring(0, escape(f.name).length - 4) +
        "</li>"
    );

    var reader = new FileReader();
    reader.onload = function(e) {
      const setup = new Setup(e.target.result);
      listOfSetupArray.push(setup);
      // listOfSetupArray[i] = setup;
      setup.showSetupByTabs();
      // console.log(setup);
      // console.log(listOfSetupArray);
      // console.log(i);
      setup.compareSetups(listOfSetupArray);
    };
    reader.readAsText(f);
    console.log(listOfSetupArray);
    // if (i !== files.length - 1)
    //   $("#list2").append("<li>--------------------------</li>");
  }
}

document
  .getElementById("file-loadSetup")
  .addEventListener("change", handleFileSelect, false);
