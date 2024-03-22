'use client'
import React from 'react';
import { useState } from "react";
import Footer from "@/components/Footer";
import RecentlyAdded from "@/components/CreatorProfile/RecentlyAdded";

function creatorsPage() {

    return (
        <div>
            
           
            <RecentlyAdded/>
                       <Footer/>
        </div>
    );
}

export default creatorsPage;



