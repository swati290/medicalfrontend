import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot"; 
import Post from './Post';
const config ={
  width: "400px",
  height: "500px",
  floating: true,
};
    export default class ChatBot1 extends Component {
      render() {
        return (
          <ChatBot 
          steps={[
            {
              id:'q-intro', 
              message:'Hello world. I am a chatbot.', 
             trigger:'q-introuser',
             },
             {
              id:'q-introuser', 
              user:true, 
             trigger:'q-firstname',
             },


            {
              id:'q-firstname', 
              message:'What is your first name?', 
              trigger:'firstname',
            },
            {
              id:'firstname', 
              user:true, 
              validator: (value) => {
                 if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                   {
                     return true;
                   }
                 else
                   {
                     return'Please input alphabet characters only.';
                   }
                  },
              trigger:'q-lastname',
            },
            {
              id:'q-lastname', 
              message:'What is your last name?', 
              trigger:'lastname',
            },
            {
              id:'lastname', 
              user:true,
              
              trigger:'q-email'
            },
            {
              id:'q-email', 
              message:'what is you email?',
 trigger:'email',
},
{

id:'email',
user:true,
              validator: (value) => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return'Please enter a valid email.';
                  }
             }, 
              trigger:'q-phone',
            },

            {
              id:'q-phone', 
              message:'Hello. What is your phone number?', 
              trigger:'phone',
             },
             {
              id:'phone', 
              user:true, 
              validator: (value) => {
                 if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
                   {
                     return true;
                   }
                 else
                   {
                     return'Please enter 10 digit valid phone number.';
                   }
              },
     trigger:'intro',
            },

           
            {
              id:'intro', 
              message:'Do you agree to the Terms and Conditions?', 
              trigger:'intro-user',
            },
            {
              id:'intro-user', 
              options:[
              {value:'y', label:'Yes', trigger:'yes-response'},
              {value:'n', label:'No', trigger:'no-response'},
              ] 
            },
            {
              id:'yes-response', 
              message:'Great!', 
              // end:true,
              trigger:'q-submit'
            },
            {
              id:'no-response', 
              message:'Sorry to hear that.', 
              // end:true,
            },
            {
              id:'q-submit', 
              message:'Do you wish to submit?', 
              trigger:'submit'
            },
            {
              id:'submit', 
              options:[
              {value:'y', label:'Yes', trigger:'end-message'},
              {value:'n', label:'No', trigger:'no-submit'},
              ] 
            },
            {
                    id: 'no-submit',
                    message:'Your information was not submitted.', 
                    end: true,
                 },
                      {
                    id: 'end-message',
                    component: <Post />,
                    asMessage: true,
                    end: true,
                 },
          ]}
          {...config}
          />
        );
      }
           
    }
    
  
    