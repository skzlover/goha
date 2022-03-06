$(".icon2").hide();
$(".C").hide();

document.querySelector(".icon").addEventListener("mouseover", function() {
  $(".icon").hide();
  $(".icon2").show();
});

document.querySelector(".icon2").addEventListener("mouseout", function() {
  $(".icon").show();
  $(".icon2").hide();
});
