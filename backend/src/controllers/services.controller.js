const getPlumbing = (req,res)=>{
    res.json({service:"Plumbing", available:true})
};

const getElectrical = (req,res)=>{
    res.json({service:'Electrical', available:true})
};

const getCleaning = (req,res)=>{
    res.json({service:"Cleaning",available:true})
};

const getAllServices = (req,res)=>{
    res.json({service:["Plumbing","Electrical","Cleaning"]});
};

module.exports = {
    getPlumbing,
    getElectrical,
    getCleaning,
    getAllServices
};
