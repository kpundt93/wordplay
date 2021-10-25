$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const answer = $("input#sentence").val();
    const newAnswer = answer.split(" ");
    const greaterThan = [];
    
    newAnswer.forEach(function(element) {
      if(element.length >= 3) {
        greaterThan.push(element);
      }
    });
    
    console.log(greaterThan);

    greaterThan.reverse();
    const join = greaterThan.join(" ");
    $('#new').append("<p>" + join + "</p>");

  });
});