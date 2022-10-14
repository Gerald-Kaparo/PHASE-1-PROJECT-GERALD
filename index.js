// Examine doc obj //
// console.debug(...Audio: history[]): void;
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.URL);

console.log(document.images);
console.log(document.doctype);
console.log(document.all);
console.log(document.all[9].textContent='Please text');

getElementById//
console.log(document.getElementById('header title'));
console.log(headerTitle);
headerTitle.textContent='plant a tree';
headerTitle.innerText='Please contribute';
console.log(headerTitle.innerText);

// GET ELEMENTS BY CLASSNAME //
var my_goal= document.getElementsByClassName('it');
for (var r = 0; r < FileList.length; r++){
    div[r].style.backgroundColor='#eee';
}

//GET ELEMENTS BY TAG NAME//
var a=document.getElementsByTagName('a');
console.log(a);
console.log(a[1]);
a[1].textContent='your price';
a[1].style.fontFamily='Times New Roman';
a[1].style.alignContent='centre';

//Query selector//
var header= document.querySelector('h1');
header.style.backgroundColor='light green';
var iput= document.querySelector('input');
input.value='contribution';

let volunteer = {
    name: "Melisa",
    age: 22,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  
  alert(volunteer);

// import package
import { Mpesa } from "mpesa-api";
//OR
const Mpesa = require("mpesa-api").Mpesa;

// create a new instance of the api
const mpesa = new Mpesa(credentials, environment);


//example
const credentials = {
    clientKey: 'YOUR_CONSUMER_KEY_HERE',
    clientSecret: 'YOUR_CONSUMER_SECRET_HERE',
    initiatorPassword: 'YOUR_INITIATOR_PASSWORD_HERE',
    securityCredential: 'YOUR_SECURITY_CREDENTIAL',
    certificatePath: 'keys/example.cert'
};
// For the initiator_password, use the security credential from the test credentials page.link :https://developer.safaricom.co.ke/test_credentials

// security credential is optional. Set this if you're getting Initiator Name is invalid errors. You can generate your security credential on the test credentials page for sandbox environment or from your mpesa web portal for production environment.

// certificate path is otional. I've provided ceritificates for sandbox and production by default. If you choose not to include it Pass it as null. If you have passed `securityCredential` you should pass `certificatePath` as `null`
// const credentials = {
//     ...,
//     certificatePath: null
// };

// const environment = "sandbox";
// //or
// const environment = "production";

// mpesa
  .b2b({
    InitiatorName: "Initiator Name",
    Amount: 1000 /* 1000 is an example amount */,
    PartyA: "Party A",
    PartyB: "Party B",
    AccountReference: "Account Reference",
    QueueTimeOutURL: "Queue Timeout URL",
    ResultURL: "Result URL",
    CommandID: "Command ID" /* OPTIONAL */,
    SenderIdentifierType: 4 /* OPTIONAL */,
    RecieverIdentifierType: 4 /* OPTIONAL */,
    Remarks: "Remarks" /* OPTIONAL */,
  })
  .then((response) => {
    //Do something with the response
    //eg
    console.log(response);
  })
  .catch((error) => {
    //Do something with the error;
    //eg
    console.error(error);
  });

  document.addListenerEvent("DOMContentLoaded", function(){
    const button = document.getElementById("it")
    button.addListenerEvent('click', function(){
      console.log("I can try it actually!");
    })
  });

  function contribute () {
    if (document.getElementById("contribute").value == "") {
      priceComp = 100;
    } else if (document.getElementById("comp").value == "tileadh") {
      priceComp = 650;
    } else if (document.getElementById("comp").value == "Cornerstrips") {
      priceComp = 100;
    }  else {
      priceComp= 200;
    }
    return priceComp;
  }
  