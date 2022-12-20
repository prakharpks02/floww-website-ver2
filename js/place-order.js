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

const orderList = [{
    'pickupNo': 9910530300,
    'pickup': 'Signature Park, Wakad, Pune',
    'dropNo': 8879138857,
    'drop': 'Cliff Garden, Hinjewadi, Phase 3, Pune',
    'weight': 2,
    'instruction': 'Deliver to Watchman',
}, {
    'pickupNo': 9910530300,
    'pickup': 'Signature Park, Wakad, Pune',
    'dropNo': 8879138857,
    'drop': 'Cliff Garden, Hinjewadi, Phase 3, Pune',
    'weight': 2,
    'instruction': 'Deliver to Watchman',
}, {
    'pickupNo': 9910530300,
    'pickup': 'Signature Park, Wakad, Pune',
    'dropNo': 8879138857,
    'drop': 'Cliff Garden, Hinjewadi, Phase 3, Pune',
    'weight': 2,
    'instruction': 'Deliver to Watchman',
}, {
    'pickupNo': 9910530300,
    'pickup': 'Signature Park, Wakad, Pune',
    'dropNo': 8879138857,
    'drop': 'Cliff Garden, Hinjewadi, Phase 3, Pune',
    'weight': 2,
    'instruction': 'Deliver to Watchman',
},]

// --------------------------------------- Major Functions

function ToogleLoadingAnimation() {
    document.getElementById('loading-animation-id').classList.toggle('hide');
}

function SelectUploadExcel() {
    document.getElementById('place-order-toggle-id').classList.remove('is-light');
    document.getElementById('upload-excel-toggle-id').classList.add('is-light');

    document.getElementById('place-order-container-id').classList.add('hide');
    document.getElementById('upload-excel-container-id').classList.remove('hide');
}

function SelectPlaceOrder() {
    document.getElementById('place-order-toggle-id').classList.add('is-light');
    document.getElementById('upload-excel-toggle-id').classList.remove('is-light');

    document.getElementById('place-order-container-id').classList.remove('hide');
    document.getElementById('upload-excel-container-id').classList.add('hide');
}

function ExcelErrorBox() {
    document.getElementById('excel-error-container-id').classList.toggle('hide');
}

function OrderPlacedSuccess(vendorname, taskid) {
    document.getElementById('order-placed-text-container-id').innerHTML = vendorname;

    let trackingUrl = 'https://gofloww.co/track-order-batch?task-id=' + taskid;
    document.getElementById('order-tracking-link-id').href = trackingUrl;

    document.getElementById('success-order-place-id').classList.remove('hide');
}

function VendorNotFound() {
    document.getElementById('no-vendor-found-id').classList.remove('hide');
    document.getElementById('search-page-id').classList.add('hide');
}

function ToggleViewList() {
    let selectedelement = document.getElementById('toggle-view-list-id');
    document.getElementById('mobile-per-order-list-container').classList.toggle('hide');
    if (selectedelement.innerHTML == 'View Orders') {
        selectedelement.innerHTML = 'Close Orders';
    } else {
        selectedelement.innerHTML = 'View Orders';
    }
}

function ShowPopUp(text1, text2) {
    document.getElementById('pop-up-id').classList.remove('hide');
    document.getElementById('pop-up-content-header-id').innerHTML = '₹ ' + text1;
    document.getElementById('pop-up-content-content-id').innerHTML = `For better deals & discounts, <a href="tel:+91${text2}" target="_blank">get in touch</a>`;
}

function ClosePopUp() {
    document.getElementById('pop-up-id').classList.add('hide');
}

// ------------------------------------------------------------ Vue Starts


