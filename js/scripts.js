function tallyResults() {
  const dog = parseInt($("#dog").val());
  const grapefruits = parseInt($("#grapefruits").val());
  const snake = parseInt($("#snake").val());
  const programReqs = parseInt($("#programReqs").val());
  const whatCodingDoes= parseInt($("#whatCodingDoes").val());
  let resultsTotal = 0;

  if (grapefruits === 3 && snake === 2) {
    resultsTotal = 10;
  } else if (grapefruits === 3) {
    resultsTotal = 23;
  } else if (snake === 2) {
    resultsTotal = 1;
  } else {
    resultsTotal = dog + grapefruits + snake + programReqs + whatCodingDoes;
  }
  return resultsTotal;
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    let results = tallyResults();

    if (results === 0) {
      $("#error").show();
    } else if (results >= 15) {
      $("#ruby").show();
    } else if (results <= 8) {
      $("#python").show();
    } else {
      $("#showResults").show();
    }
    $("form#formOne").hide();
  });
});
