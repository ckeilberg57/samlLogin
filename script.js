const form = document.querySelector("form");
eField = form.querySelector(".email");
eInput = eField.querySelector("input");
pField = form.querySelector(".password");
pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();

    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => { checkEmail(); }
    pInput.onkeyup = () => { checkPass(); }

    function checkEmail() {
        console.log("inside check email");
        //let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let pattern = /lfe2222/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");

            (eInput.value != "") ? errorTxt.innerText = "Enter a valid UserID": errorTxt.innerText = "User ID can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        console.log("inside check password");
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }
    if  (eField.classList.contains("valid") && pField.classList.contains("valid")) {
        console.log("valid email");
        location.href = "https://cklab-edges.ck-collab-engtest.com/webapp/#/?conference=drdemo&name=Dr.%20Demo&callType=video&role=host&pin=2023";
    } else if (eField.classList.contains("error") && pField.classList.contains("error")) {
        console.log("invalid");
        window.location.href = form.getAttribute("action");
         }
}