var app1 = new Vue({
    el: '#search-page-id',
    // delimiters: ['[[', ']]'],
    data: {

        'countryCode': countryCode,
        'tagNames': tagNames,
        'vendorCities': vendorCities,
        'filterTags': filterTags,
        'serviceTags': serviceTags,
        'rentalPlans': rentalPlans,
        'productTags': productTags,

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
        'pickupCheckbox': false,
        'orderTempElement': {
            'pickup': '',
            'pickupPincode': '',
            'pickupNo': '',
            'drop': '',
            'dropPincode': '',
            'dropNo': '',
            'weight': '',
            'instruction': '',
            'length': '',
            'breadth': '',
            'height': '',
        },
        'selectedVendorService': [],
        'orderFormMobile': {
            'formStatus': 'base',
            'error1': false,
            'error2': false,
        },
        'fileDetail': {
            'name': 'Upload File',
            'status': '',
            'file': '',
            'format': '',
            'fileLink': ''
        },
        'vendorPro': false,
        'excelError': {
            'row': 12,
            'column': 4,
            'type': 'Format Invalid',
        },
    },
    methods: {
        ChangeDeliveryDate: function (event) {
            this.orderForm.deliveryDate = Math.round(new Date(event.currentTarget.value).getTime() / 1000);
            console.log(this.orderForm.deliveryDate);
        },
        OrderFormMobileNext: function () {
            if (this.orderForm.companyName == '' || this.orderForm.productType == '' || this.orderForm.deliveryDate == '' || this.orderForm.contactNo == '') {
                this.orderFormMobile.error1 = true;
            } else {
                this.orderFormMobile.formStatus = 'advance';
            };
        },
        RequestDelivery: function (vendorcode, vendorname) {
            this.orderForm.vendorCode = vendorcode;
            this.orderForm.vendorName = vendorname;
        },
        AddOrder: function () {

            if (this.orderTempElement.pickup == '' || this.orderTempElement.pickupNo == '' || this.orderTempElement.drop == '' || this.orderTempElement.dropNo == '' || this.orderTempElement.weight == '') {
                window.alert('All fields except Instruction, are mandatory.');
            } else {
                let orderTempElementVar = JSON.parse(JSON.stringify(this.orderTempElement));
                orderTempElementVar.instruction = orderTempElementVar.instruction+' ('+orderTempElementVar.length.toString()+'cm x '+orderTempElementVar.breadth.toString()+'cm x '+orderTempElementVar.height.toString()+'cm)';
                this.orderForm.orderList.push(orderTempElementVar);

                if (!this.pickupCheckbox) {
                    this.orderTempElement.pickup = '';
                    this.orderTempElement.pickupPincode = '';
                    this.orderTempElement.pickupNo = '';
                }
                this.orderTempElement.drop = '';
                this.orderTempElement.dropPincode = '';
                this.orderTempElement.dropNo = '';
                this.orderTempElement.weight = '';
                this.orderTempElement.instruction = '';
                this.orderTempElement.length = '';
                this.orderTempElement.breadth = '';
                this.orderTempElement.height = '';
            }


        },
        DeleteOrder: function (orderindex) {
            this.orderForm.orderList.splice(orderindex, 1);
        },
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

        },
        GetCostEstimate: function () {
            ToogleLoadingAnimation();
            axios.post(globalApiUrl + '/api/v1/search/get-cost-estimate/', {
                vendorCode: this.orderForm.vendorCode,
                orderType: this.orderForm.orderType,
                rentalPlan: this.orderForm.rentalPlan,
                orderList: this.orderForm.orderList,
            })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);

                    if (responseData.status == 'success') {
                        ShowPopUp(responseData.message, responseData.vendorContact);
                    } else {
                        window.alert(responseData.message);
                    };
                    ToogleLoadingAnimation();
                })
                .catch(function (error) {
                    window.alert('Server Error, Please Try Again!');
                    ToogleLoadingAnimation();
                });
        },
        AddServiceTag: function (formtype) {

            if (this.orderForm.serviceList.length == 4) {
                window.alert('Maximum service limit reached.')
            } else {
                let serviceVal = '';
                if (formtype == 'mobile') {
                    serviceVal = document.getElementById('request-service-tag-mobile').value;
                } else {
                    serviceVal = document.getElementById('request-service-tag-desktop').value;
                }

                console.log(serviceVal);
                if (serviceVal == '') {
                    window.alert('No Service Selected');
                } else if (this.orderForm.serviceList.includes(serviceVal)) {
                    window.alert('Service already selected');
                } else {
                    this.orderForm.serviceList.push(serviceVal);
                }

            }

        },
        UploadExcelDocumentLocal: function () {
            this.fileDetail.file = document.getElementById('excelUploadMobile').files[0];
            let fileName = document.getElementById('excelUploadMobile').files[0].name;
            this.fileDetail.name = fileName.substring(0, fileName.lastIndexOf('.'));
            this.fileDetail.format = fileName.substring(fileName.lastIndexOf('.') + 1);
            console.log(this.fileDetail.format);
        },
        UploadExcelDocument: function () {
            ToogleLoadingAnimation();
            console.log('Excel Upload function started');

            let fileMetaData = {
                contentType: this.fileDetail.format,
            };

            draftFolder.child(globalVendorId + '_orders').put(this.fileDetail.file, fileMetaData)
                .then(function (snapshot) {
                    console.log('Bucket upload done');
                    snapshot.ref.getDownloadURL().then(function (DownloadURL) {
                        console.log('Get File at : ' + DownloadURL);
                        axios.post(globalApiUrl + '/api/v1/3pl-form/excel-order-upload/', {
                            vendorCode: app1.orderForm.vendorCode,
                            xlsxURL: DownloadURL,
                        })
                            .then(function (response) {
                                let responseData = JSON.parse(response.data);
                                console.log(responseData);
                                app1.loadingStatus = false;
                                if (responseData.status == 'success') {
                                    OrderPlacedSuccess(responseData.vendorName, responseData.taskId);
                                } else {
                                    app1.excelError.row = responseData.error.row;
                                    app1.excelError.column = responseData.error.column;
                                    app1.excelError.type = responseData.error.type;
                                    ExcelErrorBox();
                                }
                                ToogleLoadingAnimation();
                            })
                            .catch(function (error) {
                                app1.loadingStatus = false;
                                app1.excelError.type = 'Server Error';
                                ExcelErrorBox();
                                ToogleLoadingAnimation();
                                // window.alert('System Update in Progress, please WhatsApp your excel to +918879138857');
                            });
                    });
                })
                .catch(function (error) {
                    app1.excelError.type = 'Server Error';
                    ExcelErrorBox();
                    ToogleLoadingAnimation();
                    // window.alert('System Update in Progress, please WhatsApp your excel to +918879138857');
                });
            // axios.post(globalApiUrl + '/api/v1/3pl-form/excel-order-upload/', {
            //         vendorCode: app1.orderForm.vendorCode,
            //         xlsxURL: 'https://firebasestorage.googleapis.com/v0/b/flowwpublic.appspot.com/o/template_upload_orders_example_1.xlsx?alt=media&token=12ef5475-779b-42b4-be68-8b3df662038e',
            //     })
            //     .then(function (response) {
            //         let responseData = JSON.parse(response.data);
            //         console.log(responseData);
            //         app1.loadingStatus = false;
            //         if (responseData.status == 'success') {
            //             OrderPlacedSuccess(responseData.vendorName, responseData.taskId);
            //         } else {
            //             app1.excelError.row = responseData.error.row;
            //             app1.excelError.column = responseData.error.column;
            //             app1.excelError.type = responseData.error.type;
            //             ExcelErrorBox();
            //         }
            //         ToogleLoadingAnimation();
            //     })
            //     .catch(function (error) {
            //         app1.loadingStatus = false;
            //         app1.excelError = true;
            //         ToogleLoadingAnimation();
            //         window.alert('System Update in Progress, please WhatsApp your excel to +918879138857');
            //     });
        },
        CheckQueryParam: function () {
            globalVendorId = GetQueryParams('vendor-id');

            if (globalVendorId != 'None') {

                axios.get(globalApiUrl + '/api/v1/search/get-vendor-code/', {
                    params: {
                        vendorId: globalVendorId,
                    }
                })
                    .then(function (response) {
                        let responseData = JSON.parse(response.data);
                        console.log(responseData);

                        if (Object.keys(responseData).length == 0) {
                            VendorNotFound();
                        } else {
                            app1.RequestDelivery(responseData.vendorCode, responseData.vendorName);
                            app1.vendorPro = responseData.vendorPro;
                        }

                        ToogleLoadingAnimation();
                    })
                    .catch(function (error) {
                        console.log(error);
                        VendorNotFound();
                        ToogleLoadingAnimation();
                    });
            } else {
                VendorNotFound();
                ToogleLoadingAnimation();
            }
        }
    },
    async mounted() {

        await this.CheckQueryParam();

        axios.get(globalApiUrl + '/api/v1/auth/check-user-token-auth/')
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);
                if (responseData.authVal) {
                    app1.orderForm.ContactNo = responseData.contactNo;
                } else {
                    app1.orderForm.ContactNo = '';
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        //ToogleLoadingAnimation();
    },
})