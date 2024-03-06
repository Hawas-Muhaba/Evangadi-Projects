
// $(".footer-wrapper h3").on("click", function(e){
//         e.preventDefault();
//         $("ul").addClass("yehoneNeger");
// });

var $container = document.querySelectorAll(".footer-wrapper h3");


$container.forEach((element) => {
    console.log($container);
    element.addEventListener("click", function (e) {
        var minLibelew = element.nextElementSibling;
    //   e.preventDefault();
      
      if(minLibelew.classList.contains("yehoneNeger")){
        minLibelew.classList.remove("yehoneNeger");
      }else{
          minLibelew.classList.add("yehoneNeger");
      }
    });
});

// for( var element = 0; element<$container.length; element++ ){
//     console.log($container);
//     $container[element].addEventListener("click", function (e) {
//       var minLibelew = $container[element].nextElementSibling;
//       //   e.preventDefault();

//       if (minLibelew.classList.contains("yehoneNeger")) {
//         minLibelew.classList.remove("yehoneNeger");
//       } else {
//         minLibelew.classList.add("yehoneNeger");
//       }
//     });
// }

