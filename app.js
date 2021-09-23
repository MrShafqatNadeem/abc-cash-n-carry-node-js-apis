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
    res.status(200).send(productsByCatIdResponse);
    }
    else {
      res.status(302).send(failedResponse);
    }

});

app.get("/getProductBySearch", (req, res) => {
  res.status(200).send(productsByCatIdResponse);
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

app.listen(3000, () => {
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
      cat_id: "cat001",
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

var productsByCatIdResponse = {
  status: 1,
  message: "success",
  data: [
    {
      prod_name: "shafqat",
      prod_id: "12",
      prod_image: "link.image.jpg",
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
    {
      prod_name: "Usama",
      prod_id: "17",
      prod_image: "link.image.jpg",
      prod_images: [
        {
          imgurl: "",
          img_id: "349",
        },
      ],
      prod_description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
      prod_rating: "5.0",
      prod_rating_comment: "Amazing",
      prod_original_price: "49",
      prod_discounted_price: "17",
      prod_sale_price: "30",
      prod_reviews_count: "40",
      prod_category_name: "Pents",
      prod_category_id: "1",
      prod_quantity: "20",
      prod_selected_color: null,
      prod_selected_size: null,
      prod_sizes: [
        {
          prd_size: "10",
          prd_size_id: "5",
        },
      ],
      prod_colors: [
        {
          clr_id: "2",
          clr: "#021188",
        },
      ],
    },
    {
      prod_name: "asad",
      prod_id: "19",
      prod_image: "link.image.jpg",
      prod_images: [
        {
          imgurl: "",
          img_id: "309",
        },
      ],
      prod_description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
      prod_rating: "3.5",
      prod_rating_comment: "Good",
      prod_original_price: "22",
      prod_discounted_price: "10",
      prod_sale_price: "19",
      prod_reviews_count: "9",
      prod_category_name: "shirts",
      prod_category_id: "4",
      prod_quantity: "1",
      prod_selected_color: null,
      prod_selected_size: null,
      prod_sizes: [
        {
          prd_size: "19",
          prd_size_id: "17",
        },
      ],
      prod_colors: [
        {
          clr_id: "22",
          clr: "#000488",
        },
      ],
    },
  ],
};

var productResponse = {
  status: 1,
  message: "success",
  data: {
    prod_name: "shafqat",
    prod_id: "12",
    prod_image: "link.image.jpg",
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
