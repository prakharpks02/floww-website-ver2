var orderDetail = {
    'vendorName':'Mahavir Transports',
    'vendorContact':'9910530300',
    'orderId': 'ORD0000005',
    'dropAddress': 'Juhu Beach, Juhu Tara Rd, Juhu, Mumbai, Maharashtra, India',
    'dropContact': '9910530300',
    'pickAddress': 'Juhu Beach, Juhu Tara Rd, Juhu, Mumbai, Maharashtra, India',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'delivered',
    'placedContactNo': '9910530300',
    'placedTimestamp': '29 January, 2022'
};

function ToogleLoadingAnimation() {
    document.getElementById('loading-animation-id').classList.toggle('hide');
}


var app1 = new Vue({
    el: '#main-page-id',
    data: {
        'orderDetail': orderDetail,
    },
    methods: {
        ContactTransporter: function(vendorcontact) {
            let whatsappUrl = 'https://wa.me/91'+vendorcontact;
            window.open(whatsappUrl,'_blank');
        }
    },
    mounted() {
        axios.get(globalApiUrl + '/api/v1/search/get-order-detail/', {
                params: {
                    orderId: globalQueryOrderId,
                    taskId: globalQueryTaskId,
                }
            })
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);
                app1.orderDetail = responseData;
                ToogleLoadingAnimation();
            })
            .catch(function (error) {
                console.log(error);
                ToogleLoadingAnimation();
                window.alert('Server Error, please try again later');
            });
        //ToogleLoadingAnimation();
    },
})