const header = document.querySelector(".header")

const Div_Of_Total_account = document.querySelector(".Div_Of_Total_account");

const Input_Of_Amount = document.querySelector(".Input_Of_Amount");

const Input_Of_Activte = document.querySelector(".Input_Of_Activte");

const select_Div = document.querySelector(".select_Div");

const Button_Of_Save = document.querySelector(".Button_Of_Save");

const Div_Of_Date = document.querySelector(".Div_Of_Date");

const Div_Of_History = document.querySelector(".Div_Of_History");

const Span_Of_Amount = document.querySelector(".Span_Of_Amount");

const Span_Of_Activte = document.querySelector(".Span_Of_Activte");

let Array_of_Transiction = [];

Button_Of_Save.addEventListener("click", (e) => {
    header.textContent ="The Width Of This Screen Is "+ window.innerWidth;

  // console.log(typeof Input_Of_Activte.value)

  if (Input_Of_Amount.value != "" && Input_Of_Activte.value != "") {

 console.log("Pass First Stage There Is Amount And Active Value")

    if (parseInt(Input_Of_Amount.value) >= 0) {

        console.log("Pass Secnt Stage The AAmount Value >= 0 ")

      CreatElements();

      // Input_Of_Amount.value=""
      // Input_Of_Activte.value=""

      if (select_Div.value == "Expenses") {
        Div_Of_Total_account.textContent =
          parseInt(Div_Of_Total_account.textContent) -
          parseInt(Input_Of_Amount.value);
      } else {
        Div_Of_Total_account.textContent =
          parseInt(Div_Of_Total_account.textContent) +
          parseInt(Input_Of_Amount.value);
      }
    }
    else {
        alert("Amount Must Be Over or Equal 0");
      }

  } 


});

function From_Object_To_Array(Amount_v, Activte_v, select_v) {
  const Content_Of_Transiction = {
    Amount: Amount_v,

    Activte: Activte_v,

    select: select_v,
  };

  Array_of_Transiction.push(Content_Of_Transiction);
}

function CreatElements() {
  const creat_Div_Of_Transiction = document.createElement("div");

  creat_Div_Of_Transiction.classList.add("Div_Of_Transiction");

  if (select_Div.value == "Expenses") {
    creat_Div_Of_Transiction.classList.add("Red_Transiction");
  }

  Div_Of_History.appendChild(creat_Div_Of_Transiction);

  const creat_Span_Of_Amount = document.createElement("span");

  creat_Span_Of_Amount.classList.add("Span_Of_Amount");

  creat_Span_Of_Amount.textContent = "Amount : " + Input_Of_Amount.value;

  creat_Div_Of_Transiction.appendChild(creat_Span_Of_Amount);

  const creat_Span_Of_Activte = document.createElement("span");

  creat_Span_Of_Activte.classList.add("Span_Of_Activte");

  creat_Span_Of_Activte.textContent = "Active : " +  Input_Of_Activte.value;

  creat_Div_Of_Transiction.appendChild(creat_Span_Of_Activte);
}
