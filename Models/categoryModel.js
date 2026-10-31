 const mongoose = require('mongoose');

 const categorySchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: [true,"Category is Required"],
            unique: [true,"Category must be unique"],
            minlength:[3,"Too Short Category Name"],
            maxlength:[35,"Too Long Category Name"]
        },
        slug:
        {
            type: String,
            lowercase: true
        },
        image:String
    },
    {timestamps:true}
);

    const CategoryModel = mongoose.model('Category',categorySchema); 

    module.exports = CategoryModel;