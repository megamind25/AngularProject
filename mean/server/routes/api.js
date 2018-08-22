const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean',{ useNewUrlParser: true }, (err, client) => {
        var db = client.db('mean');  
    if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};
// var x1='ObjectId("'+'5b73ea778eb3c3049437f7cf'+'")';
// x3='ObjectId('+'\"5b73ea778eb3c3049437f7cf\"'+')';
// _id=x1;
// x="{\"_id\":"+x1+"}";
// var name="jane"
// console.log(x1);
// //x2=JSON.parse({_id})
// //console.log(x2);
// y=JSON.stringify({name});
// console.log(y);
// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            //.find({"name":name})
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
router.get('/getfeed', (req, res) => {
    connection((db) => {
        db.collection('feedback')
            .find()
            .toArray()
            .then((feed) => {
                response.data = feed;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/addItem', (req, res) => {
    connection((db) => {
        db.collection('users').insertOne(req.body);
    });
});

// router.put('/updateItem',(req,res)=>{
//     connection((db)=>{
//         db.collection('users').update({"item_name":"a"},{$set:{[(req.body)]}});
//     })
// })

// router.put('/login',(req,res)=>{
//     connection((db)=>{
//         db.collection('login').inserOne(req.body);
//     });
// });
router.post('/register', (req, res) => {
    connection((db) => {
        db.collection('owner').insertOne(req.body);
    });
});
router.post('/addFeedback',(req,res)=>{
    connection((db)=>{
        db.collection('feedback').insertOne(req.body);
    });
});
router.get('/login', (req, res) => {
    console.log()
    //console.log(req.query);
    //console.log(req.query.uname)
    
    connection((db) => {
        db.collection('owner')
            .find({"username":req.query.uname, "password":req.query.pwd})
            .toArray()
            .then((owner) => {
                response.data = owner;
                res.json(response);
                //console.log(response.data)
                //console.log(res);
                //console.log(response);
                //console.log(response.data.length)
                console.log(response.data[0]["name"])
                if(response.data.length>=1)
                console.log("auth")
                
                else
                console.log("not auth")

            })
            .catch((err) => {
                sendError(err, res);
            });
            
       
    });
});
router.get('/display', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find({},{_id:0})
            //.find({"name":name})
            .sort({"restaurant_name":1})
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// router.get('/search', (req, res) => {
//     console.log()
//     console.log(req.query);
//     console.log(req.query.searchtag)
    
//     connection((db) => {
//         db.collection('users')
//             .find({$or:[{"tags":req.query.searchtag},{"cuisine":req.query.searchtag}]})
//             .toArray()
//             .then((owner) => {
//                 response.data = owner;
//                 res.json(response);
//                 //console.log(response.data)
//                 //console.log(res);
//                 console.log(response);
//                 //console.log(response.data.length)
                
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
            
       
//     });
// });;

router.get('/search', (req, res) => {
    console.log()
    console.log(req.query);
    console.log(req.query.searchtag)
    
    connection((db) => {
        db.collection('users')
            .find({$or:[{"tags":req.query.searchtag},{"cuisine":req.query.searchtag}]})
            .toArray()
            .then((owner) => {
                response.data = owner;
                res.json(response);
                //console.log(response.data)
                //console.log(res);
                console.log(response);
                //console.log(response.data.length)
                
            })
            .catch((err) => {
                sendError(err, res);
            });
            
       
    });
});;

// ------------main file-----------

// router.get('/getItems', (req,res)=>
// {
//     console.log(req.query.enquired)
//     // connection((db) => {
//     // var q = {restaurant_name : req.query.enquired};
//     // var projection = {item_name : 1, price : 1}
//     // db.collection('users').find({"restaurant_name":"Zayka"}).toArray().then((users)=>{response.data = users;
//     //      res.json(response);})
//     //      .catch((err) => {sendError(err,res);});
//     // });
//     // 
//     connection((db) => {
//         db.collection('users')
//             .find({restaurant_name : req.query.enquired})
//             //.find({"_id":x1})
//             .toArray()
//             .then((users) => {
//                 response.data = users;
//                 res.json(response);
//                 console.log("In database retrieval query");
//                 console.log(response.data)
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });

    
// });

// router.get('/getRestNames',(req,res)=>
// {
//     connection((db)=>{
//         db.collection('users').distinct('restaurant_name').then((users)=>{response.data = users; res.json(response);
//         console.log("In database names retrieval");
//         console.log(response.data)
//     })
//     .catch((err)=>{
//         sendError(err,res);
//     })
//     });

//     /*db.collection("owner").find().toArray(function (err, docs) {
//         res(docs);
//     });*/
// });
// router.post('/placeOrder',(req,res)=>
// {
//         connection((db)=>
//         {
//             db.collection('orders').insertOne(req.body);
//         }); 
    
// }); 

// ----------main file-----------

router.post('/placeOrder',(req,res)=>
{
		connection((db)=>
		{
			db.collection('orders').insertOne(req.body);
		});	
	
});	

router.get('/getRestNames',(req,res)=>
{
    connection((db)=>{
        db.collection('users').distinct("restaurant_name",{}).then((users)=>{response.data = users; res.json(response);
        console.log("In database names retrieval");
        console.log(response.data)
    })
    .catch((err)=>{
        sendError(err,res);
    })
    });
});

router.get('/getOrders',(req,res)=>
{
    connection((db)=>
{
    db.collection('orders').find({restName:req.query.enquired}).toArray().then((orders)=>{
        response.data = orders;
        res.json(response);
        console.log("In orders retrieval")
        console.log(response.data)
    });
});

});

router.get('/getItems', (req,res)=>
{
    console.log(req.query.enquired)
    // connection((db) => {
	// var q = {restaurant_name : req.query.enquired};
	// var projection = {item_name : 1, price : 1}
    // db.collection('users').find({"restaurant_name":"Zayka"}).toArray().then((users)=>{response.data = users;
    //      res.json(response);})
    //      .catch((err) => {sendError(err,res);});
    // });
    // 
    connection((db) => {
        db.collection('users')
            .find({restaurant_name : req.query.enquired})
            //.find({"_id":x1})
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
                console.log("In database retrieval query");
                console.log(response.data)
            })
            .catch((err) => {
                sendError(err, res);
            });
    });

    
});




module.exports = router;