import Hero from "@/components/Hero/Hero";
import { RegisterForm } from "@/components/auth/register-form";

const RegisterPage = () => {
    return (
        <div>

            <Hero imgUrl={'/landingpage.png'} header={'Welcome To Our Website'} subHeader={'Bro!'} paragraph={'Sign up to have the best dishes.'} />
            {/* TODO: RegisterForm */}
            <RegisterForm mainHeader="Sign Up 🔐" />
        </div>
    );
};

export default RegisterPage;
