import Hero from "@/components/Hero/Hero"
import { LoginForm } from "@/components/auth/login-form"


const LoginPage = () => {
    return (
            <>

            <Hero imgUrl={'/landingpage.png'} header={'Welcome Back!'} subHeader={'BRO!'} paragraph={'Sign in to access exclusive dishes.'} />

            <LoginForm mainHeader='🔐 Log in' />
            </>
    )
}

export default LoginPage