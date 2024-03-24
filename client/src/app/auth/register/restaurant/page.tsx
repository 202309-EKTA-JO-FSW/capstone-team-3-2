import Hero from "@/components/Hero/Hero";
import { RegisterForm } from "@/components/auth/restaurant-register-form";

const RegisterPage = () => {
    return (
        
<div style={{ backgroundColor:"#e0dcd1"}}>

            <Hero imgUrl={'/joinusrestaurant.png'} header={'Welcome to Our Website'} subHeader={'DishDash'} paragraph={'Sign up to access exclusive features.'} />

            <RegisterForm mainHeader="Join Us Restaurant" />
        </div>
    );
};

export default RegisterPage;
