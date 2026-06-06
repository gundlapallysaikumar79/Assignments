function evelateLoan(

customerName : string,
 creditScore : number,
 income : number,
 isEmployed : boolean,
 debtToIncomeRatio : number,
): void 
{
    console.log("checking the loan eligablity for the customer" +customerName);

if (creditScore > 750){
    console.log("Loan is Approved ")
} else if (creditScore >=650){

    if (income >=50000){

        if(isEmployed){
            if(debtToIncomeRatio <40){
                console.log("Loan is approved customer meet all the creteria");
            } else{
                console.log("Loan is Rejected because the Debit to Income Ratio is to high");
            }
         } else{
            console.log("loan is rejected due to the customer is unemployed");
         }
    } else {
         console.log("loan is rejected due to custome income is low");
    }

}   else{
    console.log("loan is rejectred due to the customer has low income");
}
  

}

evelateLoan(

    "saikumr",
     720,
     45000,
     true,
     45.0,

);