
const express = require("express"); //express is a framework check google.
const path = require("path");
const fs = require("fs");
const app = express();
var cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
var session = require("express-session");
var morgan = require("morgan");
const bodyparser = require("body-parser");
var assert = require('assert'); //middleware. 


const { stringify } = require("querystring");
const { ifError } = require("assert");
const { userInfo } = require("os");
const { dirname } = require("path");

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
 
// // initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

app.use(
   session({
     key: "user_sid",
     secret: "somerandonstuffs",
     resave: false,
     saveUninitialized: false,
     cookie: {
       expires: 600000,
     },
   })
 );


main().catch(err => console.log(err)); //start mongod by yourself otherwisw it wont connect.

async function main() {
    mongoose.connect('mongodb://localhost:27017/store')}

       
    const port = 80;

const userSchema = new mongoose.Schema({ //this is schema which is basically the design of the database. if u want to add more data you have to change schema.
   

   name:{
      type:String
   },
    email:{
      type: String,
      unique:true
    },
    password: 
    {
        type: String,
       
    },
   
    cpassword: 
    {
        type: String,
        
    }

  
});

const user = mongoose.model('user', userSchema);

const contactSchema = new mongoose.Schema({
   name:{ type: String},
   email:{type: String},
   message:{type: String}
});

const contacts = mongoose.model('contacts' , contactSchema);


const buyerSchema = new mongoose.Schema({
   custname: { type: String},
  
   phoneno : { type: Number },
 
   address : { type: String},
   landmark: { type: String},
  product: { type: String },
    size : { type: String },
   
   
});
    
const buyer = mongoose.model('buyer', buyerSchema);

app.use((req, res, next) => {
   if (req.cookies.user_sid && !req.session.user) {
     res.clearCookie("user_sid");
   }
   next();
 });
 
 // middleware function to check for logged-in users
 var sessionChecker = (req, res, next) => {
   if (req.session.user && req.cookies.user_sid) {
     res.render('/index');
   } else {
     next();
   }
 };
  


// For serving static files
app.use('/static', express.static('static')) 


app.use(express.urlencoded())





//for get files 


app.set('views', path.join(__dirname, 'views')) 
app.set('view engine' , 'ejs');

app.get('/', (req, res) => {
   res.render('index1');
});


app.get('/index', (req, res) => {
   if (req.session.user && req.cookies.user_sid) {
     res.render('index');
   } else {
    res.render('login');
  
   }
 });


app.get('/about', (req, res) => {
   res.render('about');
});



 app
 .route('/signup')
 .get(sessionChecker, (req, res) => {
   res.render('signup' , {title:''});
 });

 app
 .route('/login')
 .get(sessionChecker, (req, res) => {
   res.render('login' , {title:''});
 });



//  app.get('/orderconfirmed' , (req , res)=>{
//    res.render('orderconfirmed');
//  })

 app.get('/bag/bag1', (req, res) => {
    res.render('bag/bag1');
 });  app.get('/bag/bag2', (req, res) => {
    res.render('bag/bag2');
 });app.get('/bag/bag3', (req, res) => {
    res.render('bag/bag3');
 });app.get('/bag/bag4', (req, res) => {
    res.render('bag/bag4');
 });app.get('/bag/bag5', (req, res) => {
    res.render('bag/bag5');
 });app.get('/bag/bag6', (req, res) => {
    res.render('bag/bag6');
 });app.get('/bag/bag7', (req, res) => {
    res.render('bag/bag7');
 });app.get('/bag/bag8', (req, res) => {
    res.render('bag/bag8');
 });app.get('/bag/bag9', (req, res) => {
    res.render('bag/bag9');
 });app.get('/bag/bag10', (req, res) => {
    res.render('bag/bag10');
 });app.get('/bag/bag11', (req, res) => {
    res.render('bag/bag11');
 });app.get('/bag/bag12', (req, res) => {
    res.render('bag/bag12');
 });

//garments

