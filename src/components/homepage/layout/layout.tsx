import Navbar from "@/components/navbar/Navbar";

export default function HomepageLayout(props: any) {
    const { children } = props;
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}