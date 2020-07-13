const initialState = {
  categories: [
    { name: 'all', displayName: 'ALL' },
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5,image:'https://images.samsung.com/is/image/samsung/in-fhdtv-n5200-ua32n5200arxxl-frontblack-184404442?$PD_GALLERY_L_JPG$' },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 , image:'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png'},
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25,   image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png' },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10,  image:'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png' },
    { name: 'Apples', category: 'food', price: .99, inStock: 500,image:'https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png' },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12,  image:'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png' },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90, image:'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png'  },
  ],
  activeCategory: '',
};
// Reducers take in 2 inputs (state and action) the default for state will be the initState
// its just a switch case statement
export default (state = initialState, action) => {
  const { type, payload } = action;
 
  switch (type) {
  case 'PRODUCT':
    state = initialState;

    const products = state.products.filter(product => product.category === payload);
    const activeCategory = state.categories.filter(category => category.name === payload)[0]['displayName'];
    return { categories: state.categories, products, activeCategory };
  default:
    return state;
  }
};

// Actions
// Actions are objects with type and payload
export const productBaseCategory = (name) => {
  return {
    type: 'PRODUCT',
    payload: name,
  };
};