app.get('/gar/gar1', (req, res) => {
    res.render('gar/gar1');
 });  app.get('/gar/gar2', (req, res) => {
    res.render('gar/gar2');
 });app.get('/gar/gar3', (req, res) => {
    res.render('gar/gar3');
 });app.get('/gar/gar4', (req, res) => {
    res.render('gar/gar4');
 });app.get('/gar/gar5', (req, res) => {
    res.render('gar/gar5');
 });app.get('/gar/gar6', (req, res) => {
    res.render('gar/gar6');
 });app.get('/gar/gar7', (req, res) => {
    res.render('gar/gar7');
 });app.get('/gar/gar8', (req, res) => {
    res.render('gar/gar8');
 });app.get('/gar/gar9', (req, res) => {
    res.render('gar/gar9');
 });app.get('/gar/gar10', (req, res) => {
    res.render('gar/gar10');
 });app.get('/gar/gar11', (req, res) => {
    res.render('gar/gar11');
 });app.get('/gar/gar12', (req, res) => {
    res.render('gar/gar12');
 });


 //shoes


 app.get('/shoe/shoe1', (req, res) => {
    res.render('shoe/shoe1');
 });  app.get('/shoe/shoe2', (req, res) => {
    res.render('shoe/shoe2');
 });app.get('/shoe/shoe3', (req, res) => {
    res.render('shoe/shoe3');
 });app.get('/shoe/shoe4', (req, res) => {
    res.render('shoe/shoe4');
 });app.get('/shoe/shoe5', (req, res) => {
    res.render('shoe/shoe5');
 });app.get('/shoe/shoe6', (req, res) => {
    res.render('shoe/shoe6');
 });app.get('/shoe/shoe7', (req, res) => {
    res.render('shoe/shoe7');
 });app.get('/shoe/shoe8', (req, res) => {
    res.render('shoe/shoe8');
 });app.get('/shoe/shoe9', (req, res) => {
    res.render('shoe/shoe9');
 });app.get('/shoe/shoe10', (req, res) => {
 res.render('shoe/shoe10');
 });app.get('/shoe/shoe11', (req, res) => {
    res.render('shoe/shoe11');
 });app.get('/shoe/shoe12', (req, res) => {
    res.render('shoe/shoe12');
 });



 app.get('/detailsbag', (req, res) => {
 
      res.render('detailsbag');
  
  });


 app.get('/detailsgar', (req, res) => {
  res.render('detailsgar');

  });

 app.get('/detailsshoe', (req, res) => {
  
      res.render('detailsshoe');

  });


 app.get('/payment', (req, res) => {
    res.render('payment');
 });



app.get('/orderconfirmed', (req, res) => {
    res.render('orderconfirmed');
 });

 app.get('/logout', (req, res) => {
  res.render('login' , {title:''});
   
   });
 
   app.get('/contact', (req, res) => {
      res.render('contact' , {title:''});
       
       });


 
//post files



 app.post('/bag/bag1', (req, res) => {
    res.render('detailsbag');
 });

//  app.post('/orderconfirmed', (req, res) => {
//     res.render('index1');
//  });



    //for signing up
app.post('/signup',  (req, res) => {

   const name  = req.body.name;
 const email = req.body.email;
const password = req.body.password;
const cpassword = req.body.cpassword;

 if(password === cpassword)
 {
    const email1 = user.findOne({email:email}, (err, result)=>{
    if(email === email1.email)
    {
      
      // res.render('signup' , {title: 'User Id Exists!'})
      //   res.render('useridexist');  

    }

    else{
        
        var mydata = new user(req.body);
         mydata.save(err=>{
            if(err){
               res.render('signup' , {title: 'Email Id Already Exists! '})
               //  res.render('useridexist');
            }
           res.render('index');
         
         }) 
        }
    
    })
        
    }
        else{
            res.render('signup' , {title :'Password Not Matching!'});
        }
})

        


     //for login


   

       

app.post('/login' , (req, res)=>{
    const {
        email,
        password
    } = req.body;
    
    user.findOne({email:email} , (err,result)=>{
        if(email === result.email && password === result.password)
        {
         
            res.render('index');
        }
            else{
                res.render('login' , {title:'Incorrect Password/Username! '});
            }
        })
    })


app.post('/contact' , (req , res)=>{
   const {
      name,
      email,
      message
   }=req.body;

   var contactdata = new contacts(req.body);
   contactdata.save(err=>{
      if(err){
         res.render('contact' , {title: ''})
       
      }
      else 
     res.render('contact' , {title:'Thank You! We Have got your feedback.'});
   })
})



        app.post('/detailsgar',  (req, res) => {

            custname = req.body.custname
            username = req.body.username
            phoneno = req.body.phoneno
       
            address =  req.body.address
            landmark=  req.body.landmark
            product=req.body.product
            size = req.body.size
           
    
             var buyers = new buyer(req.body);
            
             buyers.save().then(() => {
                   
                    res.render('payment');
                 }).catch(() => {
                     res.status(400).send("not saved")
         
                 })
            
               
            })


            app.post('/detailsbag',  (req, res) => {

               custname = req.body.custname
               username = req.body.username
               phoneno = req.body.phoneno
             
               address =  req.body.address
               landmark=  req.body.landmark
               product= req.body.product
               size = req.body.size
              
       
                var buyers = new buyer(req.body);
               
                buyers.save().then(() => {
                      
                       res.render('payment');
                    }).catch(() => {
                        res.status(400).send("not saved")
            
                    })
               
                  
               })


               app.post('/detailsshoe' ,  (req, res) => {

                  custname = req.body.custname
                  username = req.body.username
                  phoneno = req.body.phoneno
                
                  address =  req.body.address
                  landmark=  req.body.landmark
                  product= req.body.product
                  size = req.body.size
                 
          
                   var buyers = new buyer(req.body);
                  
                   buyers.save().then(() => {
                         
                          res.render('payment');
                       }).catch(() => {
                           res.status(400).send("not saved")
               
                       })
                  
                     
                  })
   

       
// app.post('/payment' , (req , res)=> {

//  buyer.find({} , function( err , buyers){
//     res.render('orderconfirmed' , {
//         buyerslist: buyers
//     })
//  })

// })

// app.post('/payment' , (req , res)=> {

   
//        res.render('index');
        
     
//    })



// app.post('/orderconfirmed'  ,(req , res)=>{
//    res.render('/');
// })




app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});




 
      

















