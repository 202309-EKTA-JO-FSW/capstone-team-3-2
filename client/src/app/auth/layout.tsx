import Footer from "@/components/Footer"
import LandingNavbar from "@/components/LandingNavbar"
import { Container, Col, Row } from "reactstrap"

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <main>
            <div className=" bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
                <Col >
                    <Row>
                        {children}

                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                </Col>
            </div>

        </main >
    )
}

export default AuthLayout