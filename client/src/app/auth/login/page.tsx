import LandingNavbar from "@/components/LandingNavbar"
import { LoginForm } from "@/components/auth/login-form"
import AuthLayout from "../layout"


const LoginPage = () => {
    return (


<div style={{ backgroundImage: "url(/login.png)", backgroundSize: "cover", minHeight: "100vh"}}>

            {/*<Hero imgUrl={'/login.png'} header={'Welcome Back!'} subHeader={':)'} paragraph={'Sign in to access exclusive dishes.'} />*/}
            <LoginForm mainHeader='🔐 Log in' />

</div>
     
)}

export default LoginPage