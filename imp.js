function myF() {
	  document.getElementById("tno").style.backgroundColor = "lightblue";
}
function myFu() {
	  document.getElementById("tno").style.backgroundColor = "white";
}

function myF1() {
	  document.getElementById("jda").style.backgroundColor = "lightblue";
}
function myFu1() {
	  document.getElementById("jda").style.backgroundColor = "white";
}

function myF2() {
	  document.getElementById("ss").style.backgroundColor = "lightblue";
}
function myFu2() {
	  document.getElementById("ss").style.backgroundColor = "white";
}

function myF3() {
	  document.getElementById("ds").style.backgroundColor = "lightblue";
}
function myFu3() {
	  document.getElementById("ds").style.backgroundColor = "white";
}

function trn() {
	var tno = document.getElementById("tno").value;
	if(tno.length != 5 || isNaN(tno) || tno == ""){
		alert("Please provide valid Train Number of form #####");
		return false;
	}
}

function jd()
{
    var jda = document.getElementById("jda").value;
    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (jda == null || jda == "" || !pattern.test(jda)) {
       alert("Invalid Journey Date");
        return false;
    }
}

function whichclass() {
  var d =  document.getElementById("wc").value;
  alert("You selected :"+" "+ d );
}	 