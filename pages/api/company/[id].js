import dbConnect from '../../../utils/dbConnect'
import dbContext from '../../../models/dbContext'
dbConnect();

const handler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;
  switch (method) {
    case "PUT":
      await dbContext.Company.create(req.body);
      return res.status(200).json({
        success: true,
        message: 'Saving successful!',
      });
    case "GET":  
        const company = await dbContext.Company.findById(id);
        return res
          .status(200)
          .json(company); 
    case "DELETE":
      await dbContext.Company.deleteOne({ _id: id });
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
