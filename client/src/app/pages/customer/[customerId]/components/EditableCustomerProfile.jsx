import React, { Component } from 'react';
import { Row, Col, FormGroup, Label, Input, Button, Form } from 'reactstrap';

class EditableCustomerProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildingNo: "",
      email: "",
      firstName: "",
      lastName: "",
      phone:"",
      street: "",
      password:'',
      newpassword:'',
      confirmpassword:'',
    };
    
  }
  
  componentDidMount() {
    this.fetchCustomerProfile(this.props.customerId);
  }

  fetchCustomerProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const response = await fetch(`https://capstone-team-3-2.onrender.com/api/customer/profile/${this.props.customerId}`,{headers});
      const data = await response.json();
      this.setState({
       
        buildingNo: data.buildingNo,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone:data.phone,
        street: data.street,
        password:data.password,
        newpassword:data.newpassword,
        confirmpassword:data.confirmpassword,
      });
      // console.log(this.state);
    } catch (error) {
      console.error('Error fetching Customer profile:', error);
    }
  };
    

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
      const token = localStorage.getItem("token");
      
      const data = JSON.stringify(this.state)
      console.log(data);
      console.log(token);
      const response = await fetch(`https://capstone-team-3-2.onrender.com/api/customer/profile/${this.props.customerId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",        },
        body: data,
      });
      

      if (response.ok) {
        console.log('Customer profile updated successfully!');
      } else {
        console.error('Failed to update Customer profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating Customer profile:', error);
    }
  };

  render() {
    const { editMode } = this.state;

  
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
         
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="buildingNo">Building No</Label>
              <Input
                id="buildingNo"
                name="buildingNo"
                type="text"
                value={this.state.buildingNo}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          
          <Col md={6}>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="text"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="street">Street</Label>
              <Input
                id="street"
                name="street"
                type="text"
                value={this.state.street}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit" color="primary">Save</Button>
      </Form>
    );
  }
}

export default EditableCustomerProfileForm;
