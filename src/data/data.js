export const data = {
  men_products: {
    filters: [
      {
        title: "Category",
        id: "f1",
        status: false,
        options: [
          {
            id: "c1",
            value: "T-Shirt",
            status: false,
            key: "T-shirt",
          },
          {
            id: "c2",
            value: "Shirt",
            status: false,
            key: "Shirt",
          },
          {
            id: "c3",
            value: "Shorts",
            status: false,
            key: "Shorts",
          },
          {
            id: "c4",
            value: "Pants",
            status: false,
            key: "Pants",
          },
        ],
      },
      {
        title: "Size",
        id: "f2",
        status: false,
        options: [
          {
            id: "s1",
            value: "Small",
            status: false,
            key: "s",
          },
          {
            id: "s2",
            value: "Medium",
            status: false,
            key: "m",
          },
          {
            id: "s3",
            value: "Large",
            status: false,
            key: "L",
          },
          {
            id: "s4",
            value: "X-Large",
            status: false,
            key: "xL",
          },
        ],
      },
      {
        title: "Color",
        id: "f3",
        status: false,
        options: [
          {
            id: "cl1",
            value: "Blue",
            status: false,
            key: "blue",
          },
          {
            id: "cl2",
            value: "Black",
            status: false,
            key: "black",
          },
          {
            id: "cl3",
            value: "Green",
            status: false,
            key: "green",
          },
          {
            id: "cl4",
            value: "Yellow",
            status: false,
            key: "yellow",
          },
          {
            id: "cl5",
            value: "White",
            status: false,
            key: "white",
          },
        ],
      },
      {
        title: "Trending",
        id: "f4",
        status: false,
        options: [
          {
            id: "t1",
            value: "Best Seller",
            key: "best_seller",
            status: false,
          },
          {
            id: "t2",
            value: "Top Rated",
            key: "top_rated",
            status: false,
          },
        ],
      },
    ],
    data: [
      {
        id: 1,
        category: "Shorts",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 8000,
        title: "Indian madras shirt in cotton",
        variant: [
          {
            id: 11,
            color: "Brown",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BF105_BR6565_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 111,
                img: "https://www.jcrew.com/s7-img-facade/BF105_BR6565_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 112,
                img: "https://www.jcrew.com/s7-img-facade/BF105_BR6565_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 113,
                img: "https://www.jcrew.com/s7-img-facade/BF105_BR6565_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 114,
                img: "https://www.jcrew.com/s7-img-facade/BF105_BR6565_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 115,
                img: "https://www.jcrew.com/s7-img-facade/BF105_BR6565_d4?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 116,
                img: "https://www.jcrew.com/s7-img-facade/BF105_BR6565?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 12,
            color: "Olive",
            quantity: 10,
            status: false,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE060_WZ1872_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 121,
                img: "https://www.jcrew.com/s7-img-facade/BE060_WZ1872_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 122,
                img: "https://www.jcrew.com/s7-img-facade/BE060_WZ1872?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 13,
            color: "Blue",
            quantity: 10,
            status: false,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE060_WZ1878_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 131,
                img: "https://www.jcrew.com/s7-img-facade/BE060_WZ1878_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 132,
                img: "https://www.jcrew.com/s7-img-facade/BE060_WZ1878_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 133,
                img: "https://www.jcrew.com/s7-img-facade/BE060_WZ1878_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 134,
                img: "https://www.jcrew.com/s7-img-facade/BE060_WZ1878?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Inspired by vintage Ivy League styles, these cotton chino shorts feature subtle pleats and a buttoned coin pocket at the right hip—details pulled from the originals. We designed them with a roomy (but not baggy) fit and a 7.5 inseam that goes practically everywhere. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
      },
      {
        id: 2,
        quantity: 10,
        category: "Shorts",
        sizes: [
          {
            id: "s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 8899,
        title: " stretch chino short",
        variant: [
          {
            id: 21,
            color: "Blue",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE052_WZ2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 211,
                img: "https://www.jcrew.com/s7-img-facade/BE052_WZ2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 212,
                img: "https://www.jcrew.com/s7-img-facade/BE052_WZ2044_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 213,
                img: "https://www.jcrew.com/s7-img-facade/BE052_WZ2044_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 214,
                img: "https://www.jcrew.com/s7-img-facade/BE052_WZ2044?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 22,
            color: "Orange",
            quantity: 10,
            status: false,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE052_OR6170_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 221,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 222,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 223,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 224,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 23,
            color: "Orange",
            quantity: 10,
            status: false,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE052_OR6170_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 231,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 232,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 233,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 234,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Our world-famous stretch chino shorts are customer favorites for a reason—several, actually. Our designers engineer these shorts with precision—using fit and fabric detail that'll make you want to wear them every day. We use just the right amount of Stretch on Demand for extra flex you'll only notice when you need it, making these chino shorts your everyday warm-weather go-tos.",
      },
      {
        id: 3,
        quantity: 10,
        category: "Shorts",
        sizes: [
          {
            id: "s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 8899,
        title: " stretch chino short",
        variant: [
          {
            id: 31,
            color: "Blue",
            quantity: 10,
            status: false,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE052_WZ2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 311,
                img: "https://www.jcrew.com/s7-img-facade/BE052_WZ2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 312,
                img: "https://www.jcrew.com/s7-img-facade/BE052_WZ2044_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 313,
                img: "https://www.jcrew.com/s7-img-facade/BE052_WZ2044_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 314,
                img: "https://www.jcrew.com/s7-img-facade/BE052_WZ2044?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 32,
            color: "Orange",
            status: true,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE052_OR6170_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 321,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 322,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 323,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 324,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 33,
            color: "Orange",
            quantity: 10,
            status: false,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE052_OR6170_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 331,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 332,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 333,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 334,
                img: "https://www.jcrew.com/s7-img-facade/BE052_OR6170?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Our world-famous stretch chino shorts are customer favorites for a reason—several, actually. Our designers engineer these shorts with precision—using fit and fabric detail that'll make you want to wear them every day. We use just the right amount of Stretch on Demand for extra flex you'll only notice when you need it, making these chino shorts your everyday warm-weather go-tos.",
      },
      {
        id: 4,
        category: "Shorts",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 8000,
        title: " Irish linen lounge short",
        variant: [
          {
            id: 41,
            color: "Blue",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BG268_BL7780_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 411,
                img: "https://www.jcrew.com/s7-img-facade/BG268_BL7780_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 412,
                img: "https://www.jcrew.com/s7-img-facade/BG268_BL7780_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 413,
                img: "https://www.jcrew.com/s7-img-facade/BG268_BL7780_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 414,
                img: "https://www.jcrew.com/s7-img-facade/BG268_BL7780?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 42,
            color: "Pink",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BG268_YD1100_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 421,
                img: "https://www.jcrew.com/s7-img-facade/BG268_YD1100_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 422,
                img: "https://www.jcrew.com/s7-img-facade/BG268_YD1100_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 423,
                img: "https://www.jcrew.com/s7-img-facade/BG268_YD1100_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 424,
                img: "https://www.jcrew.com/s7-img-facade/BG268_YD1100?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "We made this lounge short in cool, breathable, 100 percent linen from Ireland's Baird McNutt mill. (Irish linen is considered to be the world's finest, and Baird McNutt's is the finest in Ireland).",
      },
      {
        id: 5,
        category: "Shorts",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 8890,
        title: "stretch chino short",
        variant: [
          {
            id: 51,
            color: "Light Blue",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE050_BL7527_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 511,
                img: "https://www.jcrew.com/s7-img-facade/BE050_BL7527_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 512,
                img: "https://www.jcrew.com/s7-img-facade/BE050_BL7527_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 513,
                img: "https://www.jcrew.com/s7-img-facade/BE050_BL7527_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 514,
                img: "https://www.jcrew.com/s7-img-facade/BE050_BL7527?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 52,
            color: "Khaki",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE050_NA5944_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 521,
                img: "https://www.jcrew.com/s7-img-facade/BE050_NA5944_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 522,
                img: "https://www.jcrew.com/s7-img-facade/BE050_NA5944_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 523,
                img: "https://www.jcrew.com/s7-img-facade/BE050_NA5944_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 524,
                img: "https://www.jcrew.com/s7-img-facade/BE050_NA5944?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Our world-famous stretch chino shorts are customer favorites for a reason—several, actually. Our designers engineer these shorts with precision—using fit and fabric detail that'll make you want to wear them every day. We use just the right amount of Stretch on Demand for extra flex you'll only notice when you need it, making these chino shorts your everyday warm-weather go-tos.",
      },
      {
        id: 6,
        category: "Shorts",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 8890,
        title: "stretch chino short",
        variant: [
          {
            id: 61,
            color: "Blue",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE051_WZ2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 611,
                img: "https://www.jcrew.com/s7-img-facade/BE051_WZ2044_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 612,
                img: "https://www.jcrew.com/s7-img-facade/BE051_WZ2044_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 613,
                img: "https://www.jcrew.com/s7-img-facade/BE051_WZ2044_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 614,
                img: "https://www.jcrew.com/s7-img-facade/BE051_WZ2044?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 62,
            color: "Navy",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE051_BL8934_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 621,
                img: "https://www.jcrew.com/s7-img-facade/BE051_BL8934_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 622,
                img: "https://www.jcrew.com/s7-img-facade/BE051_BL8934_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 623,
                img: "https://www.jcrew.com/s7-img-facade/BE051_BL8934_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 624,
                img: "https://www.jcrew.com/s7-img-facade/BE051_BL8934?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Our world-famous stretch chino shorts are customer favorites for a reason—several, actually. Our designers engineer these shorts with precision—using fit and fabric detail that'll make you want to wear them every day. We use just the right amount of Stretch on Demand for extra flex you'll only notice when you need it, making these chino shorts your everyday warm-weather go-tos.",
      },
      {
        id: 7,
        category: "T-shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 8890,
        title: "Rugby crewneck shirt in stripe",
        variant: [
          {
            id: 71,
            color: "Multi",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BH257_PP3093_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 711,
                img: "https://www.jcrew.com/s7-img-facade/BH257_PP3093_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 712,
                img: "https://www.jcrew.com/s7-img-facade/BH257_PP3093_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 713,
                img: "https://www.jcrew.com/s7-img-facade/BH257_PP3093_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 714,
                img: "https://www.jcrew.com/s7-img-facade/BH257_PP3093?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160",
              },
            ],
          },
          {
            id: 72,
            color: "Blue Green",
            quantity: 10,
            status: false,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BH251_PP3370_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 721,
                img: "https://www.jcrew.com/s7-img-facade/BH251_PP3370_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 722,
                img: "https://www.jcrew.com/s7-img-facade/BH251_PP3370_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 723,
                img: "https://www.jcrew.com/s7-img-facade/BH251_PP3370_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 724,
                img: "https://www.jcrew.com/s7-img-facade/BH251_PP3370?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "In the 1980s, our designers perfected the rugby shirt, a style invented with its namesake sport in the 19th century. This crewneck version uses the same heavy, durable cotton of our original.",
      },
      {
        id: 8,
        category: "T-shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 8890,
        title: "Short-sleeve rugby crewneck shirt in stripe",
        variant: [
          {
            id: 81,
            color: "Ivory Red Throwback Str",
            status: true,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BH250_PP3094_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 811,
                img: "https://www.jcrew.com/s7-img-facade/BH250_PP3094_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 812,
                img: "https://www.jcrew.com/s7-img-facade/BH250_PP3094_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 813,
                img: "https://www.jcrew.com/s7-img-facade/BH250_PP3094_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 814,
                img: "https://www.jcrew.com/s7-img-facade/BH250_PP3094?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 82,
            color: "Purple Multi Plateau St",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE413_PP3098_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 821,
                img: "https://www.jcrew.com/s7-img-facade/BE413_PP3098_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 822,
                img: "https://www.jcrew.com/s7-img-facade/BE413_PP3098_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 823,
                img: "https://www.jcrew.com/s7-img-facade/BE413_PP3098_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 824,
                img: "https://www.jcrew.com/s7-img-facade/BE413_PP3098_d4?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "In the 1980s, our designers perfected the rugby shirt, a style invented with its namesake sport in the 19th century. This crewneck version uses the same heavy, durable cotton of our original.",
      },
      {
        id: 9,
        category: "T-shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 6331,
        title: "Made-in-the-USA flag graphic T-shirt",
        variant: [
          {
            id: 91,
            color: "Yellow",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BI180_PP3589_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 911,
                img: "https://www.jcrew.com/s7-img-facade/BI180_PP3589_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 912,
                img: "https://www.jcrew.com/s7-img-facade/BI180_PP3589_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 913,
                img: "https://www.jcrew.com/s7-img-facade/BI180_PP3589_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 914,
                img: "https://www.jcrew.com/s7-img-facade/BI180_PP3589?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Specially washed for softness, these tees are designed with exclusive graphics that celebrate J.Crew's heritage. This one features a nautical flag design as a nod to our origins. Our newest responsibly made tees are made from durable (and comfortable) 7-ounce cotton jersey that's grown, sewn and dyed entirely in the USA. All of the cotton for these tees is sourced and verified by the U.S. Cotton Trust Protocol, which works with family farms committed to improving their environmental footprint by minimizing water usage, improving soil diversity and reducing greenhouse gas emissions. We're proud to be the first brand to use USCTP cotton as part of our commitment to transparency and sustainability in our cotton supply chain.",
      },
      {
        id: 10,
        category: "T-shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 6331,
        title: "Relaxed heritage cotton pocket T-shirt",
        variant: [
          {
            id: 1001,
            color: "White",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BB950_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1011,
                img: "https://www.jcrew.com/s7-img-facade/BB950_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1012,
                img: "https://www.jcrew.com/s7-img-facade/BB950_WT0002_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1013,
                img: "https://www.jcrew.com/s7-img-facade/BB950_WT0002_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1014,
                img: "https://www.jcrew.com/s7-img-facade/BB950_WT0002_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 1002,
            color: "Yellow",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BB950_RD5701_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1021,
                img: "https://www.jcrew.com/s7-img-facade/BB950_RD5701_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1022,
                img: "https://www.jcrew.com/s7-img-facade/BB950_RD5701_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1023,
                img: "https://www.jcrew.com/s7-img-facade/BB950_RD5701_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1024,
                img: "https://www.jcrew.com/s7-img-facade/BB950_RD5701?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Inspired by vintage pieces from our designers' collections, this tee is made from a heavyweight, open-ended 7.4-ounce cotton fabric that's more durable than your average shirt and cut in a relaxed, old-school fit. With more room across the chest and shoulders than our other tees, this relaxed tee is built to last and will only get better the more you wear it.",
      },
      {
        id: 11,
        category: "T-shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 6331,
        title: "Made-in-the-USA fisherman graphic T-shirt",
        variant: [
          {
            id: 1101,
            quantity: 10,
            color: "Blue",
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BI181_PP3530_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1111,
                img: "https://www.jcrew.com/s7-img-facade/BI181_PP3530_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1112,
                img: "https://www.jcrew.com/s7-img-facade/BI181_PP3530_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1113,
                img: "https://www.jcrew.com/s7-img-facade/BI181_PP3530_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1114,
                img: "https://www.jcrew.com/s7-img-facade/BI181_PP3530?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Specially washed for softness, these tees are designed with exclusive graphics that celebrate J.Crew's heritage. This one features a fisherman design as a nod to our nautical origins. Our newest responsibly made tees are made from durable (and comfortable) 7-ounce cotton jersey that's grown, sewn and dyed entirely in the USA. All of the cotton for these tees is sourced and verified by the U.S. Cotton Trust Protocol, which works with family farms committed to improving their environmental footprint by minimizing water usage, improving soil diversity and reducing greenhouse gas emissions. We're proud to be the first brand to use USCTP cotton as part of our commitment to transparency and sustainability in our cotton supply chain.",
      },
      {
        id: 12,
        category: "T-shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 6331,
        title: "Cotton pocket T-shirt in stripe",
        variant: [
          {
            id: 1201,
            color: "Green",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE888_PP3440_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1211,
                img: "https://www.jcrew.com/s7-img-facade/BE888_PP3440_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1212,
                img: "https://www.jcrew.com/s7-img-facade/BE888_PP3440_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1213,
                img: "https://www.jcrew.com/s7-img-facade/BE888_PP3440_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1214,
                img: "https://www.jcrew.com/s7-img-facade/BE888_PP3440?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 1202,
            color: "Red",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE888_PP2599_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1221,
                img: "https://www.jcrew.com/s7-img-facade/BE888_PP2599_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1222,
                img: "https://www.jcrew.com/s7-img-facade/BE888_PP2599_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1223,
                img: "https://www.jcrew.com/s7-img-facade/BE888_PP2599_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1224,
                img: "https://www.jcrew.com/s7-img-facade/BE888_PP2599?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Specially washed for softness, these tees are designed with exclusive graphics that celebrate J.Crew's heritage. This one features a fisherman design as a nod to our nautical origins. Our newest responsibly made tees are made from durable (and comfortable) 7-ounce cotton jersey that's grown, sewn and dyed entirely in the USA. All of the cotton for these tees is sourced and verified by the U.S. Cotton Trust Protocol, which works with family farms committed to improving their environmental footprint by minimizing water usage, improving soil diversity and reducing greenhouse gas emissions. We're proud to be the first brand to use USCTP cotton as part of our commitment to transparency and sustainability in our cotton supply chain.",
      },
      {
        id: 13,
        category: "Shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 12535,
        title: "Indian madras shirt in cotton",
        variant: [
          {
            id: 1301,
            color: "Red",
            status: true,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BH600_YD1079_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1311,
                img: "https://www.jcrew.com/s7-img-facade/BH600_YD1079_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1312,
                img: "https://www.jcrew.com/s7-img-facade/BH600_YD1079_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1313,
                img: "https://www.jcrew.com/s7-img-facade/BH600_YD1079_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1314,
                img: "https://www.jcrew.com/s7-img-facade/BH600_YD1079?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 1302,
            color: "Green",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BH600_YD1081_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1321,
                img: "https://www.jcrew.com/s7-img-facade/BH600_YD1081_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1322,
                img: "https://www.jcrew.com/s7-img-facade/BH600_YD1081_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1323,
                img: "https://www.jcrew.com/s7-img-facade/BH600_YD1081_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1324,
                img: "https://www.jcrew.com/s7-img-facade/BH600_YD1081_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "The name for madras comes from the Indian city of Madraspatnam (now known as Chennai), home to some of the best of the classic cloth since the 17th century. For these shirts, we went to the country that invented the comfortable, extra-light fabric to create one-of-a-kind patterns you won't find anywhere else.",
      },
      {
        id: 14,
        category: "Shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 10168,
        title: "Broken-in organic cotton oxford shirt",
        variant: [
          {
            id: 1401,
            quantity: 10,
            color: "Red",
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE996_YD1070?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1411,
                img: "https://www.jcrew.com/s7-img-facade/BE996_YD1070?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1412,
                img: "https://www.jcrew.com/s7-img-facade/BE996_YD1070_d7?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 1402,
            color: "Blue",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE996_WX0596_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1421,
                img: "https://www.jcrew.com/s7-img-facade/BE996_WX0596_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1422,
                img: "https://www.jcrew.com/s7-img-facade/BE996_WX0596_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1423,
                img: "https://www.jcrew.com/s7-img-facade/BE996_WX0596_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1424,
                img: "https://www.jcrew.com/s7-img-facade/BE996_WX0596?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "The name for madras comes from the Indian city of Madraspatnam (now known as Chennai), home to some of the best of the classic cloth since the 17th century. For these shirts, we went to the country that invented the comfortable, extra-light fabric to create one-of-a-kind patterns you won't find anywhere else.",
      },
      {
        id: 15,
        category: "Shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 10168,
        title: "Broken-in organic cotton oxford shirt",
        variant: [
          {
            id: 1501,
            color: "Multi",
            status: true,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE996_YD0716_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1511,
                img: "https://www.jcrew.com/s7-img-facade/BE996_YD0716_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1512,
                img: "https://www.jcrew.com/s7-img-facade/BE996_YD0716_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1513,
                img: "https://www.jcrew.com/s7-img-facade/BE996_YD0716_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1514,
                img: "https://www.jcrew.com/s7-img-facade/BE996_YD0716?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "The name for madras comes from the Indian city of Madraspatnam (now known as Chennai), home to some of the best of the classic cloth since the 17th century. For these shirts, we went to the country that invented the comfortable, extra-light fabric to create one-of-a-kind patterns you won't find anywhere else.",
      },
      {
        id: 16,
        category: "Shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 18929,
        title: "Wallace & Barnes duck canvas chore jacket in railroad stripe",
        variant: [
          {
            id: 1601,
            color: "Yellow",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BH598_WZ2039_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1611,
                img: "https://www.jcrew.com/s7-img-facade/BH598_WZ2039_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1612,
                img: "https://www.jcrew.com/s7-img-facade/BH598_WZ2039_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1613,
                img: "https://www.jcrew.com/s7-img-facade/BH598_WZ2039_d4?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1614,
                img: "https://www.jcrew.com/s7-img-facade/BH598_WZ2039?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "The name for madras comes from the Indian city of Madraspatnam (now known as Chennai), home to some of the best of the classic cloth since the 17th century. For these shirts, we went to the country that invented the comfortable, extra-light fabric to create one-of-a-kind patterns you won't find anywhere else.",
      },
      {
        id: 17,
        category: "Shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 8828,
        title: "Harbor knit camp-collar shirt",
        variant: [
          {
            id: 1701,
            color: "Blue",
            status: true,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BH174_PP3188_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1711,
                img: "https://www.jcrew.com/s7-img-facade/BH174_PP3188_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1712,
                img: "https://www.jcrew.com/s7-img-facade/BH174_PP3188_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1713,
                img: "https://www.jcrew.com/s7-img-facade/BH174_PP3188_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1714,
                img: "https://www.jcrew.com/s7-img-facade/BH174_PP3188?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "For days when you want the look of a button-down and the comfort of your favorite tee, the Harbor shirt is your go-to. Made with the same slub cotton as our customer-favorite T-shirts, this shirt features a camp collar for easy everyday wear. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
      },
      {
        id: 18,
        category: "Shirt",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 10872,
        title: "Short-sleeve camp-collar shirt in Irish linen",
        variant: [
          {
            id: 1801,
            color: "White",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BG997_WT0002?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1811,
                img: "https://www.jcrew.com/s7-img-facade/BG997_WT0002?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1812,
                img: "https://www.jcrew.com/s7-img-facade/BG997_WT0002_d7?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "We sourced our linen from Ireland's Baird McNutt mill (Irish linen is considered to be the world's finest, and Baird McNutt's the finest in Ireland), and it has an incredible softness, thanks to a weaving process that the mill has been perfecting since 1912. It's what makes this shirt a summer essential for when you need to stay cool and look polished but not too polished—linen wrinkles easily and actually looks best with a few creases.",
      },
      {
        id: 19,
        category: "Pants",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 11447,
        title: "Classic Relaxed-fit pleated chino pant",
        variant: [
          {
            id: 1901,
            color: "Blue",
            status: true,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE612_WZ1914_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1911,
                img: "https://www.jcrew.com/s7-img-facade/BE612_WZ1914_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1912,
                img: "https://www.jcrew.com/s7-img-facade/BE612_WZ1914_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1913,
                img: "https://www.jcrew.com/s7-img-facade/BE612_WZ1914_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1914,
                img: "https://www.jcrew.com/s7-img-facade/BE612_WZ1914?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 1902,
            color: "Khaki",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE612_WZ1844_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 1921,
                img: "https://www.jcrew.com/s7-img-facade/BE612_WZ1844_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1922,
                img: "https://www.jcrew.com/s7-img-facade/BE612_WZ1844_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1923,
                img: "https://www.jcrew.com/s7-img-facade/BE612_WZ1844_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 1924,
                img: "https://www.jcrew.com/s7-img-facade/BE612_WZ1844_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Our world-famous chinos (aka khakis) are customer favorites for a reason—several, actually. We make this pair in 100 percent cotton that's designed to hold up to daily wear, and will only look better the more you wear it. The vintage-inspired Classic Relaxed fit is built with room to move, and relaxed through the hip and thigh with a full leg. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
      },
      {
        id: 20,
        category: "Pants",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 12535,
        title: "Camp pant in slub cotton",
        variant: [
          {
            id: 2001,
            color: "Yellow",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BF104_WZ2039?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 2011,
                img: "https://www.jcrew.com/s7-img-facade/BF104_WZ2039?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2012,
                img: "https://www.jcrew.com/s7-img-facade/BF104_WZ2039_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Our world-famous chinos (aka khakis) are customer favorites for a reason—several, actually. We make this pair in 100 percent cotton that's designed to hold up to daily wear, and will only look better the more you wear it. The vintage-inspired Classic Relaxed fit is built with room to move, and relaxed through the hip and thigh with a full leg. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
      },
      {
        id: 21,
        category: "Pants",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 17650,
        title: "Wallace & Barnes denim carpenter pant",
        variant: [
          {
            id: 2101,
            color: "White",
            status: true,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BE623_WZ1765_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 2111,
                img: "https://www.jcrew.com/s7-img-facade/BE623_WZ1765_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2112,
                img: "https://www.jcrew.com/s7-img-facade/BE623_WZ1765_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2113,
                img: "https://www.jcrew.com/s7-img-facade/BE623_WZ1765_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2114,
                img: "https://www.jcrew.com/s7-img-facade/BE623_WZ1765?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Our world-famous chinos (aka khakis) are customer favorites for a reason—several, actually. We make this pair in 100 percent cotton that's designed to hold up to daily wear, and will only look better the more you wear it. The vintage-inspired Classic Relaxed fit is built with room to move, and relaxed through the hip and thigh with a full leg. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
      },
      {
        id: 22,
        category: "Pants",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "top_rated",
        brand: "canvas",
        price: 11447,
        title: "1040 Athletic-fit tech pant",
        variant: [
          {
            id: 2201,
            color: "Coal",
            status: true,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/AX689_GY6597_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 2211,
                img: "https://www.jcrew.com/s7-img-facade/AX689_GY6597_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2212,
                img: "https://www.jcrew.com/s7-img-facade/AX689_GY6597_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2213,
                img: "https://www.jcrew.com/s7-img-facade/AX689_GY6597_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2214,
                img: "https://www.jcrew.com/s7-img-facade/AX689_GY6597?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 2202,
            color: "Khaki",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BC611_WZ1768_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 2221,
                img: "https://www.jcrew.com/s7-img-facade/BC611_WZ1768_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2222,
                img: "https://www.jcrew.com/s7-img-facade/AX689_NA5944_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2223,
                img: "https://www.jcrew.com/s7-img-facade/AX689_NA5944_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2224,
                img: "https://www.jcrew.com/s7-img-facade/AX689_NA5944_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 2203,
            color: "Black",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/AX689_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 2231,
                img: "https://www.jcrew.com/s7-img-facade/AX689_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2232,
                img: "https://www.jcrew.com/s7-img-facade/AX689_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2233,
                img: "https://www.jcrew.com/s7-img-facade/AX689_BK0001_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2234,
                img: "https://www.jcrew.com/s7-img-facade/AX689_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Our world-famous chinos (aka khakis) are customer favorites for a reason—several, actually. We make this pair in 100 percent cotton that's designed to hold up to daily wear, and will only look better the more you wear it. The vintage-inspired Classic Relaxed fit is built with room to move, and relaxed through the hip and thigh with a full leg. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
      },
      {
        id: 23,
        category: "Pants",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 10168,
        title: "484 Slim-fit stretch chino pant",
        variant: [
          {
            id: 2301,
            color: "Green",
            status: true,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/AR885_GR6553_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 2311,
                img: "https://www.jcrew.com/s7-img-facade/AR885_GR6553_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2312,
                img: "https://www.jcrew.com/s7-img-facade/AR885_GR6553_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2313,
                img: "https://www.jcrew.com/s7-img-facade/AR885_GR6553_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2314,
                img: "https://www.jcrew.com/s7-img-facade/AR885_GR6553?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 2302,
            color: "Khaki",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BC611_WZ1768_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 2321,
                img: "https://www.jcrew.com/s7-img-facade/BC611_WZ1768_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2322,
                img: "https://www.jcrew.com/s7-img-facade/AX689_NA5944_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2323,
                img: "https://www.jcrew.com/s7-img-facade/AX689_NA5944_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2324,
                img: "https://www.jcrew.com/s7-img-facade/AX689_NA5944_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 2303,
            color: "Black",
            quantity: 10,
            status: false,
            thumb:
              "https://www.jcrew.com/s7-img-facade/AX689_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 2331,
                img: "https://www.jcrew.com/s7-img-facade/AX689_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2332,
                img: "https://www.jcrew.com/s7-img-facade/AX689_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2333,
                img: "https://www.jcrew.com/s7-img-facade/AX689_BK0001_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2334,
                img: "https://www.jcrew.com/s7-img-facade/AX689_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Our world-famous chinos (aka khakis) are customer favorites for a reason—several, actually. We make this pair in 100 percent cotton that's designed to hold up to daily wear, and will only look better the more you wear it. The vintage-inspired Classic Relaxed fit is built with room to move, and relaxed through the hip and thigh with a full leg. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
      },
      {
        id: 24,
        category: "Pants",
        quantity: 10,
        sizes: [
          {
            id: "1s1",
            size: "s",
            status: true,
            value: "Small",
          },
          {
            id: "1s2",
            size: "m",
            status: false,
            value: "Medium",
          },
          {
            id: "1s3",
            size: "l",
            status: false,
            value: "Large",
          },
          {
            id: "1s4",
            size: "xl",
            status: false,
            value: "X-Large",
          },
        ],
        Trending: "best_seller",
        brand: "canvas",
        price: 16371,
        title: "Slim-fit stretch hemp-organic cotton suit pant",
        variant: [
          {
            id: 2401,
            color: "Green",
            quantity: 10,
            status: true,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BC611_GR7349_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 2411,
                img: "https://www.jcrew.com/s7-img-facade/BC611_GR7349_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2412,
                img: "https://www.jcrew.com/s7-img-facade/BC611_GR7349_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2413,
                img: "https://www.jcrew.com/s7-img-facade/BC611_GR7349_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2414,
                img: "https://www.jcrew.com/s7-img-facade/BC611_GR7349?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
          {
            id: 2402,
            color: "Dark",
            status: false,
            quantity: 10,
            thumb:
              "https://www.jcrew.com/s7-img-facade/BC611_WZ1768_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
            images: [
              {
                id: 2421,
                img: "https://www.jcrew.com/s7-img-facade/BC611_WZ1768_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2422,
                img: "https://www.jcrew.com/s7-img-facade/BC611_WZ1768_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2423,
                img: "https://www.jcrew.com/s7-img-facade/BC611_WZ1768_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
              {
                id: 2424,
                img: "https://www.jcrew.com/s7-img-facade/BC611_WZ1768_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
              },
            ],
          },
        ],
        desc: "Our world-famous chinos (aka khakis) are customer favorites for a reason—several, actually. We make this pair in 100 percent cotton that's designed to hold up to daily wear, and will only look better the more you wear it. The vintage-inspired Classic Relaxed fit is built with room to move, and relaxed through the hip and thigh with a full leg. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
      },
    ],
  },
};
