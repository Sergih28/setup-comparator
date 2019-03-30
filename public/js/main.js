function sortMe(tableId) {
  let tbody = $("#" + tableId + " tbody");
  tbody
    .find("tr")
    .sort(function(a, b) {
      return $("td:first", a)
        .text()
        .localeCompare($("td:first", b).text());
    })
    .appendTo(tbody);
}

function addTimestampsToScriptTags() {
  const date = Date.now().toString();
  const randomNumber = Math.floor(Math.random() * 999999).toString();
  let scripts = $("script");
  console.log("scripts");
  console.log(scripts);

  $(scripts).each(function() {
    if ($(this).attr("src"))
      $(this).attr("src", $(this).attr("src") + "?" + date + randomNumber);
  });
}
