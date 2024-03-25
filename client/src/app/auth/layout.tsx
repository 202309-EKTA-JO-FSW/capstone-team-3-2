import Footer from "@/components/Footer"
import LandingNavbar from "@/components/LandingNavbar"
import { Container, Col, Row } from "reactstrap"

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <main >
            <div  
          >

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