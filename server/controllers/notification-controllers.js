const Products = require("../models/product.model");
const {Notification} = require("../models/notification-model");
const Orders = require("../models/order-model");

const sendNotification = async (req, res) => {
    console.log("Hello")
    const { shopid } = req.body
    const currentDate = new Date()
    console.log(shopid)

    const currentProducts = await Products.find({ shopid: shopid })
    const order = await Products.find({})
    console.log(currentProducts)

    const currentProductsFromOrder = await Orders.find({ shopid: shopid })
    const expiredProducts = currentProductsFromOrder.filter((item) => {
      const { exp_date } = item
      if (exp_date) {
        const [day, month, year] = exp_date.split('-')
        const expDateObj = new Date(`${year}-${month}-${day}`)
        return expDateObj < currentDate
      }
      return false
    });

    
    const thresholdProducts = currentProducts.filter((item) => {
      const { productthreshold, quantity } = item
      if (productthreshold && quantity) {
        return quantity < productthreshold
      }
      return false
    });

    
    const expiredNotifications = expiredProducts.map((product) => ({
      notificationType: "Product Expiry",
      description:` Product ${product.name} has expired on ${product.exp_date}.`,
    }));

    const thresholdNotifications = thresholdProducts.map((product) => ({
      notificationType: "Less Stock",
      description: `Product ${product.productname} is below the threshold level. Current quantity: ${product.quantity}, Threshold: ${product.productthreshold}.`,
    }));

    const notifications = [...expiredNotifications, ...thresholdNotifications];
console.log("notifications", notifications);

if (notifications.length > 0) {
  // Insert notifications array into the notificationSchema
  await Notification.insertMany(notifications);

  res.status(200).json({ notifications });
} else {
  res.status(200).json({ message: "No expired or low-stock products found" });
}

};

module.exports = { sendNotification }