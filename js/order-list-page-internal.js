var orderList = [{
    'current_status': '123123',
    'orderId': 'Prakhar Kumar',
    'pickupAddress': 'Shalom Shalom Shalom Shalom Shalom Shalom',
    'dropAddress': 'Shalom Shalom Shalom Shalom Shalom Shalom Shalom Shalom',
    'pickupContactNo': 'freeze',
    'dropContactNo': 'freeze',
    'vendorId': 'freeze',
    'customerId': 'freeze',
    'deliveryAgentId': 'freeze',
}, {
    'current_status': '123123',
    'orderId': 'Prakhar Kumar',
    'pickupAddress': 'Shalom Shalom Shalom Shalom Shalom Shalom',
    'dropAddress': 'Shalom Shalom Shalom Shalom Shalom Shalom Shalom Shalom',
    'pickupContactNo': 'freeze',
    'dropContactNo': 'freeze',
    'vendorId': 'freeze',
    'customerId': 'freeze',
    'deliveryAgentId': 'freeze',
}, {
    'current_status': '123123',
    'orderId': 'Prakhar Kumar',
    'pickupAddress': 'Shalom Shalom Shalom Shalom Shalom Shalom',
    'dropAddress': 'Shalom Shalom Shalom Shalom Shalom Shalom Shalom Shalom',
    'pickupContactNo': 'freeze',
    'dropContactNo': 'freeze',
    'vendorId': 'freeze',
    'customerId': 'freeze',
    'deliveryAgentId': 'freeze',
}, ];

// --------------------------------------- Major Functions

function ToogleLoadingAnimation() {
    document.getElementById('loading-animation-id').classList.toggle('hide');
}

// ------------------------------------------------------------ Vue Starts

Vue.component('order-row-component', {
    props: {
        'orderdata': Object,
    },
    delimiters: ['[[', ']]'],
    template: `
				<tr>
					<td><span class="tag is-info">[[orderdata.current_status]]</span></td>
					<td>[[orderdata.orderId]]</td>
					<td>[[orderdata.pickupAddress]]</td>
					<td>[[orderdata.dropAddress]]</td>
					<td>[[orderdata.pickupContactNo]]</td>
                    <td>[[orderdata.dropContactNo]]</td>
                    <td>[[orderdata.vendorId]]</td>
                    <td>[[orderdata.customerId]]</td>
                    <td>[[orderdata.deliveryAgentId]]</td>
				</tr>
			`,
})


var app1 = new Vue({
    el: '#main-page-id',
    delimiters: ['[[', ']]'],
    data: {
        'orderList': orderList,
    },
    mounted() {
        axios.get(globalApiUrl + '/api/v1/insight-apis/get-list-of-orders/')
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);
                app1.orderList = responseData.orderList;
                ToogleLoadingAnimation();
            })
            .catch(function (error) {
                console.log(error);
                ToogleLoadingAnimation();
            });
    },
})