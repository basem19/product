import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../Interface";

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#000000",
  "#FFFFFF",
  "#C0C0C0",
  "#808080",
  "#FF0000",
  "#0000FF",
  "#008000",
  "#FFA500",
  "#A31ACB",
  "#FF6E31",
  " #0d83b1",
];


export const productList: IProduct[] = [
  {
    id :uuid(),
    "title": "Ferrari SF90 Stradale 2024",
    "description": "A hybrid supercar offering exceptional performance and advanced technology from Ferrari.",
    "imageURL": "https://i.postimg.cc/prrL1tq5/1.jpg",
    "price": "500000",
    "colors": ["#FF0000", "#C0C0C0", "#000000", "#FFFFFF"],
    "category": {
      "name": "Ferrari",
      "imageURL": "https://i.postimg.cc/vHCb4pMY/toppng-com-ferrari-emblem-logo-1920x1080.png",
    }
  },
  {
    id: uuid(),
    "title": "Porsche 911 Turbo S 2024",
    "description": "A high-performance sports car with a classic design and cutting-edge technology.",
    "imageURL": "https://www.alainclass.com/wp-content/uploads/2023/04/2023-Porsche-911-Turbo-S-Cabriolet-Black-3239-10.jpg",
    "price": "225000",
    "colors": ["#000000", "#FFFFFF", "#E1E1E1", "#FF0000"],
    "category": {
      "name": "Porsche",
      "imageURL": "https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png"
    }
  },
  {
    id: uuid(),
    "title": "Lamborghini Huracán EVO 2024",
    "description": "A stunning supercar with a fierce design and exceptional performance capabilities.",
    "imageURL": "https://i.postimg.cc/bwLhpcK6/11.jpg",
    "price": "260000",
    "colors": ["#FF5722", "#4CAF50", "#FFFFFF", "#ca5657", "#2353b4", "#ffffff"],
    "category": {
      "name": "Lamborghini",
      "imageURL": "https://banner2.cleanpng.com/20180407/oyq/avgupg3fj.webp"
    }
  },
  {
    id: uuid(),
    "title": "McLaren 720S 2024",
    "description": "A supercar that combines incredible speed with advanced aerodynamics and technology.",
    "imageURL": "https://i.postimg.cc/3J0cRMz8/9.jpg",
    "price": "300000",
    "colors": ["#FF6E31", "#3C2A21", "#FF0032", "#1F8A70"],
    "category": {
      "name": "McLaren",
      "imageURL": "https://static.vecteezy.com/system/resources/thumbnails/020/502/731/small_2x/mclaren-brand-symbol-logo-white-design-british-car-automobile-illustration-with-black-background-free-vector.jpg"
    }
  },
  {
    id: uuid(),
    "title": "Tesla Model S Plaid 2024",
    "description": "An all-electric sedan with mind-blowing acceleration and cutting-edge technology.",
    "imageURL": "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-s-107-6572200e43fa1.jpg?crop=0.497xw:0.560xh;0.243xw,0.232xh&resize=768:*",
    "price": "110000",
    "colors": ["#000000", "#FFFFFF", "#D32F2F", "#4CAF50", "#093d7b"],
    "category": {
      "name": "Tesla",
      "imageURL": "https://i.postimg.cc/jqQ7Q4CY/kisspng-tesla-roadster-tesla-motors-car-2017-tesla-model-x-tesla-car-5b2dcc3f3718d9-0786754515297280.png",
    }
  },
  {
    id: uuid(),
    "title": "Rolls-Royce Phantom 2024",
    "description": "The epitome of luxury, offering unrivaled opulence and a smooth driving experience.",
    "imageURL": "https://hips.hearstapps.com/hmg-prod/images/2024-rolls-royce-phantom-102-64bad70ba7661.jpg?crop=0.485xw:0.650xh;0.316xw,0.224xh&resize=768:*",
    "price": "450000",
    "colors": ["#000000", "#FFFFFF", "#C8C6C4", "#B03A2E", "#274575"],
    "category": {
      "name": "Rolls-Royce",
      "imageURL": "data:image/png;base64,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"
    }
  },
  {
    id: uuid(),
    "title": "Bentley Continental GT 2024",
    "description": "A luxurious grand tourer combining performance and elegance in one stunning package.",
    "imageURL": "https://media.ed.edmunds-media.com/bentley/continental/2024/oem/2024_bentley_continental_convertible_gtc-azure-v8_fq_oem_1_1280.jpg",
    "price": "250000",
    "colors": ["#000000", "#B5B5B5", "#F0F0F0", "#D9A7B6"],
    "category": {
      "name": "Bentley",
      "imageURL": "https://i.postimg.cc/PJ9s88g3/pngwing-com.png"
    }
  },
  {
    id: uuid(),
    "title": "BMW X6 2024",
    "description": "A luxury sports SUV combining powerful performance and advanced technology.",
    "imageURL": "https://i.postimg.cc/X7hcrpdm/1.jpg",
    "price": "80000",
    "colors": ["#000000", "#FFFFFF", "#33b6e3", "#FF0000", "#808080"],
    "category": {
      "name": "BMW",
      "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
    }
  },
  {
    id: uuid(),
    "title": "Bugatti Chiron 2024",
    "description": "A hypercar known for its extreme performance and luxurious design.",
    "imageURL": "https://motormag.pl/wp-content/uploads/2022/03/9-6.jpg.webp",
    "price": "3000000",
    "colors": ["#0000FF", "#FF0000", "#FFFFFF", "#000000"],
    "category": {
      "name": "Bugatti",
      "imageURL": "https://e7.pngegg.com/pngimages/311/932/png-clipart-bugatti-veyron-bugatti-chiron-logo-bugatti-logo-text-rectangle.png"
    }
  },
  {
    id: uuid(),
    "title": "Ford Mustang Mach-E 2024",
    "description": "An all-electric SUV with sporty performance and advanced technology.",
    "imageURL": "https://autogratis.sk/wp-content/uploads/2022/09/FORD-E-Mach-test-AUTOGRATIS-10.jpg",
    "price": "60000",
    "colors": ["#000000", "#0077FF", "#FFFFFF", "#D32F2F"],
    "category": {
      "name": "Ford",
      "imageURL": "https://i.etsystatic.com/16826545/r/il/de9b95/2724093296/il_570xN.2724093296_h825.jpg"
    }
  },
  {
    id: uuid(),
    "title": "Mercedes-Benz GLE 2024",
    "description": "A luxury midsize SUV offering a blend of performance, comfort, and cutting-edge technology.",
    "imageURL": "https://www.largus.fr/images/styles/max_1300x1300/public/images/mercedes-gle-63-s-amg-8.jpg?itok=0Oa-O3k2",
    "price": "75000",
    "colors": ["#000000", "#4264bd", "#FFFFFF", "#B22222", "#696969"],
    "category": {
      "name": "Mercedes-Benz",
      "imageURL": "https://w7.pngwing.com/pngs/876/49/png-transparent-mercedes-benz-hd-logo.png"
    }
  },
  {
    id: uuid(),
    "title": "Nissan GT-R NISMO 2024",
    "description": "A high-performance sports car with a legendary reputation for speed and handling.",
    "imageURL": "https://wieck-nissanao-production.s3.amazonaws.com/photos/e753a7cefa1f4be69b8f23182a1167455e363e6b/preview-928x522.jpg",
    "price": "115000",
    "colors": ["#000000", "#FF0000", "#FFFFFF", "#C0C0C0"],
    "category": {
      "name": "Nissan",
      "imageURL": "https://i.postimg.cc/zBd18Q01/pngwing-com.png"
    }
  }
]




