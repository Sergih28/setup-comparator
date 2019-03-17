// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert("The File APIs are not fully supported in this browser.");
}

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  var output = [];
  $("#list2").html("");
  for (var i = 0, f; (f = files[i]); i++) {
    $("#list2").append(
      "<li>Setup Name: " +
        escape(f.name).substring(0, escape(f.name).length - 4) +
        "</li>"
    );
    // output.push(
    //   "<li><strong>",
    //   escape(f.name),
    //   "</strong>"
    //   //  (",
    //   // f.type || "n/a",
    //   // ") - ",
    //   // f.size,
    //   // " bytes, last modified: ",
    //   // f.lastModifiedDate.toLocaleDateString(),
    //   // "</li>"
    // );

    var reader = new FileReader();
    reader.onload = function(e) {
      new Setup(e.target.result);
    };
    reader.readAsText(f);
    if (i !== files.length - 1)
      $("#list2").append("<li>--------------------------</li>");
  }

  // document.getElementById("list").innerHTML =
  // "<ul>" + output.join("") + "</ul>";
}

document
  .getElementById("file-loadSetup")
  .addEventListener("change", handleFileSelect, false);
