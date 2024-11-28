const shortid=require('shortid');
const {schema,url, }=require('../model/url');



async function handleCreateId(req,res){
    const body =req.body;
    if(!body.url){
        return res.status(400).json({"error":"url is req"});
    }
    const shortId=shortid();
    await url.create({
        shortID:shortId,
        originalUrl:body.url,
    });
    return res.render('home',{id:shortId});
}

async function handleGeturls(req,res){
    try {
        const urls = await url.find(); // Fetch the URL documents from your database
        res.render('home', { url: urls }); // Pass 'urls' as 'url' to the EJS template
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

async function handleGetUrlById(req,res){
    try {
        const foundUrl = await url.findOne({ shortID: req.params.id });

        if (foundUrl) {
            return res.redirect(foundUrl.originalUrl);
        } else {
            return res.status(404).send("Error: URL not found");
        }
    } catch (error) {
        console.error('Error retrieving URL:', error);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports={
    handleCreateId,
    handleGeturls,
    handleGetUrlById,
}