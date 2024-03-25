"use client"
import Footer from "@/components/Footer"
import MyNavbar from "@/components/MyNavbar"
import withAuth from "@/components/withAuth"
import { Container, Col, Row } from "reactstrap"

const RestaurantLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <main>
            <MyNavbar homePage={'restaurant'} Id={localStorage.getItem('Id')} />
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

export default withAuth(RestaurantLayout)