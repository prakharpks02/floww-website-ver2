function ToogleLoadingAnimation() {
    document.getElementById('loading-animation-id').classList.toggle('hide');
}


let CheckBox = document.querySelectorAll(".CheckBox");
let CheckBoxInput = document.querySelectorAll(".CheckBoxInput");
let fleetTypeCont = document.getElementById("fleetType")
let fleetSizeCont = document.getElementById("fleetSize")
let serviceTagCont = document.getElementsByClassName("mainOuter")[0]
let AdvBar = document.getElementById("advBar")
let FormDetails = {}

// ==================================
// fleet types populate 
let st1 = ""
st1 += `<option value="" selected disabled></option>`
fleetTypesVar.forEach((e, i) => {
    st1 += `<option value="${e.id}" class="SelectOption">${e.name}</option>`
})
fleetTypeCont.innerHTML = st1;

// ==================================
// fleet size populate 
let st2 = ""
st2 += `<option value="" selected disabled></option>`
fleetSizeVar.forEach((e, i) => {
    st2 += `<option value="${e.name}" class="SelectOption">${e.name}</option>`
})
fleetSizeCont.innerHTML = st2;

// ==================================
// service tags
const servicePop = (f) => {
    let st3 = ""
    serviceTags.forEach((e, i) => {
        st3 += `<div class="main">
        <div class="CheckBox2">
            <input value="${e.id}" class="CheckBoxInput2" type="checkbox" name="ServiceTag" id="service${i}">
        </div>
        <label class="checkBoxTest" for="service${i}">
             ${e.name}
             <div class="miniText2">${e.description}</div>
        </label>
    </div>`
    })
    serviceTagCont.innerHTML = st3;

    f();
}

const ServiceChecker = () => {
    let CheckBox2 = document.querySelectorAll(".CheckBox2");
    let CheckBoxInput2 = document.querySelectorAll(".CheckBoxInput2");
    Array.from(CheckBoxInput2).forEach((ele, i) => {
        ele.addEventListener("click", () => {
            Array.from(CheckBox2).forEach((e, y) => {
                if (CheckBoxInput2[y].checked) e.style.backgroundColor = "var(--lightBlue)";
                else e.style.backgroundColor = "white";
            })
        })
    })
}

// ==================================
//  Recommended Cost after form 1
const getRecommendedCost = async () => {
    ToogleLoadingAnimation();
    try {
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }
        let queryParamsVar = {
            "pincode": FormDetails.pinCode,
            "fleetType": FormDetails.fleetType,
        }

        // Storing response
        const response = await fetch("https://backend.gofloww.co/api/v1/3pl-form/get-cost-recommendation?" + new URLSearchParams(queryParamsVar), options);
        //?format=json const response = await fetch("https://cors-anywhere.herokuapp.com/https://backend.gofloww.co/api/v1/3pl-form/get-cost-recommendation/?format=json", options);

        //check if response status is ok
        if (response.ok) {
            // Storing data in form of JSON
            let data = await response.json();
            if (data) {
                data = JSON.parse(data)
                const perOrder = data["perOrder"];
                const rental = data["rental"];
                console.log(data);

                document.getElementById("baseCharge").value = perOrder.baseCost;
                document.getElementById("perKmCharge").value = perOrder.perKm;
                document.getElementById("perKgCharge").value = perOrder.perKg;
                document.getElementById("RentalbaseCharge").value = rental.baseCost;
                document.getElementById("RentalperHrCharge").value = rental.perHr;
                document.getElementById("RentalperKmCharge").value = rental.perKm;
            }
            ToogleLoadingAnimation();

        } else {
            let error = (data && data.message) || response.status;
            console.log(error);
            ToogleLoadingAnimation();
        }
    } catch (e) {
        ToogleLoadingAnimation();
        console.log("error while fetching data: ", e);
    }
}

// ==================================
// custom check boxes
Array.from(CheckBoxInput).forEach((ele, i) => {
    ele.addEventListener("click", () => {
        Array.from(CheckBox).forEach((e, y) => {
            if (CheckBoxInput[y].checked) e.style.backgroundColor = "var(--lightBlue)";
            else e.style.backgroundColor = "white";
        })
    })
})

document.addEventListener('DOMContentLoaded', (event) => {
    servicePop(ServiceChecker);
});

