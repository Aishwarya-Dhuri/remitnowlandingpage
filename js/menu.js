$(document).ready(function(){
	$("#burger-nav").on("click",function(){
		$("header nav ul").toggleClass("open");
	});

	$('#contry').html('Send from');
	$('#contry1').html('Send to');
	$('#service1').html('Select Service');
	$('#service2').html('Receive');
	$('#service3').html('AUD');

});
function changeflag(obj){
	var flag1 = $(obj).find('option:selected').data("flag");
	flag2 = flag1.replace(/ /g, '-');
	$('#contry').html(flag1);
	$('#img').attr("src", 'flags/flat/24/'+flag2+'.png');
/*var flag1 = $('#flag').val();
	 //alert(flag1);
	 $('#contry').html(flag1);
	 flag2 = flag1.replace(/ /g, '-');
	 //console.log(flag2);
	 $('#img').attr("src", 'flags/flat/24/'+flag2+'.png');*/
}
function changeflag1(obj){
	var flag1 = $(obj).find('option:selected').data("flag");
	flag2 = flag1.replace(/ /g, '-');
	$('#contry1').html(flag1);
	$('#img1').attr("src", 'flags/flat/24/'+flag2+'.png');
	/*
   var flag1 = $('#flag1').val();
	 //alert(flag1);
	 $('#contry1').html(flag1);
	 flag2 = flag1.replace(/ /g, '-');
	 //console.log(flag2);
	 $('#img1').attr("src", 'flags/flat/24/'+flag2+'.png');*/
}
function selectservice(val){
	var val=val.options[val.selectedIndex].text;
	$('#service1').html(val);
}
function sendreceive(val){
	var val=val.options[val.selectedIndex].text;
	$('#service2').html(val);
}
function sendreceive2(val){
	var val=val.options[val.selectedIndex].text;
	$('#service3').html(val);
	}
