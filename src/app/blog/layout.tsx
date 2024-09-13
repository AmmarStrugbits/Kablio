'use client'

import FooterSection from "@/components/blog/FooterSection";
import HomepageLayout from "@/components/homepage/layout/layout";

export default function AccountLayout(props: any) {
    const { children } = props;
    return (<>
        <HomepageLayout>
            {children}
            <FooterSection />
        </HomepageLayout >
    </>

    );
}