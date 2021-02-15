import axios from 'axios';

class Product {
  getProduct(searchTerm) {
    const options = {
      method: 'GET',
      url: `https://world.openfoodfacts.org/api/v0/product/${searchTerm}.json`,
      headers: {
        'content-type': 'application/json',
      },
    };

    return axios.request(options);
  }
}

export default new Product();
