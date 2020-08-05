import React, { Component } from 'react';
import fire from './Firebase';
import Table from './table';

class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      data: [],
      

    }

   
  
    this.handlename = this.handlename.bind(this);
    this.handleage = this.handleage.bind(this);
    

  }


  componentDidMount() {
    fire.database().ref('users').once('value').then(snapshot => {
      snapshot.forEach(item => {
        this.state.data.push({
          id: item.key,
          ...item.val()
        });
       
             
      
   });
    });
    
  }
  writeUserData() {

    fire.database().ref('users/').push({
      name: this.state.name,
      age: this.state.age,

    }, function (error) {
      if (error) {
        console.log("Failed to Upload")
      }
      else {
        console.log("Succesfull")
      }
    }
    );
  }

  handlename(e) {
    this.setState({ name: e.target.value });
  }
  handleage(e) {
    this.setState({ age: e.target.value });
  }
  render() {

    return (
<>


        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Data TO Firebase</button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Insert Into Firebase</h5>
                <button type="button" clasnaclassNames="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">Name:</label>
                    <input type="text" className="form-control" id="recipient-name"
                      onChange={this.handlename}
                      value={this.state.name} />
                  </div>
                  <div className="form-group">
                    <label for="message-text" className="col-form-label">Age:</label>
                    <input type="text" className="form-control" id="recipient-name1"
                      onChange={this.handleage}
                      value={this.state.age}
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary"
                  onClick={() => {
                    this.writeUserData()
                  }}>Send To Firebase</button>
                

              </div>
            </div>
          </div>
        </div>


      </>
    );
  }
}
export default About;