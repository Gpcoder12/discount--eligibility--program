function checkEligibility() 
    const Age = parseInt(document.getElementById("18").value);
    const isMember = document.getElementById("membership").checked;
 
    let discount = 65;
      let age=65;
    
    if (age >= 65) {
      discount = "Senior Discount";
    } else if (age >= 18 && isMember) {
      discount = "Member Discount";
    } else {
      discount = "No Discount";
    }
    document.getElementById("").innerHTML = discount;

