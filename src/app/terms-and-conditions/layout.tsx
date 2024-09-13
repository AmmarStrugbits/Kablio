import FooterSection from "@/components/blog/FooterSection";
import Navbar from "@/components/navbar/Navbar";

export default function HomepageLayout(props: any) {
    const { children } = props;
    return (
        <div>
            <Navbar />
            {children}
            <FooterSection backgroundColor='rgba(1, 186, 248, 0.74)' />
        </div>
    )
}