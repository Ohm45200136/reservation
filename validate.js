function checkNID() {
	let nid = document.getElementById("nid").value.trim();
	let pattern = /^\d{13}$/; // ตัวเลข 13 หลัก
  
	return pattern.test(nid);
  }

  function checkTicketNo() {
	let num = document.getElementById("ticknum").value.trim();
  
	if (isNaN(num)) return false;
  
	num = parseInt(num);
	return num >= 1 && num <= 5;
  }

  function checkRequired() {
	let nid = document.getElementById("nid").value.trim();
	let fname = document.getElementById("fname").value.trim();
	let lname = document.getElementById("lname").value.trim();
	let tick = document.getElementById("ticknum").value.trim();
  
	return nid && fname && lname && tick;
  }

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkTicketNo()){
		  alert("Invalid value for No.of tickets!!");
		  document.getElementById("ticknum").focus();
		  return false;
		}else{
			total = priceCalculate();
			alert("Total price for this booking is "+total+" USD");
			return false;
		}
	}
}