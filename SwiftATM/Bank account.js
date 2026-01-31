//Bank  Account Object with Methods
let accounts = [
  {
    name: "Zia",
    AccountNo: "1234567890",
    Password: 4321,
    balance: 40000,
    transaction: []
  },
  {
    name: "Amit",
    AccountNo: "9087654321",
    Password: 5959,
    balance: 60000,
    transaction: []
  },
  {
    name: "Sara",
    AccountNo: "1122334455",
    Password: 1771,
    balance: 60000,
    transaction: []
  },
  {
    name: "Laiba",
    AccountNo: "6677889900",
    Password: 1522,
    balance: 100000,
    transaction: []
  },
  {
    name: "Joshua",
    AccountNo: "9856437812",
    Password: 1522,
    balance: 55000000000,
    transaction: []
  },
  {
    name: "Angel",
    AccountNo: "89005667792",
    Password: 2323,
    balance: 4500,
    transaction: []
  }
];

// cash deposit by index
function deposit(account, amount) {
  account.balance += amount;
  account.transaction.push({
    type: "deposit",
    amount: amount,
    date: new Date().toLocaleString()
  });
}

// cash withdraw by index
function withdraw(account, amount) {
  if (amount > account.balance) {
    return "❌ Insufficient Balance";
  }
  account.balance -= amount;
  account.transaction.push({
    type: "withdraw",
    amount: amount,
    date: new Date().toLocaleString()
  });
}

// find account
function findAccount(accountNo) {
  for (let i = 0; i < accounts.length; i++) {
    if (accountNo === accounts[i].AccountNo) {
      return accounts[i];
    }
  }
  return null;
}

// deposit by account number
function depositbyAccountNO(accountNo, password, amount) {
  accountNo = String(accountNo);
  password = Number(password);

  for (let i = 0; i < accounts.length; i++) {
    if (accountNo === accounts[i].AccountNo) {
      if (password !== accounts[i].Password) {
        return "❌ Incorrect Password";
      }

      accounts[i].balance += amount;
      accounts[i].transaction.push({
        type: "deposit",
        amount,
        date: new Date().toLocaleString()
      });

      return (
        `✅ Deposit Successful for ${accounts[i].name}\n` +
        `Deposit Amount: ₹${amount}\n` +
        `Current Balance: ₹${accounts[i].balance}`
      );
    }
  }
  return "❌ Account not found";
}

// withdraw by account number
function withdrawbyAccountNO(accountNo, password, amount) {
  accountNo = String(accountNo);
  password = Number(password);

  for (let i = 0; i < accounts.length; i++) {
    if (accountNo === accounts[i].AccountNo) {
      if (password !== accounts[i].Password) {
        return "❌ Incorrect Password";
      }

      if (amount > accounts[i].balance) {
        return `❌ Insufficient Balance. Available: ₹${accounts[i].balance}`;
      }

      accounts[i].balance -= amount;
      accounts[i].transaction.push({
        type: "withdraw",
        amount,
        date: new Date().toLocaleString()
      });

      return (
        `✅ Withdraw Successful for ${accounts[i].name}\n` +
        `Amount: ₹${amount}\n` +
        `Remaining Balance: ₹${accounts[i].balance}`
      );
    }
  }
  return "❌ Account not found";
}

// rich accounts
function richAccounts(reachAmount) {
  let rich = accounts.filter(a => a.balance > reachAmount);

  if (rich.length === 0) {
    return "No rich accounts found";
  }

  return (
    "✅ Rich Accounts are:\n" +
    rich.map(a => `${a.name} (₹${a.balance})`).join("\n")
  );
}

