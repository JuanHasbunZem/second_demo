$(document).ready(function() {
  $("#formOne").submit(function() {
    const dog = parseInt($("#dog").val());
    const grapefruits = parseInt($("#grapefruits").val());
    const snake = parseInt($("#snake").val());
    const programReqs = parseInt($("#programReqs").val());
    const whatCodingDoes= parseInt($("#whatCodingDoes").val());
    const resultstotal = dog + grapefruits + snake + programReqs + whatCodingDoes;

    if (resultstotal === 0) {
      $('#error').show();
    } else if (resultstotal <
});