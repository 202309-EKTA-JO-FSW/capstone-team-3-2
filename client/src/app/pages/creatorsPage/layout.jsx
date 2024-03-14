import Footer from "@/components/Footer"
import LandingNavbar from "@/components/LandingNavbar"
import '@/style.css';

const creatorsLayout = ({
    children
}) => {
    return (
        <div className="">
            <LandingNavbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default creatorsLayout