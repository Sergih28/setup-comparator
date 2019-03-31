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
  $(scripts).each(function() {
    if ($(this).attr("src"))
      $(this).attr("src", $(this).attr("src") + "?" + date + randomNumber);
  });
}

function addProjectYearToFooter() {
  const firstYear = new Date(new Date().setFullYear(2019, 3, 6)).getFullYear();
  const todayYear = new Date().getFullYear();
  if (firstYear !== todayYear)
    $("#footer-text").append(` ${firstYear} - ${todayYear}`);
  else $("#footer-text").append(` ${firstYear}`);
}
