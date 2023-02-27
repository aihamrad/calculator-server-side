
const fs = require('fs')

exports.getHistroy = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    fs.readFile('./data/data.json', (err, data) => {
        const historyData = data.length === 0 || JSON.parse(data) === {} ? [] : JSON.parse(data)
        return res.json({
            success: historyData.length === 0 ? false : true,
            data: historyData
        });
    });
}


exports.postHistory = (req, res, next) => {
    try
    {
        fs.readFile('./data/data.json', (err, data) => {
        const historyData = data.length === 0 || !JSON.parse(data) ? [] : JSON.parse(data);
        historyData.push({...req.body}) 
        fs.writeFile('./data/data.json', JSON.stringify(historyData), (err) => {
            if (err) return res.json({
              success: false, message: err.message
            });
            
            return res.json({success: true, data: {...req.body}});
        });
    });
    }
    catch (err) {
        return res.status(401).send(err);
    }

}

exports.deleteHistory = (req, res, next) => {
    fs.readFile('./data/data.json', (err, data) => {
        const deletedHistory = []
        fs.writeFile('./data/data.json', JSON.stringify(deletedHistory), (err) => {
            if (err) return res.sned({
              success: false, message: err.message
            });
            return res.json({success: true, data: deletedHistory});
        });
    });
}