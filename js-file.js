$(document).ready(function(){
	$( "#about" ).click(function() {
 		 alert( "We are a Tunisian company created in 2020. Our mission is to make your life easier by offering various products used in your life. Our goal is to satisfy our customers with very good service.")
 });
});


$("#btn2").click(function(){
  $(".products-box").hide();
});

$("#btn1").click(function(){
  $(".products-box").show();
});



// var prices = $(".aa").attr("data_value");
// var i = 1;
// function adcart(){
// 	var str1 = "Total Price " + i*prices;
// 	$("#price").text(str1)
// 	i++;
// }
// btn.addEventListener("click", adcart);
var total = 0;
$("#btn01").click(function() {
	total += parseInt($("#btn01").val()); 
	$("#price").text("Total Price =" + total);
})
$("#btn02").click(function() {
	total += parseInt($("#btn02").val()); 
	$("#price").text("Total Price =" + total);
})
$("#btn03").click(function() {
	total += parseInt($("#btn03").val()); 
	$("#price").text("Total Price =" + total);
})

$("#btn04").click(function() {
	total += parseInt($("#btn04").val()); 
	$("#price").text("Total Price =" + total);
})

$("#btn05").click(function() {
	total += parseInt($("#btn05").val()); 
	$("#price").text("Total Price =" + total);
})

$("#btn06").click(function() {
	total += parseInt($("#btn06").val()); 
	$("#price").text("Total Price =" + total);
})

$("#btn07").click(function() {
	total += parseInt($("#btn07").val()); 
	$("#price").text("Total Price =" + total);
})

$("#btn08").click(function() {
	total += parseInt($("#btn08").val()); 
	$("#price").text("Total Price =" + total);
})



// $("#btn-r").click(function() { 
// 	$("#price").text("Total Price =" 0);
// 	$("#select").text("Selected Items =" 0);
// })


var j = 0;
$(".bt").click(function() {
	j++;
	$("#select").text("Selected Items =" + j);
})



// function selectItems(){
// 		var str1 = "Selected Items" + " " + j;
// 		$("#select").text(str1);
// 		j++;
// }
// bt.addEventListener("click", selectItems);

