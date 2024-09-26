import FooterSection from "@/components/blog/FooterSection";
import Navbar from "@/components/navbar/Navbar";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};


export default function HomepageLayout(props: Props) {
    const { children } = props;
    return (
        <div>
            <Navbar />
            {children}
            <FooterSection backgroundColor='rgba(1, 186, 248, 0.74)' />
        </div>
    )
}