// transaction history
function showHistory(accountNo, password) {
  accountNo = String(accountNo);
  password = Number(password);

  for (let i = 0; i < accounts.length; i++) {
    if (accountNo === accounts[i].AccountNo) {
      if (password !== accounts[i].Password) {
        return "❌ Incorrect Password";
      }

      let result =
        `Transaction history for ${accounts[i].name}\n` +
        `Current balance: ₹${accounts[i].balance}\n\n`;

      let txns = accounts[i].transaction;

      if (txns.length === 0) {
        return result + "No transactions found";
      }

      for (let j = 0; j < txns.length; j++) {
        result +=
          `${txns[j].date} | ${txns[j].type.toUpperCase()} | ₹${txns[j].amount}\n`;
      }
      return result;
    }
  }
  return "❌ Account not found";
}

// pin change
function Pinchange(accountNo, oldpass, newpass) {
  accountNo = String(accountNo);
  oldpass = Number(oldpass);
  newpass = Number(newpass);

  for (let i = 0; i < accounts.length; i++) {
    if (accountNo === accounts[i].AccountNo) {
      if (oldpass !== accounts[i].Password) {
        return "❌ Incorrect Password";
      }

      accounts[i].Password = newpass;
      return (
        `✅ Password changed successfully for ${accounts[i].name}\n` +
        `Your new Password is ${newpass}`
      );
    }
  }
  return "❌ Account not found";
}

// balance inquiry
function BalanceInquiry(accountNo, pass) {
  accountNo = String(accountNo);
  pass = Number(pass);

  for (let i = 0; i < accounts.length; i++) {
    if (accountNo === accounts[i].AccountNo) {
      if (pass !== accounts[i].Password) {
        return "❌ Incorrect Password";
      }
      return `${accounts[i].name}'s current balance is ₹${accounts[i].balance}`;
    }
  }
  return "❌ Account not found";
}
let currentSection="";



function showsection(sectionId){
  let sections=document.querySelectorAll('.section');
   let mainButton=document.querySelector(".main-button");
   let EnterButton=document.querySelector(".Enter-Btn");
   document.querySelector(".Btn-container").style.display = "none";
     currentSection=sectionId;

   for(let i=0;i<sections.length;i++){
    sections[i].style.display="none";
   }
    document.getElementById(sectionId).style.display="block";
    mainButton.style.display="block";
      EnterButton.style.display="block";
    const heading=document.getElementById("heading");
        heading.innerText=`You have selected ${sectionId} Section`;;
        heading.style.fontSize="34px";
     mainButton.onclick=function(){
           document.querySelector(".Btn-container").style.display="block";
           document.querySelector(".Btn-container").style.display= "grid";
           document.getElementById("heading").innerText=`Please select a Transaction`;
           EnterButton.style.display="none";
    for(let i=0;i<sections.length;i++){
    sections[i].style.display="none";
    }
    mainButton.style.display="none";
    
    }

            
              
}

