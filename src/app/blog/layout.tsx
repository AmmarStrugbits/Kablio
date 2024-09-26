'use client'

import FooterSection from "@/components/blog/FooterSection";
import HomepageLayout from "@/components/homepage/layout/layout";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};


export default function AccountLayout(props: Props) {
    const { children } = props;
    return (<>
        <HomepageLayout>
            {children}
            <FooterSection />
        </HomepageLayout >
    </>

    );
}