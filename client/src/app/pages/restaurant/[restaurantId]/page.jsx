"use client";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import style from "../../../../creator.module.css";
import Stars from './components/Stars'
import { Container,Col, Row,Form,FormGroup,Label,Input ,Button} from "reactstrap";
import EditableRestaurantProfile from './components/EditableRestaurantProfile'

function Page() {
  const params = useParams();
  // const axios = require('axios');
  
  const fileInputRef = useRef(null);
  const restaurantId = params.restaurantId;
  const [edit, setEdit] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [restaurantProfile, setRestaurantProfile] = useState({
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
  });
  const [updatedrestaurant, setUpdatedrestaurant] = useState({
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
    rate:'',
  });

  useEffect(() => {
    const fetchRestaurantProfile = async () => {
      const url = `https://capstone-team-3-2.onrender.com/api/restaurant/profile/${restaurantId}`;

      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const response = await axios.get(url, { headers });
        const profileData = response.data;

        setRestaurantProfile({
          title: profileData.title || "",
          email: profileData.email || "",
          area: profileData.area || "",
          buildingNo: profileData.buildingNo || "",
          cuisine: profileData.cuisine || "",
          deliveryFee: profileData.deliveryFee || "",
          deliveryTime: profileData.deliveryTime || "",
          image: profileData.image || "",
          license: profileData.license || "",
          phone: profileData.phone || "",
          street: profileData.street || "",
          rate: profileData.rate || "",
        });
      } catch (error) {
        console.error('Error fetching restaurant profile:', error);
      }
    };

    fetchRestaurantProfile();
  }, [restaurantId]); 


  return (
    <div>
    <Container>
    <Row>
    
    <Col>

<Row>
<img src={`${restaurantProfile.image}`} alt="Restaurant-Image" />
</Row>


<span>Rate: </span><Stars rating={restaurantProfile.rate}></Stars>
    <EditableRestaurantProfile restaurantProfile={restaurantProfile} restaurantId={restaurantId}/>
    </Col>
    </Row>
    
    </Container>
    
    </div>
  );
}

export default Page;
