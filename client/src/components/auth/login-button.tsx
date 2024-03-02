'use client'
import { useRouter } from "next/navigation"

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: 'modal' | 'redirect',
    asChild?: boolean
}

interface SignupButtonProps {
    children: React.ReactNode,
    mode?: 'modal' | 'redirect',
    asChild?: boolean
}

export const LoginButton = ({
    children,
    mode = 'redirect', // Default mode
    asChild
}: LoginButtonProps) => {
    const router = useRouter()

    const onClick = () => {
        router.push('/auth/login')
    }
    if (mode === "modal") {
        return (
            <span>TODO: Implement modal</span>)
    }
    return (
        <span className="cursor-pointer" onClick={onClick}>
            {children}
        </span>
    )

}



export const SignupButton = ({
    children,
    mode = 'redirect', // Default mode
    asChild
}: SignupButtonProps) => {
    const router = useRouter()

    const onClick = () => {
        router.push('/auth/register')
    }
    if (mode === "modal") {
        return (
            <span>TODO: Implement modal</span>)
    }
    return (
        <span className="cursor-pointer" onClick={onClick}>
            {children}
        </span>
    )

}