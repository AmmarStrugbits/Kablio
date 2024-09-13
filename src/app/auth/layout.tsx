'use client'
import NavbarQuizz from "@/components/navbar/NavbarQuizz";

export default function AuthLayout(props: any) {
    const { children } = props;

    return (
        <div>
            <NavbarQuizz />
            {children}
        </div>
    );
}