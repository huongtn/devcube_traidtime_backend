const mongoose = require('mongoose');
const userSchema =   require('./user')(mongoose); 
const categorySchema =  require('./category')(mongoose);  
const productSchema =  require('./product')(mongoose);  
const companySchema =  require('./company')(mongoose)
const orderSchema =  require('./order')(mongoose)

const User  = mongoose.models.User || mongoose.model('User', userSchema);
const Product =  mongoose.models.Product || mongoose.model('Product', productSchema);
const Category = mongoose.models.Category || mongoose.model('Category', categorySchema); 
const Company = mongoose.models.Company || mongoose.model('Company', companySchema); 
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema); 
module.exports =  {User,Product,Category,Company,Order}; 

//Populate relational fields
// purchaseSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'user',
//     select: 'email',
//   });
//   next();
// });

// purchaseSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'product',
//     select: 'title',
//   });
//   next();
// });
//const Purchase = mongoose.model('Purchase', purchaseSchema);
// const Product = mongoose.model('Product', productSchema);
//const User = mongoose.model('User', userSchema);
//module.exports = {Product,Purchase};
 
//module.exports = purchaseSchema;

// module.exports =
//   mongoose.models.Product || mongoose.model('Product', productSchema);
  
