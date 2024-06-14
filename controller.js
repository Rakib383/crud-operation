import Contact from "./Contact.js";

export const getAllContact = (req, res) => {
 
  Contact.find()
    .then((contacts) => {
      
      res.render('index',{contacts,error:{}});
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "error occured",
      });
    });
};


export const getSingleContact = (req, res) => {
  let { id } = req.params;
  Contact.findById(id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "error occured",
      });
    });
};


export const createContact = (req, res) => {
 
  let { name, phone, email,id } = req.body;

  let error={}

  if(!name) {
    error.name='please provide a name'
  }
  if(!phone) {
    error.phone='please provide a phone number'
  }
  if(!email) {
    error.email='please provide a email'
  }

  let isError = Object.keys(error).length > 0
 
  if(isError) {
    Contact.find()
            .then(contacts => {

              return res.render('index',{contacts,error})
            })
            .catch((e) => {
             return res.json({
                message: "error occured 2"
              });
            });
        return;
  }
  if (id){
    Contact.findOneAndUpdate({
      _id : id
    },{$set:{
      name,email,phone
    } }).then(() => {
      Contact.find()
            .then(contacts => {
              res.render('index',{contacts,error:{}})
            })
    }).catch((e) => {
      return  res.json({
        message: "error occured 3"
      });
    });
  } else{
    let contact = new Contact({
      name,
      phone,
      email
    });
    contact.save()
      .then((c) => {
       Contact.find()
              .then(contacts => {
                return res.render('index',{contacts,error:{}})
              })
            
      })
      .catch((e) => {
        return  res.json({
          message: "error occured 3"
        });
      });
  }

  
};


export const updateContact = (req, res) => {
  let { name, email, phone } = req.body;
  let { id } = req.params;
  Contact.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        email,
        phone
      },
    },{new:true})

    .then((c) => {
        res.json(c);
      })
      .catch((e) => {
        res.json({
          message: "error occured",
        });
      });
    
};


export const deleteContact = (req, res) => {
    let {id}= req.params
    Contact.findOneAndDelete({_id:id})
    .then((c) => {
       
      Contact.find()
        .then(contacts => {
          res.render('index',{contacts,error:{}}
          )
        })

      })
      .catch((e) => {
        res.json({
          message: "error occured",
        });
      });

};
