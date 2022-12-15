// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
    apiKey: "AIzaSyDXsc8uC-s9UE0rg4VPZrqU1iSxgJaazgo",
    authDomain: "floww-ver1.firebaseapp.com",
    projectId: "floww-ver1",
    storageBucket: "floww-ver1.appspot.com",
    messagingSenderId: "453167194719",
    appId: "1:453167194719:web:df77a0c6b0d99e52ae71ea",
    measurementId: "G-1SXYRGVCNW"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
var storageRef = storage.ref();
var draftFolder = storageRef.child('draftFiles');

// --------------------------------------- Firebase End

// --------------------------------------- Major Functions

function ToogleLoadingAnimation() {
    document.getElementById('loading-animation-id').classList.toggle('hide');
}

function OrderPlacedSuccess(vendorname, taskid) {
    document.getElementById('order-placed-text-container-id').innerHTML = vendorname;

    let trackingUrl = 'https://gofloww.co/track-order-batch?task-id=' + taskid;
    document.getElementById('order-tracking-link-id').href = trackingUrl;

    document.getElementById('success-order-place-id').classList.remove('hide');
}

// ------------------------------------------------------------ Vue Starts


var app1 = new Vue({
    el: '#search-page-id',
    // delimiters: ['[[', ']]'],
    data: {
        'searchLoading': false,

        'orderForm': {
            'contactNo': '',
            'vendorCode': '',
            'vendorName': '',
            'companyName': '',
            'productType': '',
            'deliveryDate': '',
            'orderType': 'perOrder',
            'orderList': [],
            'rentalPlan': 'plan0',
            'serviceList': [],
        },
        'fileDetail': {
            'name': 'Upload File',
            'status': '',
            'file': '',
            'format': '',
            'fileLink': ''
        },
    },
    methods: {
        SubmitOrderForm: function () {
            if (this.orderForm.productType == '') {
                this.orderForm.productType = 'product0';
            }

            if (this.orderForm.companyName == '' || this.orderForm.deliveryDate == '' || this.orderForm.contactNo == '') {
                window.alert("Please Add your Company name, Contact No. and select delivery date");
            } else {

                if (this.orderForm.orderType == 'perOrder' && this.orderForm.orderList.length == 0) {
                    window.alert("Please add atleast 1 order, or choose rental.");
                } else {
                    ToogleLoadingAnimation();
                    axios.post(globalApiUrl + '/api/v1/search/request-deliveries-guest/', {
                        contactNo: this.orderForm.contactNo,
                        vendorCode: this.orderForm.vendorCode,
                        productDescription: this.orderForm.productType,
                        companyName: this.orderForm.companyName,
                        deliveryDate: this.orderForm.deliveryDate,
                        orderType: this.orderForm.orderType,
                        rentalPlan: this.orderForm.rentalPlan,
                        orderList: this.orderForm.orderList,
                        serviceList: this.orderForm.serviceList,
                    })
                        .then(function (response) {
                            let responseData = JSON.parse(response.data);
                            console.log(responseData.status);

                            if (responseData.status == 'success') {
                                OrderPlacedSuccess(responseData.vendorName, responseData.taskId);
                            } else {
                                window.alert(responseData.message);
                            };
                            ToogleLoadingAnimation();
                        })
                        .catch(function (error) {
                            ToogleLoadingAnimation();
                            window.alert('Server Error, Please Try Again!');
                        });
                }

            }

        }
    },
    mounted() {
        // axios.get(globalApiUrl + '/api/v1/auth/check-user-token-auth/')
        //     .then(function (response) {
        //         let responseData = JSON.parse(response.data);
        //         console.log(responseData);
        //         if (responseData.authVal) {
        //             app1.orderForm.ContactNo = responseData.contactNo;
        //         } else {
        //             app1.orderForm.ContactNo = '';
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        ToogleLoadingAnimation();
    },
})