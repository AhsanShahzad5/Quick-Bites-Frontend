import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


//basically this is a custom hook
export const useCreateMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createMyRestaurantRequest = async (restaurantFormData: FormData):Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`            },
            body: restaurantFormData,
        });
        if (!response.ok) {
            throw new Error("Failed to create urestaurant")
        }

        return response.json();
    }
    //we renamed mutateAsync function from react-query to create user
    const { mutateAsync: createRestaurant, isLoading, isError, isSuccess } = useMutation(createMyRestaurantRequest);

    if (isSuccess) {
        toast.success("Restaurant Created")
    }

    if (isError) {
        toast.error("Some error occured")

    }
    return {
        createRestaurant, isLoading, isError, isSuccess
    };
}
