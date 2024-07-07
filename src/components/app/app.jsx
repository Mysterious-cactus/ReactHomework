import { useEffect, useState } from "react";
import { Layout } from "../layout/component";
import { RestaurantContent } from "../restaurantContent/component";

export const App = () => {
    const [currentY, setCurrentY] = useState(window.scrollY);
    const [totalHeight, setTotalHeight] = useState();
    const [scrollBarHeight, setscrollBarHeightHeight] = useState();

    useEffect(() => {
        const onScroll = () => {
            setCurrentY(window.scrollY);
        };

        window.addEventListener("scroll", onScroll);
        const elementBody = document.getElementsByTagName("body")[0];
        setTotalHeight(elementBody.clientHeight);
        setscrollBarHeightHeight(window.innerHeight);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [currentY]);

    const scrollDivWidth = ((currentY + scrollBarHeight) / totalHeight) * 100 + "%";
    return (
        <>
            <div style={{width: scrollDivWidth, height: "10px", backgroundColor: "black", position: "fixed"}}></div>
            <Layout>
                <RestaurantContent />
            </Layout>
        </>  
    );
};