export const categories: ICategory[] = [
  {
    id: uuid(),
    "name": "Ferrari",
    "imageURL": "https://i.postimg.cc/vHCb4pMY/toppng-com-ferrari-emblem-logo-1920x1080.png",
  },
  {
    id: uuid(),
    "name": "Porsche",
    "imageURL": "https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png"
  },
  {
    id: uuid(),
    "name": "Lamborghini",
    "imageURL": "https://banner2.cleanpng.com/20180407/oyq/avgupg3fj.webp"
  },
  {
    id: uuid(),
    "name": "McLaren",
    "imageURL": "https://static.vecteezy.com/system/resources/thumbnails/020/502/731/small_2x/mclaren-brand-symbol-logo-white-design-british-car-automobile-illustration-with-black-background-free-vector.jpg"
  },
  {
    id: uuid(),
    "name": "Tesla",
    "imageURL": "https://i.postimg.cc/jqQ7Q4CY/kisspng-tesla-roadster-tesla-motors-car-2017-tesla-model-x-tesla-car-5b2dcc3f3718d9-0786754515297280.png",
  },
  {
    id: uuid(),
    "name": "Rolls-Royce",
    "imageURL": "data:image/png;base64,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"
  },
  {
    id: uuid(),
    "name": "Bentley",
    "imageURL": "https://i.postimg.cc/PJ9s88g3/pngwing-com.png"
  },
  {
    id: uuid(),
    "name": "BMW",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png"
  },
  {
    id: uuid(),
    "name": "Bugatti",
    "imageURL": "https://e7.pngegg.com/pngimages/311/932/png-clipart-bugatti-veyron-bugatti-chiron-logo-bugatti-logo-text-rectangle.png"
  },
  {
    id: uuid(),
    "name": "Ford",
    "imageURL": "https://i.etsystatic.com/16826545/r/il/de9b95/2724093296/il_570xN.2724093296_h825.jpg"
  },
  {
    id: uuid(),
    "name": "Mercedes-Benz",
    "imageURL": "https://w7.pngwing.com/pngs/876/49/png-transparent-mercedes-benz-hd-logo.png"
  },
  {
    id: uuid(),
    "name": "Nissan",
    "imageURL": "https://i.postimg.cc/zBd18Q01/pngwing-com.png"
  },
];


