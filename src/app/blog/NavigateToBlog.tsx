'use client'

import LoadingAnimation from "@/shared/components/LoadingAnimation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NavigateTo = () => {
    const router = useRouter();
    useEffect(() => {
        router.push(`/blog/`);
    }, []);
    return <>
        <LoadingAnimation />
    </>
}

export default NavigateTo