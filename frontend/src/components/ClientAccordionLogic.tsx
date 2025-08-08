"use client";

import { useEffect } from "react";
import { initAccordions } from "flowbite";

export default function ClientAccordionLogic() {
    useEffect(() => {
        initAccordions();
    }, []);

    return null;
}
