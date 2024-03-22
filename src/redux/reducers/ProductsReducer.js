const initState = {
    products: [
      {
        id: 1,
        name: "Nike-shoes",
        image: "prdt1.jpg",
        image1: "prdt1.jpg",
        image2: "prdt2.jpg",
        image3: "prdt3.jpg",
        price: "20$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 1,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      },
      {
        id: 2,
        name: "Perfume for girls",
        image: "prdt9.jpg",
        image1: "prdt5.jpg",
        image2: "prdt6.jpg",
        image3: "prdt7.jpg",
        price: "20$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 18,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      },
      {
        id: 3,
        name: "Dress-girl",
        image: "prdt2.jpg",
        image1: "prdt2.jpg",
        image2: "prdt9.jpg",
        image3: "prdt10.jpg",
        price: "20$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 11,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      },
      {
        id: 3,
        name: "Apple-airpods",
        image: "prdt3.jpg",
        image1: "prdt1.jpg",
        image2: "prdt2.jpg",
        image3: "prdt3.jpg",
        price: "10$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 12,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      },
      {
        id: 4,
        name: "Party-Dress",
        image: "prdt4.jpg",
        image1: "prdt4.jpg",
        image2: "prdt6.jpg",
        image3: "prdt7.jpg",
        price: "40$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 31,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      },
      {
        id: 5,
        name: "Note-10",
        image: "prdt5.jpg",
        image1: "prdt5.jpg",
        image2: "prdt9.jpg",
        image3: "prdt10.jpg",
        price: "70$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 41,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      },
      {
        id: 6,
        name: "Sony-camera",
        image: "prdt6.jpg",
        image1: "prdt6.jpg",
        image2: "prdt7.jpg",
        image3: "prdt1.jpg",
        price: "80$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 21,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      },
      {
        id: 7,
        name: "Party-Dress",
        image: "prdt7.jpg",
        image1: "prdt7.jpg",
        image2: "prdt9.jpg",
        image3: "prdt10.jpg",
        price: "120$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 52,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      },
      {
        id: 8,
        name: "School-bag",
        image: "prdt8.jpg",
        image1: "prdt8.jpg",
        image2: "prdt3.jpg",
        image3: "prdt4.jpg",
        price: "44$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 11,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      },
      {
        id: 9,
        name: "Perfume for girls",
        image: "prdt9.jpg",
        image1: "prdt9.jpg",
        image2: "prdt5.jpg",
        image3: "prdt4.jpg",
        price: "29$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 99,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      },
      {
        id: 10,
        name: "Perfume for mens",
        image: "prdt10.jpg",
        image1: "prdt8.jpg",
        image2: "prdt9.jpg",
        image3: "prdt10.jpg",
        price: "60$",
        discount: 2,
        discountPrice: 20 - (2 / 100) * 20,
        quantity: 5,
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry dummy text ever since the 1500s"
      }
    ],
    product: {}
  };
  
  const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
      case "PRODUCT":
        return {
          ...state,
          product: state.products.find(
            (product) => product.id === parseInt(action.id)
          )
        };
      default:
        return state;
    }
  };
  export default ProductsReducer;
  