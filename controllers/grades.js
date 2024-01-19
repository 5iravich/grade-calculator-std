const Product = require('../models/grade');

exports.getProducts = (req, res, next)=>{
    Product.fetchAll((grades)=>
    res.render("main",{
        prods: grades, 
        docTitle: "เกรดเฉลี่ยวัดใจ", 
        path: "/",
        hasProducts: grades.length > 0,
        productCSS: true,
        activeStore: true,
        })
    );
};

exports.getAddProduct = (req, res, next)=>{
    res.render("frmAddSubject",{
        docTitle: "เพิ่มวิชา", 
        path: "/admin/frmAddSubject", 
        productCSS: true, 
        formsCSS: true, 
        activeAddProduct: true,
    });
};

exports.postAddProduct = (req,res,next)=>{
    const { subjectid, subjectname, subjectcredit, grade} = req.body;
    const product = new Product(subjectid, subjectname, subjectcredit, grade);
    product.save()
    res.redirect("/");
};