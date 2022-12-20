var orderDetail = {
    'vendorName': 'OrgoEast',
    'vendorContact': '9910530300',
    'vendorWebsite': 'https://gofloww.co',
    'orderId': 'ORD0000005',
    'dropAddress': 'Juhu Beach, Juhu Tara Rd, Juhu, Mumbai, Maharashtra, India',
    'dropContact': '9910530300',
    'pickAddress': 'Juhu Beach, Juhu Tara Rd, Juhu, Mumbai, Maharashtra, India',
    'pickContact': '9910530300',
    'customerName': 'Prakhar Singh',
    'customerNo': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'productCost': '1500',
    'status': 'delivered',
    'agentName': 'Shiprocket',
    'agentNo': '9910530300',
    'deliveryDate': '25/10/2022',
    'statusList': {
        'placed': '2:30 pm, 20/10/22',
        'assigned': '2:30 pm, 20/10/22',
        'enroute': '2:30 pm, 20/10/22',
        'delivered': '-',
    },
    'version': 'ver1',
    'logoLink':'img/logo/orgoeast.png',
    'themeColor': '#63e9d7'
};

function ToogleLoadingAnimation() {
    document.getElementById('loading-animation-id').classList.toggle('hide');
}


var app1 = new Vue({
    el: '#main-page-id',
    data: {
        'orderDetail': orderDetail,
    },
    // methods: {
    //     ContactTransporter: function (vendorcontact) {
    //         let whatsappUrl = 'https://wa.me/91' + vendorcontact;
    //         window.open(whatsappUrl, '_blank');
    //     }
    // },
    mounted() {
        if (globalQueryOrderId == 'None') {
            window.alert('Link Invalid');
        } else {
            axios.get(globalApiUrl + '/api/v1/search/track-order/', {
                    params: {
                        orderId: globalQueryOrderId,
                    }
                })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);

                    if (responseData.status == 'success') {
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