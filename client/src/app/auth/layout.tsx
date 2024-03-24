import Footer from "@/components/Footer"
import LandingNavbar from "@/components/LandingNavbar"
import { Container, Col, Row } from "reactstrap"
//import AuthLayout from "../auth/layout.tsx";

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <main style={{ 
            display: "flex", 
            flexDirection: "column", 
            minHeight: "100vh" 
        }}>
            <div  style={{ 
            flex: "1", 
            backgroundImage: "url(/login.png)", 
            backgroundSize: "cover", 
            paddingBottom: "6rem", 
            minHeight: "calc(100vh - 6rem)" 
        }}>

                <Col >
                
                    <Row >
                        
                        {children}

                    </Row>
                    
                </Col>

            </div>
            <Footer />

        </main >
    )
}

export default AuthLayout