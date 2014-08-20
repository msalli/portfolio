

// function ShowBox() {
//       $("#curtain").slideUp("slow", function () {
//         $("#start").fadeOut("fast");
//         $("body").css("background-color", "black");
//         $("#line1").fadeIn(3000);
//         // $("#line1").animate({ "left" : "200px"}, 2000);
//         $("#line2").fadeIn(6000);

//       });
//   }


$("#scene").parallax( {
  calibrateX: false,
  calibrateY: true,
  invertX: false,
  invertY: true,
  limitX: false,
  limitY: 10,
  scalarX: 2,
  scalarY: 8,
  frictionX: 0.2,
  frictionY: 0.8,
  originX: 0.0,
  originY: 0.0
});

$("#scene2").parallax();

$("#scene3").parallax();
