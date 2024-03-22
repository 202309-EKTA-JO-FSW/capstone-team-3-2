import Hero from "@/components/Hero/Hero";
import { RegisterForm } from "@/components/auth/restaurant-register-form";

const RegisterPage = () => {
    return (
        <div>

            <Hero imgUrl={'/landingpage.png'} header={'Welcome to Our Website'} subHeader={'Riders!'} paragraph={'Sign up to access exclusive features.'} />

            <RegisterForm mainHeader="Join Us Restaurant" />
        </div>
    );
};

export default RegisterPage;
