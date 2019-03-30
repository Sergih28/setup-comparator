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
