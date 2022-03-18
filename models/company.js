module.exports =(mongoose) =>
{
  var companySchema  = new mongoose.Schema(
    { 
      name: {
        type: String,
        required: [true, 'Name is required'],
      },
      code: {
        type: String,
        required: [true, 'Code is required'],
      }, 
      address: {
        type: String,
        required: [true, 'Code is required'],
      }, 
      lat: {
        type: Number
      }, 
      lng: {
        type: Number
      }, 
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
  );
  return companySchema;
} 
