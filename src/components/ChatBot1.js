import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot"; 
import Post from './Post';
import { ThemeProvider } from 'styled-components';

const config ={
  width: "400px",
  height: "500px",
  floating: true,
};



const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};
    export default class ChatBot1 extends Component {
      render() {
        return (
          <ThemeProvider theme={theme}>
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
     trigger:'intromedicine',
            },

  
            {
              id:'intromedicine', 
              message:'Which medicine do you need?', 
              trigger:'intro-user',
            },
            {
              id:'intro-user', 
              options:[
              {value:'dolo', label:'dolo', trigger:'yes-response'},
              {value:'crosin', label:'crosin', trigger:'ye-response'},
              ] 
            },





           
            // {
            //   id:'intro', 
            //   message:'Do you agree to the Terms and Conditions?', 
            //   trigger:'intro-user',
            // },
            // {
            //   id:'intro-user', 
            //   options:[
            //   {value:'y', label:'Yes', trigger:'yes-response'},
            //   {value:'n', label:'No', trigger:'no-response'},
            //   ] 
            // },
            {
              id:'yes-response', 
              message:'Dolo 650 Tablet is a medicine used to relieve pain and to reduce fever. It is used to treat many conditions such as headaches, body aches, toothaches, and the common cold. It works by inhibiting the release of certain chemicals that cause pain and fever.', 
              // end:true,
              trigger:'q-submit'
            },
            {
              id:'ye-response', 
              message:'Crocin Advance Tablet 20 s belongs to the group of mild analgesics (pain killer), and antipyretic (fever-reducing agent) used to treat mild to moderate pain including headache, migraine, toothache, menstrual period pain, osteoarthritis pain, musculoskeletal pain, and reducing fever.', 
              // end:true,
            },
            {
              id:'q-submit', 
              message:'Do you want to purchase?', 
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
          </ThemeProvider>
        );
      }
           
    }
    
  
    