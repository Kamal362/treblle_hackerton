
const errorMessage = err => {
     
    ///console.log(err.message)  [I don't know what to do]

    let allErrorsMessages = err.message.split(':')
   


    if(allErrorsMessages.includes('E11000 duplicate key error collection')){
        return "User already exists..."
    }
    let message = {
        Email: allErrorsMessages[2]  , 
        Password: allErrorsMessages[3] 
    }

  console.log(allErrorsMessages)
  
  return message
  
}

module.exports = { errorMessage }