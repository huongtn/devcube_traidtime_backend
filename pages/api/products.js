import dbConnect from '../../utils/dbConnect'
import dbContext from '../../models/dbContext'
dbConnect();

const handler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;
  switch (method) {
    case "POST":
      await dbContext.Product.create(req.body);
      return res.status(200).json({
        success: true,
        message: 'Saving successful!',
      });
    case "GET": 
      if (!id) {
        const products = await dbContext.Product.find({}).populate('category');
        return res
          .status(200)
          .json(products);
      }
      else
      {
        const product = await dbContext.Product.findById(id).populate('category');
        return res
          .status(200)
          .json(product);
      }
    case "DELETE":
      await dbContext.Product.deleteOne({ _id: id });
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