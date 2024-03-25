import React, { Component } from 'react';
import { Row, Col, FormGroup, Label, Input, Button, Form } from 'reactstrap';

class EditableRestaurantProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      email: "",
      area: "",
      buildingNo: "",
      cuisine: "",
      deliveryFee: "",
      deliveryTime: "",
      image: "",
      license: "",
      phone: "",
      street: "",
      rate: "",
    };
    
  }
  
  componentDidMount() {
    this.fetchRestaurantProfile(this.props.restaurantId);
  }

  fetchRestaurantProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const response = await fetch(`https://capstone-team-3-2.onrender.com/api/restaurant/profile/${this.props.restaurantId}`,{headers});
      const data = await response.json();
      this.setState({
        title: data.title,
        email: data.email,
        area: data.area,
        buildingNo: data.buildingNo,
        cuisine: data.cuisine,
        deliveryFee: data.deliveryFee,
        deliveryTime: data.deliveryTime,
        image: data.image,
        license: data.license,
        phone: data.phone,
        street: data.street,
        rate: data.rate,
        id:data._id
      });
      // console.log(this.state);
    } catch (error) {
      console.error('Error fetching restaurant profile:', error);
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
      const response = await fetch(`https://capstone-team-3-2.onrender.com/api/restaurant/profile/${this.props.restaurantId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",        },
        body: JSON.stringify(this.state),
      });

      if (response.ok) {
        console.log('Restaurant profile updated successfully!');
      } else {
        console.error('Failed to update restaurant profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating restaurant profile:', error);
    }
  };

  render() {
    const { editMode } = this.state;

  
    return (
      <Form onSubmit={this.handleSubmit} color='dark'>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="title">
          Title
        </Label>
        <Input
          id="title"
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          disabled
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="email">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          disabled
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="area">
          Area
        </Label>
        <Input
          id="area"
          name="area"
          type="text"
          value={this.state.area}
          onChange={this.handleChange}
          disabled
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="buildingNo">
          Building No
        </Label>
        <Input
          id="buildingNo"
          name="buildingNo"
          type="text"
          value={this.state.buildingNo}
          onChange={this.handleChange}
          disabled
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="cuisine">
          Cuisine
        </Label>
        <Input
          id="cuisine"
          name="cuisine"
          type="text"
          value={this.state.cuisine}
          onChange={this.handleChange}
          disabled
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="deliveryFee">
          Delivery Fee
        </Label>
        <Input
          id="deliveryFee"
          name="deliveryFee"
          type="text"
          value={this.state.deliveryFee}
          onChange={this.handleChange}
          disabled
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="deliveryTime">
          Delivery Time
        </Label>
        <Input
          id="deliveryTime"
          name="deliveryTime"
          type="text"
          value={this.state.deliveryTime}
          onChange={this.handleChange}
          disabled
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="phone">
          Phone
        </Label>
        <Input
          id="phone"
          name="phone"
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          disabled
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="street">
          Street
        </Label>
        <Input
          id="street"
          name="street"
          type="text"
          value={this.state.street}
          onChange={this.handleChange}
          disabled
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="rate">
          Rate
        </Label>
        <Input
          id="rate"
          name="rate"
          type="text"
          value={this.state.rate}
          onChange={this.handleChange}
          disabled
        />
      </FormGroup>
    </Col>
  </Row>
  <Button type="submit" color="primary" disabled>Save</Button>
</Form>

    );
  }
}

export default EditableRestaurantProfileForm;
