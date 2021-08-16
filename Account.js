// Get Input Value
function getInputValue(inputID) {
    const InputValue = document.getElementById(inputID);
    const FinalInputValue = parseFloat(InputValue.value);
    InputValue.value = '';
    return FinalInputValue;
}
//Update Deposite or Withdraw Balance
function depositeORwithdrawBalanceUpdate(depositeORwithdrawValue, depositeORwithdrawID) {
    let amount = document.getElementById(depositeORwithdrawID);
    let amountValue = parseFloat(amount.innerText);
    amount.innerText = amountValue + depositeORwithdrawValue;
}
// Balance Calculate
function balanceCalculate(balanceID, depositeOrWithdrawValue) {
    let Balance = document.getElementById(balanceID);
    const BalanceValue = parseFloat(Balance.innerText);
    console.log(BalanceValue);
    console.log(BalanceValue + depositeOrWithdrawValue);
    Balance.innerText = BalanceValue + depositeOrWithdrawValue;
}
//Deposite 
document.getElementById('Deposite').addEventListener('click', function () {
    const DepositeValue = getInputValue('DepositeAmount');
    if (DepositeValue > 0) {
        depositeORwithdrawBalanceUpdate(DepositeValue, 'DepositeBalance');
        balanceCalculate('Balance', DepositeValue);
    }
})
//Withdraw
document.getElementById('Withdraw').addEventListener('click', function () {
    const WithdrawValue = getInputValue('WithdrawAmount');
    if (WithdrawValue > 0) {
        depositeORwithdrawBalanceUpdate(WithdrawValue, 'WithdrawBalance');
        balanceCalculate('Balance', (-1 * WithdrawValue));
    }
})