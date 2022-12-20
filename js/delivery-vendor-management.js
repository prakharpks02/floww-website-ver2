var orderList = [{
    'vendorName':'Mahavir Transports',
    'orderId': 'ORD0000005',
    'dropAddress': 'Juhu Beach, Juhu Tara Rd, Juhu, Mumbai, Maharashtra, India',
    'dropContact': '9910530300',
    'pickAddress': 'Juhu Beach, Juhu Tara Rd, Juhu, Mumbai, Maharashtra, India',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'requested',
    'placedContactNo': '9910530300',
    'placedTimestamp': '29 January, 2022',
    'taskId': 'TAS000008',
}, {
    'vendorName':'Mahavir Transports',
    'orderId': 'ORD0000005',
    'dropAddress': 'Juhu Beach, Juhu Tara Rd, Juhu, Mumbai, Maharashtra, India',
    'dropContact': '9910530300',
    'pickAddress': 'Juhu Beach, Juhu Tara Rd, Juhu, Mumbai, Maharashtra, India',
    'pickContact': '9910530300',
    'weight': '20',
    'instruction': 'Leave near watchman',
    'status': 'delivered',
    'placedContactNo': '9910530300',
    'placedTimestamp': '29 January, 2022',
    'taskId': 'TAS000008',
}, ];

function ToogleLoadingAnimation() {
    document.getElementById('loading-animation-id').classList.toggle('hide');
}

Vue.component('order-row-component', {
    props: {
        'orderdata': Object,
    },
    delimiters: ['[[', ']]'],
    template: `
                <div class="order-list-item box" @click="$emit('view-order')">
                    <div class="columns is-mobile is-vcentered is-gapless" style="margin-bottom: 0px;">
                        <div class="column is-6">
                            <span class="order-id-span">[[orderdata.orderId]]</span>
                            <span class="contact-no-span">[[orderdata.placedContactNo]]</span>
                        </div>
                        <div class="column is-6 has-text-right">
                            <a style="text-transform:uppercase;" class="button is-small" :class="{'is-warning':orderdata.status=='requested','is-success':orderdata.status=='delivered', 'is-danger':orderdata.status=='cancelled'}">[[orderdata.status]]</a>
                            <br>
                            <span class="date-span">[[orderdata.placedTimestamp]]</span>
                        </div>
                    </div>

                    <div class="columns is-mobile is-vcentered is-gapless">
                        <div class="column">
                            <span class="address-span">[[orderdata.dropAddress]]</span>
                        </div>
                        <div class="column is-1">
                            <img class="" style="width: 18px;" src="img/271228-060a8206.png">
                        </div>
                    </div>

                </div>
			`,
})


var app1 = new Vue({
    el: '#main-page-id',
    data: {
        'orderList': orderList,
        'orderDetail': {},
        'viewOrderStatus': false,
        'currentIndex': 0,
    },
    methods: {
        ViewOrder: function (orderid, indexno) {
            console.log(orderid);
            this.orderDetail = this.orderList[indexno];
            this.viewOrderStatus = true;
            this.currentIndex = indexno;
        },
        DownloadBill: function (taskid) {
            console.log(taskid);
            window.open("https://backend.gofloww.co/api/v1/documents/receipt/" + taskid, '_blank');
        },
        OrderDelivered: function (orderid) {
            console.log(orderid);
            axios.post(globalApiUrl + '/api/v1/search/update-order-status/', {
                    orderId: orderid,
                    status: 'delivered',
                    latitude:'N/A',
                    longitude:'N/A',
                })
                .then(function (response) {
                    let responseData = JSON.parse(response.data);
                    console.log(responseData);
                    app1.orderDetail.status = "delivered";
                    app1.orderList[app1.currentIndex].status = "delivered";
                })
                .catch(function (error) {
                    console.log(error);
                    window.alert('Server Error, Please Try Again!');
                });
        },
        ShareWhatsapp: function (customercontact, placedon, vendorname, orderid, taskid) {
            let vendorNameEncoded = encodeURI(vendorname);
            let placedOnEncoded = encodeURI(placedon);

            let whatsappMessage = `Greetings%20from%20${vendorNameEncoded}!%0AYou%20can%20track%20your%20order%20(${orderid})%2C%20placed%20on%20${placedOnEncoded}%20with%20tracking%20link%20below%0Ahttps%3A%2F%2Fgofloww.co%2Ftrack-order%3Forder-id%3D${orderid}%26task-id%3D${taskid}%0AThank%20you%20for%20choosing%20us!`;
            let finalUrl = 'https://wa.me/91'+customercontact+'?text='+whatsappMessage;
            window.open(finalUrl, '_blank');
        },
    },
    mounted() {
        axios.get(globalApiUrl + '/api/v1/3pl-form/get-delivery-vendor-order-list/', {
                params: {
                    vendorId: globalQueryVendorId,
                }
            })
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);
                app1.orderList = responseData;
                ToogleLoadingAnimation();
            })
            .catch(function (error) {
                console.log(error);
                ToogleLoadingAnimation();
                window.alert('Server Error, please try again later');
            });
    },
})