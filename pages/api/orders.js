import dbConnect from '../../utils/dbConnect'
import dbContext from '../../models/dbContext'
//var ObjectId = require('mongodb').ObjectID;
dbConnect();

 
const handler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;
  switch (method) {
    case "POST":
      await dbContext.Order.create(req.body);
      return res.status(200).json({
        success: true,
        message: 'Saving successful!',
      });
    case "GET":
 
      // var orderAgg = await dbContext.Order.aggregate([
      //   {
      //     '$match': {
      //       '_id': new ObjectId('622ab95e8b86ed2dfea9c800')
      //     }
      //   }, {
      //     '$lookup': {
      //       'from': 'users', 
      //       'localField': 'user', 
      //       'foreignField': '_id', 
      //       'as': 'user'
      //     }
      //   }
      // ]);
      // console.log(orderAgg);

      if (!id) {
        const orders = await dbContext.Order.find({}).populate('company').populate('user');
        for(let order of orders)
        { 
          for(let orderDetail of order.orderDetails)
          {
            orderDetail.product= await dbContext.Product.findById(orderDetail.product);
          } 
        } 
        return res
          .status(200)
          .json(orders);
      }
      else {
        const order = await dbContext.Order.findById(id).populate('company').populate('user');
        for(let orderDetail of order.orderDetails)
        {
          orderDetail.product= await dbContext.Product.findById(orderDetail.product);
        } 
        return res
          .status(200)
          .json(order);
      }
    case "DELETE":
      await dbContext.Order.deleteOne({ _id: id });
      return res.status(200).json({
        success: true,
        message: 'Delete successful!',
      });

    default:
      return res
        .status(400)
        .json({ success: false, message: 'Only POST requests are allowed.' });
  }
};
export default handler;
//export default withProtect(withRoles(handler, 'admin'));
