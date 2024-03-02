'use client'

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter
} from "../ui/card"
import { BackButton } from "./back-button"
import { Header } from "./header"
import { Social } from "./social"

interface CardWrapperProps {
    children: React.ReactNode,
    mainHeader: string,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean
}

export const CardWrapper = ({
    children,
    mainHeader,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (

        <Card className=" shadow-md m-4 max-w-lg mx-auto w-[350px]">

            <CardHeader>
                <Header label={headerLabel}
                    mainHeader={mainHeader} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>

            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>


    )

}