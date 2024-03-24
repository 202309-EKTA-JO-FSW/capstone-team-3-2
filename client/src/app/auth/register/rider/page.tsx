import Hero from "@/components/Hero/Hero";
import { RegisterForm } from "@/components/auth/rider-register-form";

const RegisterPage = () => {
    return (
<div style={{ backgroundColor:"#e0dcd1"}}>

            <Hero imgUrl={'/rider.png'} header={'Welcome to Our Website'} subHeader={'Riders!'} paragraph={'Sign up to access exclusive features.'} />

            <RegisterForm mainHeader="Join Us Now! Rider" />
        </div>
    );
};

export default RegisterPage;
