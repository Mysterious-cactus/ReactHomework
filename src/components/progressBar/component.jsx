import { useEffect, useState } from "react";

export const ProgressBar = () => {

    const [scrollDivWidth, setScrollDivWidth] = useState("0%");

    useEffect(() => {
        const onScroll = () => {
            const elementBody = document.getElementsByTagName("body")[0];
            setScrollDivWidth(((window.scrollY + window.innerHeight) / elementBody.clientHeight) * 100 + "%");
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return (
        <div style={{width: scrollDivWidth, height: "10px", backgroundColor: "black", position: "fixed"}}></div>
    );
};