// ==================================
// submit handler
const SubmitHandler1 = (e) => {
    let userName = document.getElementById("BinfoName").value;
    let companyName = document.getElementById("BinfoCompanyName").value + ' ' + document.getElementById('CompanyType').value;
    console.log(companyName);
    let companyType = document.getElementById("CompanyType").value;
    let contactNo = document.getElementById("BinfoContact").value;
    let foundedYear = document.getElementById("BinfoYear").value;
    let address = document.getElementById("BinfoAddress").value;
    let documentType = document.getElementById("DocType").value;
    let documentNo = document.getElementById("BinfoDocNum").value;
    let deliveryType = document.querySelector('input[name=deliveryType]:checked').value;

    let ServiceTag = document.querySelectorAll('input[name=ServiceTag]:checked');
    let ServiceTagArray = [];

    if (ServiceTag.length == 0) {
        ServiceTagArray = ['sanitize'];
    } else {
        for (var i = 0; i < ServiceTag.length; i++) {
            ServiceTagArray.push(ServiceTag[i].value);
        }
    }


    let fleetType = document.getElementById("fleetType").value;
    let fleetSize = document.getElementById("fleetSize").value;
    let pinCode = document.getElementById("PinCode").value;

    if (userName.length && companyName.length && companyType != "" && contactNo.length <= 10 && foundedYear.length <= 4 && documentType != "" && documentNo.length && deliveryType.length && fleetSize != "" && fleetType != "" && pinCode.length <= 6) {
        document.getElementById("form1").classList.toggle("visi");
        document.getElementById("form2").classList.toggle("visi");

        FormDetails.userName = userName;
        FormDetails.companyName = companyName;
        FormDetails.companyType = companyType;
        FormDetails.contactNo = contactNo;
        FormDetails.foundedYear = foundedYear;
        FormDetails.address = address;
        FormDetails.documentType = documentType;
        FormDetails.documentNo = documentNo;
        FormDetails.deliveryType = "perOrder"; //deliveryType;
        FormDetails.serviceTag = ServiceTagArray;
        FormDetails.fleetType = fleetType;
        FormDetails.fleetSize = fleetSize;
        FormDetails.pinCode = pinCode;

        console.log(FormDetails);
        getRecommendedCost()
    }
}

// ==================================
// posting form data
const postData = async () => {
    ToogleLoadingAnimation();
    try {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(FormDetails)
        }

        const response = await fetch("https://backend.gofloww.co/api/v1/3pl-form/submit-3pl-form/", options)
        //const response = await fetch("http://127.0.0.1:8000/api/v1/3pl-form/submit-3pl-form/", options)

        //const response = await fetch("https://cors-anywhere.herokuapp.com/https://backend.gofloww.co/api/v1/3pl-form/submit-3pl-form/", options)
        if (response.ok) {
            document.getElementById('success-animation-id').classList.toggle('hide');
            // location.reload();
            ToogleLoadingAnimation();
        } else {
            let error = response.status;
            console.log(error);
            ToogleLoadingAnimation();
        }


    } catch (e) {
        ToogleLoadingAnimation();
        console.log("Form not submitted", e);
    }

}

// ==================================
// submit handlers 

const SubmitHandler2 = (e) => {
    document.getElementById("form1").classList.toggle("visi");
    document.getElementById("form2").classList.toggle("visi");
}

const SubmitHandler3 = (e) => {
    let baseCharge = document.getElementById("baseCharge").value;
    let perKmCharge = document.getElementById("perKmCharge").value;
    let perKgCharge = document.getElementById("perKgCharge").value;
    let rentalBaseCharge = document.getElementById("RentalbaseCharge").value;
    let rentalPerHrCharge = document.getElementById("RentalperHrCharge").value;
    let rentalPerKmCharge = document.getElementById("RentalperKmCharge").value;
    let yourLogo = document.getElementById("YourLogo").value;
    let headlineText = document.getElementById("headlineText").value;
    let intro = document.getElementById("Intro").value;
    let colorTheme = document.getElementById("colorTheme").value;
    let preferredLanguage = document.getElementById("preferredLanguage").value;

    if (!yourLogo) yourLogo = "logo0";
    if (!headlineText) headlineText = "text0";
    if (!intro) intro = "text0";
    if (!colorTheme) colorTheme = "palette0";
    if (!preferredLanguage) preferredLanguage = "en";

    if (baseCharge != "" && perKmCharge != "" && perKgCharge != "" && rentalBaseCharge != "" && rentalPerHrCharge != "" && rentalPerKmCharge != "" && yourLogo && headlineText && intro && colorTheme && preferredLanguage) {
        FormDetails.baseCharge = baseCharge;
        FormDetails.perKmCharge = perKmCharge;
        FormDetails.perKgCharge = perKgCharge;
        FormDetails.rentalBaseCharge = rentalBaseCharge;
        FormDetails.rentalPerHrCharge = rentalPerHrCharge;
        FormDetails.rentalPerKmCharge = rentalPerKmCharge;
        FormDetails.yourLogo = yourLogo;
        FormDetails.headlineText = headlineText;
        FormDetails.intro = intro;
        FormDetails.colorTheme = colorTheme;
        FormDetails.preferredLanguage = preferredLanguage;
    }

    postData();

}

// ==================================
// advance options in form2 

AdvBar.addEventListener("click", () => {
    document.getElementsByClassName("advDetails")[0].classList.toggle("visi2");
})