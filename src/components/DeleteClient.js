import React from 'react';
import axios from 'axios';
 class Deletecandidate extends React.Component{
    
        constructor(props){
          super(props);
          this.toggle = this.toggle.bind(this);
          this.state = {
            error : null,
            items : [],
            showmeds:true,
          };
        }
      
    //    async componentDidMount() {
       

    //      axios
	// 		.delete("http://localhost:9190/userservice/api/delete/{userName}",this.state)
    //      .then(res => console.log(res))
    //      .then(
    //        (result) => {
    //          this.setState({
    //            items : result
               
    //          })
          
    //        },
           
    //        (error) => {
    //          this.setState({error})
    //        }
    //      )
         
      
    //     }


        deleteHandler = e => {
            e.preventDefault()
            console.log(this.state)
            axios
              .delete("http://localhost:9190/userservice/api/delete/{userName}", this.state)
              .then(response => {
                console.log(response)
                 
                alert("delete Successfull");
              })
              .catch(error => {
                console.log(error)
              })
          }
          cancel=(e) => {
            this.props.history.push("/")
           }


      
        toggle(){
          const currentState = this.state.islogin;
          this.setState({showmeds: !currentState});
        }
      
    
    render()
    {
        return(
           
      
      
    
            
           <div className="container"> 
           
           <form>
                        <div className="form-group">
                        <h1>Delete Client Page</h1>
                            <input class="form-control " placeholder="Enter  UserName To Delete" name="userName" ></input><br/><br/>
                        </div>
                                         
                        <button type="submit" name="Delete" onClick={this.deleteHandler} class="btn btn-success"  >Submit</button>
                    </form>
        </div>
           
        );
        }
 }
export default Deletecandidate;