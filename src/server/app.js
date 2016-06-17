var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/../../'));

app.get('/resources/sites', function(req, res) {
    console.log('GET /resources/sites');

    res.status(200).json([
        {
            code: "BGDE",
            hurz: 1,
            displayName: "BMG Germany",
            countryCode: "DE"
        }, {
            code: "BGUK",
            hurz: 2,
            displayName: "BMG UK",
            countryCode: "UK"
        }, {
            code: "BGCN",
            hurz: 3,
            displayName: "BMG China",
            countryCode: "CN"
        }, {
            code: "BGES",
            hurz: 4,
            displayName: "BMG Espana",
            countryCode: "ES"
        }
    ]);
});

app.get('/resources/sites/:siteCode', function(req, res) {
    console.log('GET /resources/sites/' + req.params.siteCode);

    res.status(200).json({
        code: "BGDE",
        displayName: "BMG Germany",
        countryCode: "DE"
    });
});

app.post('/resources/sites', function(req, res) {
    var newSite = req.body;

    console.log('POST /resources/sites - data: ', newSite);

    res.status(200).json({ ok: true });
});

app.put('/resources/sites/:siteCode', function(req, res) {
    var updatedSite = req.body;

    console.log('PUT /resources/sites/' + req.params.siteCode + ' - data: ', updatedSite);

    res.status(200).json({ ok: true });
});

app.listen(3030);
