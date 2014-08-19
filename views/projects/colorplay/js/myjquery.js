$(document).ready(function() {
  var colors = ["#AAFF00",
                    "#FFAA00",
                    "#FF00AA",
                    "#AA00FF",
                    "#00AAFF",
                    "#C8FF00",
                    "#46E4BC",
                    "#ACE900",
                    "#FF24A4",
                    "#CC37C2",
                    "#B431F4",
                    "#FFFB00",
                    "#D9F6FA",
                    "#00D9FF",
                    "#FF0066",
                    "#BCFF50"];


    function randomColor() {
    var rand = Math.floor(Math.random() * (colors.length-1));
    return colors[rand];
    }

    $(".box").on("mouseenter", function() {
      $(this).css("background-color", randomColor());
      $(this).css("box-shadow", "0 0 10px white");
      $(this).css("z-index", "10000");
    });

    $(".box").on("mouseout", function() {
      $(this).css("box-shadow", "none");
      $(this).css("z-index", "1");
    });

}); //closing start function