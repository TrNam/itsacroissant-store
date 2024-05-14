"use client"

import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {

    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true)
    }, [])

    if (!isMount) return null;

    return(
        <>
            <PreviewModal/>
        </>
    )
}

export default ModalProvider;