var agentList = [{
    'agentStatus': '123123',
    'deliveryAgentId': 'Prakhar Kumar',
    'agentName': 'error',
    'contactNo': '4.7',
    'deliveryVendorList': [{
        'vendor_id': 'AGE000001',
    }, {
        'vendor_id': 'AGE000001',
    }, {
        'vendor_id': 'AGE000001',
    }]
}, {
    'agentStatus': '123123',
    'deliveryAgentId': 'Prakhar Kumar',
    'agentName': 'error',
    'contactNo': '4.7',
    'deliveryVendorList': [{
        'vendor_id': 'AGE000001',
    }, {
        'vendor_id': 'AGE000001',
    }, {
        'vendor_id': 'AGE000001',
    }]
}, {
    'agentStatus': '123123',
    'deliveryAgentId': 'Prakhar Kumar',
    'agentName': 'error',
    'contactNo': '4.7',
    'deliveryVendorList': [{
        'vendor_id': 'AGE000001',
    }, {
        'vendor_id': 'AGE000001',
    }, {
        'vendor_id': 'AGE000001',
    }]
}, ];


// --------------------------------------- Major Functions

function ToogleLoadingAnimation() {
    document.getElementById('loading-animation-id').classList.toggle('hide');
}

// ------------------------------------------------------------ Vue Starts

Vue.component('agent-row-component', {
    props: {
        'agentdata': Object,
    },
    delimiters: ['[[', ']]'],
    template: `
				<tr>
					<td><span class="tag is-info">[[agentdata.agentStatus]]</span></td>
					<td>[[agentdata.deliveryAgentId]]</td>
					<td>[[agentdata.agentName]]</td>
					<td>[[agentdata.contactNo]]</td>
                    <td>
                        <li v-for="agent in agentdata.deliveryVendorList">[[agent.vendor_id]]</li>
                    </td>
				</tr>
			`,
})


var app1 = new Vue({
    el: '#main-page-id',
    delimiters: ['[[', ']]'],
    data: {
        'agentList': agentList,
    },
    mounted() {
        axios.get(globalApiUrl + '/api/v1/insight-apis/get-list-of-delivery-agents/')
            .then(function (response) {
                let responseData = JSON.parse(response.data);
                console.log(responseData);
                app1.agentList = responseData.deliveryAgentList;
                ToogleLoadingAnimation();
            })
            .catch(function (error) {
                console.log(error);
                ToogleLoadingAnimation();
            });
    },
})