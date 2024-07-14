
import { Layout } from "../layout/component";
import { RestaurantContent } from "../restaurantContent/component";
import { ProgressBar } from "../progressBar/component";
import { ThemeContextProvider } from "../themeContext/component";
import { UserContextProvider } from "../userContext/component";

export const App = () => {  
    return (
        <>
            <ThemeContextProvider>
                <UserContextProvider>
                    <ProgressBar />
                    <Layout>
                        <RestaurantContent />
                    </Layout>
                </UserContextProvider>
            </ThemeContextProvider>           
        </>  
    );
};
