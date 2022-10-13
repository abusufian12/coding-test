import axios from 'axios';

async function findAllCustomerData(baseURL) {
  let result = await
    axios
      .post('customers', {}, { baseURL: baseURL })
    var dataPromises = result.data.customerIds.map(function (customerId) {
        return axios.get('customers/' + customerId, { baseURL: baseURL });
      });
    let res = await Promise.allSettled(dataPromises)
    return res.map((result) => result.value.data)
}

(async () => {
  try { 
    var baseURL = 'https://ktwjky3ybe.execute-api.us-east-1.amazonaws.com';
  findAllCustomerData(baseURL)
    .then(function (customers) {
      customers.forEach(function (customer) {
        console.log(
          customer.id +
          ': ' +
          customer.first_name +
          ' ' +
          customer.last_name
          );
      });
    })
    .catch(function (err) {
      console.error(err);
    });
    }catch(e){
        console.log(e);
    }
})();
