var vendorList = [{
    'vendorId': '123123',
    'contactNo': 'Prakhar Kumar',
    'contactPerson': 'error',
    'vendorName': '4.7',
    'region': 'freeze',
    'vendorPlan': 'freeze',
    'deliveryAgentList': [{
        'delivery_agent_id': 'AGE000001',
        'delivery_agent_name': 'Self'
    }, {
        'delivery_agent_id': 'AGE000001',
        'delivery_agent_name': 'Self'
    }, {
        'delivery_agent_id': 'AGE000001',
        'delivery_agent_name': 'Self'
    }]
}, {
    'vendorId': '123123',
    'contactNo': 'Prakhar Kumar',
    'contactPerson': 'error',
    'vendorName': '4.7',
    'region': 'freeze',
    'vendorPlan': 'freeze',
    'deliveryAgentList': [{
        'delivery_agent_id': 'AGE000001',
        'delivery_agent_name': 'Self'
    }]
}, {
    'vendorId': '123123',
    'contactNo': 'Prakhar Kumar',
    'contactPerson': 'error',
    'vendorName': '4.7',
    'region': 'freeze',
    'vendorPlan': 'freeze',
    'deliveryAgentList': [{
        'delivery_agent_id': 'AGE000001',
        'delivery_agent_name': 'Self'
    }, {
        'delivery_agent_id': 'AGE000001',
        'delivery_agent_name': 'Self'
    }]
}];

// --------------------------------------- Major Functions

function ToogleLoadingAnimation() {
    document.getElementById('loading-animation-id').classList.toggle('hide');
}

// ------------------------------------------------------------ Vue Starts

Vue.component('vendor-row-component', {
    props: {
        'vendordata': Object,
    },
    delimiters: ['[[', ']]'],
    template: `
				<tr>
					<td><span class="tag is-info">[[vendordata.vendorPlan]]</span></td>
					<td>[[vendordata.vendorId]]</td>
					<td>[[vendordata.contactNo]]</td>
					<td>[[vendordata.contactPerson]]</td>
					<td>[[vendordata.vendorName]]</td>
                    <td>[[vendordata.region]]</td>
                    <td>
                        <li v-for="agent in vendordata.deliveryAgentList">[[agent.delivery_agent_id]] | [[agent.delivery_agent_name]]</li>
                    </td>
				</tr>
			`,
})


var app1 = new Vue({
    el: '#main-page-id',
    delimiters: ['[[', ']]'],
    data: {
        'vendorList': vendorList,
    },
    mounted() {
        axios.get(globalApiUrl + '/api/v1/insight-apis/get-list-of-vendors/')
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);
                app1.vendorList = responseData.vendorList;
                ToogleLoadingAnimation();
            })
            .catch(function (error) {
                console.log(error);
                ToogleLoadingAnimation();
            });
    },
})