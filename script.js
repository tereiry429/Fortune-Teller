
$(".futureButton").click(function(){
   var name = $(".name").val();
   $(".nameVal").text(name);
});

$(".futureButton").click(function(){
  var age = $(".age").val();
  var ageNum = parseInt(age) + 11 + " ";
  $(".ageVal").text(ageNum);
});

$(".futureButton").click(function(){
   var goal = $(".goal").val();
   $(".goalVal").text(goal);
});
