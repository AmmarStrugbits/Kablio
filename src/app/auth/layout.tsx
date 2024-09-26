'use client'
import NavbarQuizz from "@/components/navbar/NavbarQuizz";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function AuthLayout(props: Props) {
    const { children } = props;

    return (
        <div>
            <NavbarQuizz />
            {children}
        </div>
    );
}