/*
In this assignment, you will be working with a Bank to help them decide who they should approve to purchase a house.
You will be provided a customer array that contains the customers name, income, debt, and how much their purchased house
would cost them each month.

The approval process is a two step process that accounts for both 'front end' and 'back end' approval. 
When both approvals are 'true', the customer is approved.

The front end approval method will: 
 - Accept an array of information, 
 - Isolate the income information and convert it to a numerical value,
 - Isolate the purposed mortgage payment,
 - The yearly income will be sent to a calculation that will convert the income to 28% of monthly income,
 - If that calculated number is greater than the purposed income, the front end decision will be true, if not, false.

The back end approval method will:
 - Accept an array of information,
 - Isolate the debt information and convert it to a numberical value,
 - Isolate the income infomation and convert it to a numberical value,
 - The yearly income will be sent to a calculation that will convert the income to 36% of monthly income,
 - If that calculated number is greater than the debt, the back end decision will be true, if not, false.

Once both decisions come back:
 - If both decisions are true, a 'true' value will be ammended to the end of the array information for that customer,
 - If either of the decisions are false, a 'false' value will be ammended to the end of the array information for that customer

Once functionality for the above has been completed, consume the data to test the functionality.
*/

//Provided array
var customerArray = [
					["Bridget Alexander", "$34,000", "$930", 640],
					["Jeremy Wagner", "$26,000", "$550", 550],
					["Darrin Drake", "$75,500", "$1,800", 1400],
					["Holly	Medina", "$61,000", "$2,900", 1100],
					["Victoria Silva", "$178,000", "$2,300", 2300]
					];


//Provide this function, however it is not allowed to be changed
function removeNonNumberic(str){
	var numericString = str.replace(/[^0-9]/g, '');
	return numericString;
}
console.log(customerArray);



//This will take the income and debt from string to a number and extract monthly payment

function toNumber(array){
	for(var i=0; i<array.length; i++) {
		var income = removeNonNumberic(array[i][1]);
		var debt = removeNonNumberic(array[i][2]);
		var payment = array[i][3];
		var monthlyCalc = (Math.round((income/12) *0.28));
		var debtCalc = (Math.round((income/12) *0.36));
        var approval;
        
        if (paymentEnough(payment, monthlyCalc) && debtRatioGood(debt, debtCalc)){
		  approval= true; 
		} else {
			approval = false;
    	}
    		array[i][4]=approval;
			console.log("Approval:" +array[i]);
        
	//Is monthly allowable payment more than they can afford to pay? 
		function paymentEnough(payment, monthlyCalc){
		var paymentResult;
		if(monthlyCalc > payment){
			paymentResult = true;
 		} else {
 			paymentResult = false;
		}
		console.log("result is" + paymentResult);	
		return paymentResult;
		

	}
		
	//Is monthly allowable debt more than their monthly debt? 
 		function debtRatioGood(debt, debtCalc) {
		var debtResult;
 		if(debtCalc > debt){
 			debtResult = true;
 		} else {
 			debtResult = false;
 				
 		}
 		console.log(debtResult);
 		return debtResult;
	}

	//if both criteria are satisfied, loan can be approved.  Append result to end of array in index 4.
		

		}
	}


  		toNumber(customerArray);








