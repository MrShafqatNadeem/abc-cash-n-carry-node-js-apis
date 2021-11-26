const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

// User APIs

app.post("/login", (req, res) => {
  try {
    if (
      req.body.email == "shafqat@gmail.com" &&
      req.body.password == "123456"
    ) {
      res.status(200).send(userLoginResponse);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }
});

app.post("/register", (req, res) => {
  try {
    if (req.body.email != "shafqat@gmail.com") {
      res.status(200).send(successResponse);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }
});

app.post("/verifyOTP", (req, res) => {
  try {
    if (req.body.email == "shafqat@gmail.com" && req.body.otp == 123456) {
      res.status(200).send(successResponse);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }
});

app.post("/forgetPassword", (req, res) => {
  try {
    if (req.body.email == "shafqat@gmail.com") {
      res.status(200).send(successResponse);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }
});

app.post("/changePassword", (req, res) => {
  try {
    if (
      req.body.email == "shafqat@gmail.com" &&
      req.body.newPassword == req.body.confirmPassword &&
      req.body.oldPassword == 123456
    ) {
      res.status(200).send(successResponse);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }
});

// Profile APIs

app.post("/userProfileData", (req, res) => {
  try {
    if (req.body.id == "user1500") {
      res.status(200).send(userLoginResponse);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }
});

app.post("/updateProfileData", (req, res) => {
  res.status(200).send(successResponse);
});

// Address APIs

app.get("/getAllDeliveryAddress", (req, res) => {
  res.status(200).send(addressResponse);
});

app.post("/addDeliveryAddress", (req, res) => {
  try {
    if (req.body.deliveryAddress.length > 5) {
      res.status(200).send(successResponse);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }
});

app.post("/updateDeliveryAddress", (req, res) => {
  try {
    if (req.body.deliveryAddress.length > 5) {
      res.status(200).send(successResponse);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }
});

app.delete("/delDeliveryAddress", (req, res) => {
  try {

    if (req.body.addressId != null) {
      res.status(200).send(addressResponse);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }

});

// categories APIs

app.get("/getAllCategories", (req, res) => {
  res.status(200).send(categoriesListResponse);
});

// product APIs

app.get("/getProductByProductId", (req, res) => {
 
  if(req.query.id != null){
  res.status(200).send(productResponse);
  }
  else {
    res.status(302).send(failedResponse);
  }

});

app.get("/getProductsByCatId", (req, res) => {
  if(req.query.id != null){
    if(req.query.id == 1){
    res.status(200).send(productsByCatIdResponse1);
    }
    else if (req.query.id == 2){
      res.status(200).send(productsByCatIdResponse2);
    }
    else if(req.query.id == 3){
      res.status(200).send(productsByCatIdResponse3);
    }}
    else {
      res.status(302).send(failedResponse);
    }

});

app.get("/getProductBySearch", (req, res) => {
  res.status(200).send(productsByCatIdResponse1);
});

// cart APIs

app.post("/updateCartItems", (req, res) => {
  res.status(200).send(successResponse);
});

app.post("/addToCart", (req, res) => {

  res.status(200).send(successResponse);
});

app.post("/getCartItems", (req, res) => {
  try {
    if (req.body.userId != null && req.body.userId != "") {
      res.status(200).send(cartItems);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }

});

app.delete("/delCartItems", (req, res) => {
  try {
    if (req.body.id != null && req.body.id != "") {
      res.status(200).send(successResponse);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }

});

// order APIs
app.post("/placeOrder", (req, res) => {
  res.status(200).send(successResponse);
});

app.post("/getAllOrders", (req, res) => {
  try {
    if (req.body.id != null && req.body.id != "") {
      res.status(200).send(cartItems);
    } else {
      res.status(302).send(failedResponse);
    }
  } catch (err) {
    res.status(302).send(failedResponse);
  }

});


app.get("/", (req, res) => {

    res.status(200).send("Hello there ! :)");

});


app.listen(process.env.PORT ||  5000, () => {
  console.log("hi there ");
});

var successResponse = {
  status: 1,
  message: "success",
  data: null,
};

var failedResponse = {
  status: 1,
  message: "failed",
  data: null,
};

var userLoginResponse = {
  status: 1,
  message: "success",
  data: {
    name: "shafqat",
    address: "Lahore",
    city: "Lahore",
    gender: "Male",
    email: "shafqat@gmail.com",
    phone: "03026971728",
    id: "user1500",
  },
};
var categoriesListResponse = {
  status: 1,
  message: "success",
  data: [
    {
      cat_name: "Men",
      cat_id: "0",
      cat_image: "",
      cat_color: 0xff667eea,
    },
    {
      cat_name: "Women",
      cat_id: "1",
      cat_image: "",
      cat_color: 0xff667eea,
    },
    {
      cat_name: "Youngster",
      cat_id: "2",
      cat_image: "",
      cat_color: 0xffff5858,
    },
    {
      cat_name: "Kid",
      cat_id: "3",
      cat_image: "",
      cat_color: 0xff667aeb,
    },
    {
      cat_name: "Men",
      cat_id: "0",
      cat_image: "",
      cat_color: 0xff667eea,
    },
    {
      cat_name: "Women",
      cat_id: "1",
      cat_image: "",
      cat_color: 0xff667eea,
    },
    {
      cat_name: "Youngster",
      cat_id: "2",
      cat_image: "",
      cat_color: 0xffff5858,
    },
    {
      cat_name: "Kid",
      cat_id: "3",
      cat_image: "",
      cat_color: 0xff667aeb,
    },
  ],
};

var productsByCatIdResponse1 = {
  "status": 1,
  "message": "success",
  "data":[
    {
      "prod_name": "Cofee",
      "prod_id": "12",
      "prod_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrYB4OPLLC0ag7G2b0SpT1_CHhmSsyhxBmQ&usqp=CAU",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "The perfect cup of bold & smooth - a blend of premium smooth Arabica coffee beans and full-bodied Robusta coffee beans that deliver a consistently bold, well-rounded flavour and rich aroma that you can always rely on.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "1125",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
        {
      "prod_name": "APPLES",
      "prod_id": "12",
      "prod_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzaJgtP-mhOw3l_pLv2_sOWlH1I04aoMX4Q&usqp=CAU",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Apples are rich in fiber, vitamins, and minerals, all of which benefit health. They also provide an array of antioxidants . These substances help neutralize free radicals. Free radicals are reactive molecules that can build up as a result of natural processes and environmental pressures.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "150",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
      {
      "prod_name": "Pen",
      "prod_id": "12",
      "prod_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSII-MTiHawTywS3TXSTT2n9-eF-vi5qrbcXg&usqp=CAU",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
       "A pen is a common writing instrument that applies ink to a surface, usually paper, for writing or drawing. ... All of these modern pens contain internal ink reservoirs, such that they do not need to be dipped in ink while writing.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "20",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
      {
      "prod_name": "Gionee Handfree",
      "prod_id": "12",
      "prod_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaH5TIcMykVTkY00vOEuSdUTM6NOKO2GsVqg&usqp=CAU",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "The Gionee handsfree is a wired accessory. One can make use of the headphone jack in their phone to connect. With a microphone built into the wire so as one talks it catches their voice. The earphone itself is designed in a way that it stays in the ear and doesn't dislodge while one is moving about their tasks.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "400",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
     {
      "prod_name": "HP USB",
      "prod_id": "12",
      "prod_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu55ZI5cuNRLzj9ezYFtMHpM8uR5dc5J7qyQ&usqp=CAU",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        " HP Flash Drives the hp v221w is the rear micro-sized without a cap steel usb.zero flash strength. the small-scale quantity and short shape diagram are great for ultrabooks and restrained notebooks",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "500",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
      {
      "prod_name": "Fruita Vitals Juice",
      "prod_id": "12",
      "prod_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd14Z7hm1x1FSyugrkfhnzL5Vn4Cn9GquUSg&usqp=CAU",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Nestle Fruita Vitals 100% Orange Juice is a flavorful, refreshing and nourishing drink. Free of additives and added sugar, and made from Valencia orange concentrate, the juice tastes pure, rich and flavorful. The juice is loaded with multiple nutrients and only sweetened with natural orange fruit sugar.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "190",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Wooden Table",
      "prod_id": "12",
      "prod_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dB4N9Jh9g4f5Mvq8VePsL47uLtI8TaMh-Q&usqp=CAU",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRANKEvIFnwCUDZR1MJLrBCDVS4t66IcKp1g&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "an article of furniture consisting of a flat, slablike top supported on one or more legs or other supports. 2. such a piece of furniture used for serving food to those seated at it.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "5000",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Gucci Glass",
      "prod_id": "12",
      "prod_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOe4gEtbpRNmTcz8JVKGzP5ee4Xnw2OEhIA&usqp=CAU",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "PRODUCTS DIMENSION-Frame material:metal,Lens width:1 7/8(47mm),Frame width:5 3/16,(132mm),Lens height:7/8(22mm),Bridge width:1/2(13mm),Temple length:5 1/2(140mm),Spring hinge:No, Lenses: Aspheric, Head size: Narrow EYEKEPPER HALF-EYE STYLE READING GLASSES-the deviation for strength less than 0.02,the deviation for lenses's horizontal line less than 1mm.QUALITY METAL FRAME -FDA Registered Reading Glasses and Eyewear,lightweight metal frame.Comfortable Eyewear : The frame is comfortable to wear and the lenses light transmittance is very good. Besides, casual frame design keeps you looks professional and fashionable while working or reading. Suitable for different face types. Perfect gift for your friends, parents, grandparents and relatives",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "5000",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Dell Optical Mouse- MS116",
      "prod_id": "12",
      "prod_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAnt2O-U3NtA8oEuKiPfcLX0kh9jlyZKIFXw&usqp=CAU",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "The Dell Optical Mouse – MS116 features optical LED tracking and wired connectivity providing a stellar performance day after day. Improve your productivity at the office or at home–the Dell Optical Mouse will help keep you on task with accurate 1000 DPI optical tracking.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "3540",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
     {
      "prod_name": "Crystal Rock Salt Lamp",
      "prod_id": "12",
      "prod_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-kcAEb7CiDwd6d-Ppl7w_T6LJTLL5Fi35A&usqp=CAU",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "SALT LAMP made from Natural Himalayan pink salt crystals carefully hand-mined from the Himalayan Mountains.Pink Salt Lamp is fixed on a Beautiful carved Rose Wooden panel which gives it an Executive look.Himalayan Salt Lamp from The Body Source arrives fully assembled and packaged in a beautiful gift box with a spare 15-watt bulb for your peace of mind.Package Includes: 1 X Natural Himalayan Salt Lamp ( with a 1.5m CE approved electrical cable and a 15-watt light bulb ).Crystal Rock Salt Lamp are an ancient gift from mother nature, may help you to live a better and healthy lifestyle.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "3295",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    }
    ]
};

var productsByCatIdResponse2 = {
  "status": 1,
  "message": "success",
  "data":[
    {
      "prod_name": "Coca Cola",
      "prod_id": "12",
      "prod_image": "https://i0.wp.com/fairo.pk/wp-content/uploads/2020/04/cocoa-cola.jpg?fit=1000%2C1000&ssl=1 ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Coca-Cola, is a carbonated, sweetened soft drink and is the world's best-selling drink. Coca-Cola's main rival is Pepsi because of the similar taste of their main product. Coca-Cola has 7 cubes of sugar, whereas Pepsi has 8 cubes of sugar.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "80",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
        {
      "prod_name": "Pop Beans AYA Food",
      "prod_id": "12",
      "prod_image": "https://cf.shopee.ph/file/6cf71e98b848afbd93a14f09605fabbe ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Purchase here to get items directly from the factory. Peanuts, pop beans and green peas.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "155",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
    
    {
      "prod_name": "LEGIT 1pair Beast Master battery",
      "prod_id": "12",
      "prod_image": "https://cf.shopee.ph/file/00f72f53fb5a266ae3a985687c6d02e7 ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "1 Pair ( Negative and Positive )100% copper Material only for clamps. Attachment screw and nut are not in copper. Suitable for all acid filled batteries. The copper material has good conductive performance, good flexibility.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "199",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
    
    {
      "prod_name": "Coca-Cola, Fanta and Sprite",
      "prod_id": "12",
      "prod_image": "https://media.istockphoto.com/photos/cocacola-fanta-and-sprite-picture-id476209536?k=20&m=476209536&s=612x612&w=0&h=HoTSMH819VSMDXMxOcAVq7KbS9_2_rlrOXqPWOk1_Vo= ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Coca-Cola, Fanta and Sprite bottles isolated on the white background, clipping path included..",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "200",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
  
    {
      "prod_name": "Apple AirPods",
      "prod_id": "12",
      "prod_image": "https://adnjxlogdq.cloudimg.io/v7/https://www.ishopping.pk/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_airpods_2_mv7n2__1_1.jpg ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Airpod pro 2019 in Pakistan are to look forward to. They provide the user with rich, high quality audio and voice without the use of buttons. Installed in the airpods are speech and motion detectors which can sense when they are in your ears and pause when you take them out. Other than that, it provides its users with quick access to Siri by saying ‘Hey Siri’ which helps you complete your requests. You can tap the airpods to play, skip or forward making it easier in case you are doing other work.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "36,899",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    

    {
      "prod_name": "TCL 40 40S6500 ANDROID SMART FULL HD",
      "prod_id": "12",
      "prod_image": "https://mydukaan.pk/pub/media/catalog/product/cache/c9337263e886ea1d548ac454adcb262f/t/c/tcl-uhd-s6500_1_1_1_1_1.jpg ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Powered by latest AI embedded technology and TCL Android TV OS, the S6500 FHD is part of TCL’s expanding range of AI TV products that provide consumers with a simple, personalized life experience. The S6500 comes equipped with perfect FHD Display, HDR function, IPQ Engine, Google Assistant, Chromecast built-in function in a supreme show of elegance, the S6500 giving the TV a classy look !",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "52,370",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
    
    {
      "prod_name": "Behringer GUITAR LINK UCG102",
      "prod_id": "12",
      "prod_image": "https://img.audiofanzine.com/images/u/product/normal/behringer-guitar-link-ucg102-68892.jpg ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Plug in your favorite guitar and turn your PC or Mac* computer into a guitar amp and recording system without the need for any other hardwareOpens up a world of free or commercial guitar amp and stomp box modeling plugins for your guitar sound",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "300",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
    
    {
      "prod_name": "Beurer BM-40 upper arm",
      "prod_id": "12",
      "prod_image": "https://www.win-health.com/sites/default/files/styles/gallery_auto_aspect/public/beure-bm40-monitor-cuff-400x400-min.jpg?itok=Bo6eVr2o ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Fully automatic blood pressure and pulse measurement on the upper arm Average of all saved measured values Average of morning and evening blood pressure for the last 7 days",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "6,999",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
    
    {
      "prod_name": "Beurer HA-50 hearing ",
      "prod_id": "12",
      "prod_image": "https://pim.beurer.com/images/produkt/gross/HA50-2015-A.jpg ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Very discreet Extended frequency rangeIndividual adjustment to the ear canal Ideal for restricted hearing ability Ergonomic fit behind the ear, barely visible Amplifies the volume of all sounds indoors and outdoors",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "4,299",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
    
    {
      "prod_name": "Beurer 162.709 Cable For EM",
      "prod_id": "12",
      "prod_image": "https://telemart-bucket-prod.s3.amazonaws.com/products/lg_qFrvJwN5KBiX897NLx1nFFXhmQf6B6KHdw7cPaMw.jpg ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": " 3,299",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
    
    {
      "prod_name": "HW22 Smart watch unisex",
      "prod_id": "12",
      "prod_image": "https://static-01.daraz.pk/p/6720c39e76c86cc736464343ceeb3ea8.jpg ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "The fitness tracker supports more accurate heart rate monitoring, blood pressure,blood oxygen, music control, Smart split screen display,bluetooth call,Band language switch,Password lock screen,sleep monitoring, message, sedentary remind, incoming call,alarm,dimming,check the phone and more. You can read messages on the fitness tracker from Facebook, What Sapp, Twitter, Line,etc..",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "4,000",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
    
    {
      "prod_name": "Xiaomi Mi Box S ",
      "prod_id": "12",
      "prod_image": "https://static-01.daraz.pk/p/ae9c5093a3d988c9407f9929680b28c6.jpg ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Mi Box S is powered by Android 8.1, easy to use and supports voice search and Chromecast as well as delivering a world of content the whole family can enjoy Compatible with thousands of apps, giving you access to tons of premium video services and a constant stream of fresh new content",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "10,399",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
    
    {
      "prod_name": "Epson EcoTank L15150 ",
      "prod_id": "12",
      "prod_image": "https://static-01.daraz.pk/p/a86d871a6eafc3a9c7ca7b89a38c714c.jpg ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Besides being equipped with Ethernet, experience a world of wireless convenience with access to easy and flexible shared printing and mobile printing. The added advantage of Wi-Fi Direct allows you to connect up to 8 devices to the printer without a router.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "196,999",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
    
    {
      "prod_name": "Black & Decker NVB215WN",
      "prod_id": "12",
      "prod_image": "https://adnjxlogdq.cloudimg.io/v7/https://www.ishopping.pk/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/b/l/black_decker_dustbuster_handheld_vacuum_cleaner_nvb215wn_00_1.jpg ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Black and Decker Dustbuster features a sturdy and lightweight design. This cordless vacuum cleaner provides a comfortable hold.Keep your home spick and span with the NVB215WN B5 Rechargeable Dustbuster Hand Vacuum Cleaner from Black and Decker. This vacuum cleaner has a translucent, removable dust bowl that can be cleaned and stored easily. The dust bowl has a capacity of 370ml, which makes it perfect for cleaning small areas, sofas, cars and kitchen slabs. Also, this powerful vacuum cleaner has a runtime of 7.5 minutes. It has a suction pressure of 175mm and a power output of 5W, which makes it quite fast. It has a charging base that can be easily placed on a counter top or attached to the wall. Functional and efficient, this Black and Decker cordless vacuum cleaner is suitable for both your home and office.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "6,740",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    
  
    {
      "prod_name": "Anex 2099 Vacuum",
      "prod_id": "12",
      "prod_image": "https://telemart-bucket-prod.s3.amazonaws.com/products/lg_X2NJI9xPVzoXqHGnlZx4rscdmLCMPuzWmLVYimjI.jpg ",
      "prod_images": [
        {
          "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGeOoBnCa3dWQl4m5aGBxUuw7SrEtU3Z0eg&usqp=CAU",
          "img_id": "309"
        }
      ],
      "prod_description":
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "42",
      "prod_discounted_price": "40",
      "prod_sale_price": "1000",
      "prod_reviews_count": "49",
      "prod_category_name": "Clothes",
      "prod_category_id": "0",
      "prod_quantity": "10",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    }
    
    
    ]
};

var productsByCatIdResponse3 = {
  "status": 1,
  "message": "success",
  "data":[
    {
      "prod_name": "HP 15-DW3024NIA Laptop - 11th Gen Intel Core i3, 4GB, 256GB SSD, Jet black",
      "prod_id": "1211",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://www.czone.com.pk/images/products/2-re-4012-600721-010321012457-1540-11191-080321071113.jpg",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Stay connected to what matters most with long-lasting battery life and a sleek and portable, micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 15 laptop features reliable performance and an expansive display - letting you stream, surf and speed through tasks from sun up to sundown.",
      "prod_rating": "3.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "900",
      "prod_discounted_price": "",
      "prod_sale_price": "900",
      "prod_reviews_count": "49",
      "prod_category_name": "Laptop",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Acer Nitro 4000 DPI Wired Gaming Mouse",
      "prod_id": "1212",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://www.paklap.pk/pub/media/catalog/product/cache/7e76858baa02afd4bb6d466a87d0383e/a/c/acer_nitro_nmw810_gaming_mouse_price_in_pakistan.jpg",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Adjustable 6 levels DPI lighting mode (DPI: up to 4000), 7 functional buttons + 1 burst Fire on side thumb button Acceleration: 20 g, Connection: USB, Ergonomic design",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "80",
      "prod_discounted_price": "",
      "prod_sale_price": "80",
      "prod_reviews_count": "49",
      "prod_category_name": "Mouse",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Relaxsit Travel Pillow with eye mask 2 in 1",
      "prod_id": "1213",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/2ac1db8a8f7da0a04f8c5265b508693f.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Scientifically proven long-haul flight support pillowEasily attaches to your luggage/hang bagExcellent for sleeping in Airplane, Cars, Buses, Trains, etcIdeal for an office nap and even daylight sleep on the beach.High tech inner fabric with massage pallets that transports you into a world of comfort.Eye Mask + Neck Pillow You need a portable, lightweight 2-in-1 eye pillow.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "91",
      "prod_discounted_price": "",
      "prod_sale_price": "91",
      "prod_reviews_count": "49",
      "prod_category_name": "Pillow",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "CILLE STAINLESS STEEL BOTTLE HOT & COLD VACUUM FLASK BOTTLE",
      "prod_id": "1214",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/0fea125d867834d87dde9925558420fd.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "CILLE XB-1877 Stainless Steel Sports Water Bottle BPA-Free Insulated Water Bottle Leak Proof Travel Vacuum Flask Double Walled Reusable Metal Vacuum Flask Keeps Liquids Hot or Cold",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "53",
      "prod_discounted_price": "",
      "prod_sale_price": "53",
      "prod_reviews_count": "49",
      "prod_category_name": "BOTTLE",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "UGREEN USB C Hub Mini Size USB Type C Dock for MacBook Air",
      "prod_id": "1215",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/407045dce5c8346e18190a71f3e68671.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "UGREEN USB C Hub Mini Size USB Type C 3.1 to 4K HDMI RJ45 PD USB 3.0 OTG Adapter USB C Dock for MacBook Air 2020/2019/2018, Macbook Pro, iPad Pro 2020,iPad Air 2020, Samsung Galaxy S20,S10,PC USB HUB",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "300",
      "prod_discounted_price": "",
      "prod_sale_price": "300",
      "prod_reviews_count": "49",
      "prod_category_name": "Computer Accessories",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Laptop Stand Holder For MacBook Air",
      "prod_id": "1216",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/d7f5f7a9f518589688e5ceb81818fcb9.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Beautiful Aluminum Design. Easily holds a 17 Full Size Laptop. Different Heights arrangement make it convenient to use on Table and Bed. Doesnt block Heat Dissipation. Good Packing and Carry Pouch is an additional benefit.HIGHLY RECOMMENDED! Great quality, perfect for my macbook m1 and compact design. I am impressed! Thank you UGREEN! Will definitely buy from you guys again. ",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "410",
      "prod_discounted_price": "",
      "prod_sale_price": "410",
      "prod_reviews_count": "49",
      "prod_category_name": "Computer Accessories",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Coolbell Tablet & iPad Bag",
      "prod_id": "1217",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/c64af272ebd4096160a2b76b278d0e89.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "The top of the backpack has a small drawer for headphones or phone chargers.The spacious middle compartment is divided into two main compartments.You can store 2 clothes or 5 books in this main compartment. You are assured that with this capacity, it is possible to go to the road with full luggage!The Tablet & Ipad compartment is capable of holding up to 10 inch devices.The backpack of CB 3011 is full of card compartments, wallet drawers or important items.All the stitches are meticulously crafted to each needle and thread. The strap of the backpack is extremely firm leather with pressure points sewed many times.The comfortable shoulder pad ensures that one backpack user is comfortable to wear for hours on end.The strap of the backpac is designed to be detachable straps that help you press the belt directly after adjusting on the shoulder instead of going around the neck.",
      "prod_rating": "4",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "300",
      "prod_discounted_price": "",
      "prod_sale_price": "300",
      "prod_reviews_count": "49",
      "prod_category_name": "Bag",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Laptop Slim Bag, Business Travel Laptop Bags Case",
      "prod_id": "1218",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/5c2a728524d0a3d7c62e3d14f92f291a.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Excellent Protection: The laptop bag is made of durable waterproof material, and the soft fluff lining inside helps to carry and protect your device from accidental dropping, bumping, bumping, scratching and spilling.It can accommodate laptops/computers/ultrabooks with a screen size of up to 13.3/15.6 inches. (Before buying, please check the size of your laptop or laptop, and then compare the internal dimensions of our laptop bag).Practical Design: The laptop protective cover is light and beautiful, easy to store and carry, and is an ideal choice for business travel and travel.Plenty of Space: The zippered pocket on the top slides smoothly and allows easy access to the laptop. The inner bag can quickly access the power supply, pen, mouse and other accessories, and store it anytime, anywhere.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "100",
      "prod_discounted_price": "",
      "prod_sale_price": "100",
      "prod_reviews_count": "49",
      "prod_category_name": "Bag",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "KNORR BOUILLON CUBE CHICKEN",
      "prod_id": "1219",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/3cc4572155ffb026b7fff6a8e44cdcdb.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "KNORR BOUILLON CUBE CHICKEN 18gm, all time favourite knor cubes no one can compete with knorr keep it up with delicious taste also got in cheap price. ",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "",
      "prod_discounted_price": "",
      "prod_sale_price": "41",
      "prod_reviews_count": "49",
      "prod_category_name": "Food",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "OPPO Enco W11",
      "prod_id": "1220",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/7274d9b5f26433ed0b7eb765e83037e5.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Bluetooth version 5.0, 20 hour battery life,Battery type Rechargeable Lithium-ion battery,Battery capacity40 mAh (Earbuds) 400 mAh (Charging Case), Music playtime (50% volume)5 h (single charge) 20 h (with charging case), Charging time*120 min(Earbuds) 120 min (Earbuds +Charging Case), Dust & Water Resistance (Earbuds)IP55, Charging PortUSB Type-C, Frequency response range 20 Hz- 20 kHz",
      "prod_rating": "5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "99",
      "prod_discounted_price": "",
      "prod_sale_price": "99",
      "prod_reviews_count": "49",
      "prod_category_name": "Music",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Xiaomi Haylou Moripods TWS Wireless",
      "prod_id": "1221",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/ee415b593464f90db067bee96d252cfb.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Smart touch control operation is more convenient and accurate and the CVC 8.0 call noise reduction algorithm further reduces environmental noise With upgraded ultra-low power consumption chip and polymer battery,playtime lasts for about 6 hours from single charge and total 24 hours with charging case Adopting 12mm large size sound production unit,the spatial stereo field is open and sound is well-balanced and pure.",
      "prod_rating": "2.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "78",
      "prod_discounted_price": "",
      "prod_sale_price": "78",
      "prod_reviews_count": "49",
      "prod_category_name": "Music",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Transcend RDF9 FAST USB 3.1 Gen 1 UHS-II Multi Card Reader",
      "prod_id": "1222",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/f283855efb140758bd06ddf2fb6dfdca.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Taking full advantage of the UHS-II technolog, the RDF9 UHS-II Card Reader unleashes the high-speed performance of SDXC / SDHC UHS-II memory cards. Equipped with USB 3.1 Gen 1 interface, the RDF9 delivers the blazing fast read and write speeds of up to 260MB/s and 190MB/s accordingly, facilitating high resolution video and RAW image transfers and post-production processing for professional photographers, videographers and graphic designers. Additionally, it also boasts the CompactFlash, SD and microSD card slots, offering you to transfer different types of digital files with one compact card reader.",
      "prod_rating": "1.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "434",
      "prod_discounted_price": "",
      "prod_sale_price": "434",
      "prod_reviews_count": "49",
      "prod_category_name": "microSD",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Transcend 64Gb Flash Jetdrive Go 300 Silver",
      "prod_id": "1223",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/79b080c8931d1c31ed7ee481c711833f.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "JetDrive™ Go 300Running out of storage space on your iPhone® or iPad®? Transcend's JetDrive™ Go 300 Lightning/USB 3.1 flash drive is designed to expand your iPhone, iPad or iPod® storage by up to 128GB. With the exclusive JetDrive Go App, you can effortlessly explore, move, back up and manage photos and videos between the JetDrive Go 300 and your iOS device.ShareA flash drive for iPhone, iPad and iPod.Have you ever seen a Cannot Take Photos message pop up on the display whilst trying to save photos and videos? The JetDrive Go 300 provides your iOS device with up to 128GB of additional storage, so you can focus on capturing unforgettable moments without worrying about running out of space.Easy file transfer.Exclusively designed for the JetDrive Go 300, the JetDrive Go App features an intuitive interface that allows you to quickly browse, move and copy your photos and videos between Camera Roll and the JetDrive Go 300 in a few taps.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "200",
      "prod_discounted_price": "",
      "prod_sale_price": "200",
      "prod_reviews_count": "49",
      "prod_category_name": "microSD",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Bingo JBG 1000 BS 3 in 1 Juicer Blender Grinder",
      "prod_id": "1224",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/original/7160ea9066b2a4e9559e7bb7f79ba4ed.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Bingo's Juicer Blender and Grinder is a reliable and durable appliance that allows you to make a delightful fresh treat of healthy juices and you can even chop your favorite fruits and have it in cubes and however you want to. It helps you to quickly prepare juices of any fruit to refresh yourself. It consists of a stainless steel spinner and a big clear glass of 1000ml container. Its a perfect combo and is also quite easy to operate and clean.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "199",
      "prod_discounted_price": "",
      "prod_sale_price": "199",
      "prod_reviews_count": "49",
      "prod_category_name": "Kitchen",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Bingo FX 5000 Jumbo Food Factory 600W",
      "prod_id": "1225",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/mdc/435450a3a022eb89800cff601a3419a9.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Bingo is known for offering the best apparatuses for your home and living care. This BIngo FX-5000 Food Factory is the ultimate kitchen help with Extra Grinder which has 5 in 1 functions. It has one additional processor. This multi-purpose machine can be utilized as as a juice extractor, blender, soya bean milk producer, mincer, egg whisk, meat slicer and a great deal more. Get this Bingo Food Factory and make your life easier with this immaculate kitchen help.",
      "prod_rating": "4.5",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "189",
      "prod_discounted_price": "",
      "prod_sale_price": "189",
      "prod_reviews_count": "49",
      "prod_category_name": "kitchen",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    },
    {
      "prod_name": "Bingo Deluxe Kitchen Rebot 7 in 1 FX 5100 White",
      "prod_id": "1226",
      "prod_image": "image url ",
      "prod_images": [
        {
          "imgurl": "https://static-01.daraz.pk/p/3fc7468e02f78df481cbcb8ed54fa5e3.jpg_720x720q80.jpg_.webp",
          "img_id": "309"
        }
      ],
      "prod_description":
        "Bingo is known for offering the best appliances for your home and kitchen needs.This Bingo FX 5100 Food Factory is the ultimate kitchen help which has 7 in 1 functions.This multi purpose machine can be utilized as as a hard fruit juice extractor  blender soya bean milk producer, chopper and mincer egg whisk Vegetable slicing and shredding grinding mix spices or coffee beansand a great deal more. Get this Bingo Food Factory and make your life easier with this immaculate kitchen help. Available at an affordable pric",
      "prod_rating": "3.7",
      "prod_rating_comment": "Very Good",
      "prod_original_price": "207",
      "prod_discounted_price": "207",
      "prod_sale_price": "207",
      "prod_reviews_count": "49",
      "prod_category_name": "Kitchen",
      "prod_category_id": "0",
      "prod_quantity": "110",
      "prod_selected_color": null,
      "prod_selected_size": null,
      "prod_sizes": [
        {
          "prd_size": "14",
          "prd_size_id": "11"
        }
      ],
      "prod_colors": [
        {
          "clr_id": "12",
          "clr": "#023488"
        }
      ]
    }
    ]
};

var productResponse = {
  status: 1,
  message: "success",
  data: {
    prod_name: "shafqat",
    prod_id: "12",
    prod_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6J70jH-uCnQtR6cEZz_qQT9z2bGKGJaFXg&usqp=CAU",
    prod_images: [
      {
        imgurl: "",
        img_id: "329",
      },
    ],
    prod_description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
    prod_rating: "4.5",
    prod_rating_comment: "Very Good",
    prod_original_price: "42",
    prod_discounted_price: "40",
    prod_sale_price: "41",
    prod_reviews_count: "49",
    prod_category_name: "Clothes",
    prod_category_id: "0",
    prod_quantity: "10",
    prod_selected_color: null,
    prod_selected_size: null,
    prod_sizes: [
      {
        prd_size: "14",
        prd_size_id: "11",
      },
    ],
    prod_colors: [
      {
        clr_id: "12",
        clr: "#023488",
      },
    ],
  },
};

var cartItems = {
  status: 1,
  message: "success",
  data: [
    {
      prod_name: "Usama",
      prod_id: "17",
      prod_image: "link.image.jpg",
      prod_original_price: "49",
      prod_discounted_price: "17",
      prod_sale_price: "30",
      prod_category_name: "Pents",
      prod_category_id: "1",
      prod_quantity: "20",
      prod_selected_color: null,
      prod_selected_size: null,
    },
    {
      prod_name: "Usama",
      prod_id: "17",
      prod_image: "link.image.jpg",
      prod_original_price: "49",
      prod_discounted_price: "17",
      prod_sale_price: "30",
      prod_category_name: "Pents",
      prod_category_id: "1",
      prod_quantity: "20",
      prod_selected_color: null,
      prod_selected_size: null,
    },
    {
      prod_name: "Usama",
      prod_id: "17",
      prod_image: "link.image.jpg",
      prod_original_price: "49",
      prod_discounted_price: "17",
      prod_sale_price: "30",
      prod_category_name: "Pents",
      prod_category_id: "1",
      prod_quantity: "20",
      prod_selected_color: null,
      prod_selected_size: null,
    },
  ],
};

var addressResponse = {
  status: 1,
  message: "success",
  data: [
    {
      user_id: "uniqueid1500",
      name: "home",
      city: "lhr",
      address_lane: 15898,
      postal_code: 15898,
      street: 158,
      phone_no: 15898,
    },
    {
      user_id: "uniqueid1500",
      name: "home",
      city: "lhr",
      address_lane: 15898,
      postal_code: 15898,
      street: 158,
      phone_no: 15898,
    },{
      user_id: "uniqueid1500",
      name: "home",
      city: "lhr",
      address_lane: 15898,
      postal_code: 15898,
      street: 158,
      phone_no: 15898,
    },{
      user_id: "uniqueid1500",
      name: "home",
      city: "lhr",
      address_lane: 15898,
      postal_code: 15898,
      street: 158,
      phone_no: 15898,
    },{
      user_id: "uniqueid1500",
      name: "home",
      city: "lhr",
      address_lane: 15898,
      postal_code: 15898,
      street: 158,
      phone_no: 15898,
    }
  ],
};
