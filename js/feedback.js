var orderDetail = {
    'vendorName': 'OrgoEast',
    'vendorContact': '9910530300',
    'vendorWebsite': 'https://gofloww.co',
    'orderId': 'ORD0000005',
    'instruction': 'Products for delivery are Exotic Green Tea X1',
    'status': 'delivered',
    'productCost': '1500',
    'agentName': 'Shiprocket',
    'agentNo': '9910530300',
    'deliveredDate': '2:30 pm, 20/10/22',
    'version': 'ver1',
    'logoLink':'img/logo/orgoeast.png',
    'themeColor': '#63e9d7'
};

const productListConst = ['Packaging & Spillage', 'Item Broken', 'Item Missing', 'Different then ordered', 'Other']
const deliveryListConst = ['Late Delivery', 'Delivery Error', 'Unresponsive', 'Rude Delivery Person', 'Other']

function ToogleLoadingAnimation() {
    document.getElementById('loading-animation-id').classList.toggle('hide');
}

function ratingStar(starno) {

    if (starno != 'N/A') {
        let starElementList = document.getElementsByClassName('star-check-group');
        for (i = 0; i < starElementList.length; i++) {
            starElementList[i].classList.remove('star-checked');
        }
        for (i = 0; i < starno; i++) {
            starElementList[i].classList.add('star-checked');
        }
        app1.productForm.rating = starno;
    }
}

function ratingStar2(starno) {

    if (starno != 'N/A') {
        let starElementList = document.getElementsByClassName('star-check-group-2');
        for (i = 0; i < starElementList.length; i++) {
            starElementList[i].classList.remove('star-checked');
        }
        for (i = 0; i < starno; i++) {
            starElementList[i].classList.add('star-checked');
        }
        app1.deliveryForm.rating = starno;
    }
}


var app1 = new Vue({
    el: '#main-page-id',
    data: {
        'orderDetail': orderDetail,
        'productForm': {
            'feedback': '',
            'rating': 'N/A'
        },
        'deliveryForm': {
            'feedback': '',
            'rating': 'N/A'
        },
        'feedbackOverlay': {
            'content':'',
            'type':''
        },
        'productList': [false, false, false, false, false],
        'deliveryList': [false, false, false, false, false],
    },
    methods: {
        SelectProduct: function (indexno) {
            if (this.productList[indexno]) {
                this.productList[indexno] = false;
                document.getElementsByClassName('product-list-class')[indexno].classList.remove('is-success');
            } else {
                this.productList[indexno] = true;
                document.getElementsByClassName('product-list-class')[indexno].classList.add('is-success');
            }
        },
        SelectDelivery: function (indexno) {
            if (this.deliveryList[indexno]) {
                this.deliveryList[indexno] = false;
                document.getElementsByClassName('delivery-list-class')[indexno].classList.remove('is-success');
            } else {
                this.deliveryList[indexno] = true;
                document.getElementsByClassName('delivery-list-class')[indexno].classList.add('is-success');
            }
        },
        SubmitForm: function () {
            ToogleLoadingAnimation();
            console.log(this.productForm);

            for(i=0;i<this.productList.length;i++){
                if(this.productList[i]) {
                    this.productForm.feedback=this.productForm.feedback + productListConst[i] + ' | ';
                }
            }

            for(i=0;i<this.deliveryList.length;i++){
                if(this.deliveryList[i]) {
                    this.deliveryForm.feedback=this.deliveryForm.feedback + deliveryListConst[i] + ' | ';
                }
            }

            axios.post(globalApiUrl + '/api/v1/search/order-feedback-submit/', {
                    orderId: globalQueryOrderId,
                    productFeedback: this.productForm.feedback,
                    productRating: JSON.stringify(this.productForm.rating),
                    deliveryFeedback: this.deliveryForm.feedback,
                    deliveryRating: JSON.stringify(this.deliveryForm.rating),
                })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData.status);
                    document.getElementById('success-animation-id').classList.toggle('hide');
                    ToogleLoadingAnimation();
                })
                .catch(function (error) {
                    ToogleLoadingAnimation();
                    window.alert('Server Error, Please Try Again!');
                });
        }
    },
    mounted() {

        if (globalQueryOrderId == 'None') {
            window.alert('Link Invalid');
        } else {
            axios.get(globalApiUrl + '/api/v1/search/order-feedback/', {
                    params: {
                        orderId: globalQueryOrderId,
                    }
                })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);

                    if (responseData.status == 'success') {
                        // app1.productForm.feedback = responseData.productFeedback;
                        // app1.productForm.rating = responseData.productRating;
                        // app1.deliveryForm.feedback = responseData.deliveryFeedback;
                        // app1.deliveryForm.rating = responseData.deliveryRating;

                        // ratingStar(responseData.productRating);
                        // ratingStar2(responseData.deliveryRating);
                        if (responseData.productRating!='N/A') {
                            document.getElementById('success-animation-id').classList.toggle('hide');
                        }

                        app1.orderDetail = responseData.orderDetail;

                        document.querySelector(':root').style.setProperty('--themeColor',responseData.orderDetail.themeColor);

                        ToogleLoadingAnimation();
                    } else {
                        window.alert('Link Invalid');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    ToogleLoadingAnimation();
                    window.alert('Server Error, please try again later');
                });
        }

        //ToogleLoadingAnimation();
    },
})