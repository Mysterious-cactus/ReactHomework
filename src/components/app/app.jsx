
import { Layout } from "../layout/component";
import { RestaurantContent } from "../restaurantContent/component";
import { ProgressBar } from "../progressBar/component";

export const App = () => {  
    return (
        <>
            <ProgressBar />
            <Layout>
                <RestaurantContent />
            </Layout>
        </>  
    );
};