function login(){
let accValue,passValue,amtValue;
const resultdiv = document.getElementById("result");

if(currentSection==="Transaction History"){
    accValue  = document.getElementById("trans-accNo").value;
    passValue = Number(document.getElementById("trans-pass").value);
    
    const message =showHistory(accValue,passValue);
    resultdiv.innerText=message;
    resultdiv.style.display = "block";

  document.querySelector(".Btn-container").style.display = "none";
  document.querySelectorAll(".section").forEach(s => s.style.display = "none");
  document.querySelector(".Enter-Btn").style.display = "none";
  document.querySelector(".main-button").style.display = "none";
  document.getElementById("heading").style.display="none";
  return;
}
   
if(currentSection==="Balance Inquiry"){
    accValue  =document.getElementById("Balance-accNo").value;
    passValue = Number(document.getElementById("Balance-pass").value);
   
    const message =BalanceInquiry(accValue,passValue);
    resultdiv.innerText=message;
    resultdiv.style.display = "block";

  document.querySelector(".Btn-container").style.display = "none";
  document.querySelectorAll(".section").forEach(s => s.style.display = "none");
  document.querySelector(".Enter-Btn").style.display = "none";
  document.querySelector(".main-button").style.display = "none";
  document.getElementById("heading").style.display="none";
  return;  
}
   
if(currentSection==="Withdraw"){
    accValue  =document.getElementById("withdraw-accNo").value;
    passValue = Number(document.getElementById("withdraw-pass").value);
    amtValue=Number(document.getElementById("withdraw-amt").value);
   
    const message = withdrawbyAccountNO(accValue, passValue, amtValue);

  const resultdiv = document.getElementById("result");
  resultdiv.innerText = message;
  resultdiv.style.display = "block";

  document.querySelector(".Btn-container").style.display = "none";
  document.querySelectorAll(".section").forEach(s => s.style.display = "none");
  document.querySelector(".Enter-Btn").style.display = "none";
  document.querySelector(".main-button").style.display = "none";
  document.getElementById("heading").style.display="none";
    return;
}
if(currentSection==="deposit"){
    accValue  =document.getElementById("deposit-accNo").value;
    passValue = Number(document.getElementById("deposit-pass").value);
    amtValue=Number(document.getElementById("deposit-amt").value);
    message=depositbyAccountNO(accValue,passValue,amtValue);
   const resultdiv = document.getElementById("result");
  resultdiv.innerText = message;
  resultdiv.style.display = "block";

  document.querySelector(".Btn-container").style.display = "none";
  document.querySelectorAll(".section").forEach(s => s.style.display = "none");
  document.querySelector(".Enter-Btn").style.display = "none";
  document.querySelector(".main-button").style.display = "none";
  document.getElementById("heading").style.display="none";
    return;
  
}
if(currentSection==="Rich Accounts"){
  amtValue=Number(document.getElementById("Rich-amt").value);
  
  const message=richAccounts(amtValue);
  resultdiv.innerText = message;
  resultdiv.style.display = "block";

  document.querySelector(".Btn-container").style.display = "none";
  document.querySelectorAll(".section").forEach(s => s.style.display = "none");
  document.querySelector(".Enter-Btn").style.display = "none";
  document.querySelector(".main-button").style.display = "none";
  document.getElementById("heading").style.display="none";
    return;
  
}
if(currentSection==="Pin Change"){
    accValue  = document.getElementById("Pin-accNo").value;
    passValue = Number(document.getElementById("Pin-old-pass").value);
    amtValue=Number(document.getElementById("Pin-new-pass").value)
    
 const message=Pinchange(accValue,passValue,amtValue);
 resultdiv.innerText = message;
  resultdiv.style.display = "block";

  document.querySelector(".Btn-container").style.display = "none";
  document.querySelectorAll(".section").forEach(s => s.style.display = "none");
  document.querySelector(".Enter-Btn").style.display = "none";
  document.querySelector(".main-button").style.display = "none";
  document.getElementById("heading").style.display="none";
  return;

}
if(currentSection==="Bill Payment"){
    accValue  =document.getElementById("Bill-accNo").value;
    passValue = Number(document.getElementById("Bill-pass").value);
    amtValue=Number(document.getElementById("Bill-amt").value);

}
if(currentSection==="Transfer Funds"){
    accValue  = document.getElementById("transfer-accNo").value;
    passValue = Number(document.getElementById("transfer-pass").value);
    amtValue=Number(document.getElementById("tranafer-amt").value);
}




}

const resultDisplay = document.querySelector('.result-box');

function showResult(message, isSuccess) {
    resultDisplay.innerText = message;
    
    // Reset classes first so they don't stack
    resultDisplay.classList.remove('text-success', 'text-error');
    resultDisplay.style.display = "block"; // Make it visible

    if (isSuccess) {
        resultDisplay.classList.add('text-success');
    } else {
        resultDisplay.classList.add('text-error');
    }

    // Hide it after 3 seconds so the user can see the buttons again
    setTimeout(() => {
        resultDisplay.style.display = "none";
    }, 3000);
}




