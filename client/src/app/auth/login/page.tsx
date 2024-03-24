import Hero from "@/components/Hero/Hero"
import LandingNavbar from "@/components/LandingNavbar"
import { LoginForm } from "@/components/auth/login-form"


const LoginPage = () => {
    return (
        
        <div>
            {/*<Hero imgUrl={'/login.png'} header={'Welcome Back!'} subHeader={':)'} paragraph={'Sign in to access exclusive dishes.'} />*/}

            <LoginForm mainHeader='🔐 Log in' />
        </div>
    )
}

export default LoginPage