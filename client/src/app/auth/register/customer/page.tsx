import Hero from "@/components/Hero/Hero";
import { RegisterForm } from "@/components/auth/register-form";
import { useEffect } from "react";
import AuthLayout from "../../layout";
import LandingNavbar from "@/components/LandingNavbar";

const RegisterPage = () => {
    return (
        <div  style={{ backgroundImage: "url(/login.png)", backgroundSize: "cover", minHeight: "100vh"  }}>


            {/*<Hero imgUrl={'/login.png'} header={'Welcome To Our Website'} subHeader={':)'} paragraph={'Sign up to have the best dishes.'} />*/}
            {/* TODO: RegisterForm */}
            <RegisterForm mainHeader="Sign Up 🔐" />
        </div>
    );
};

export default RegisterPage;
