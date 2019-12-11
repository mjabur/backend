exports.getAll = async function(req, res) {
    try {
        let productsPromise = await Product.find()
        res.json({data: products})
    } catch (error) {
        res.json({error: error})  
    }    
}