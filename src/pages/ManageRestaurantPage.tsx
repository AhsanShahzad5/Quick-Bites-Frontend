import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi"
import LoadingComponent from "@/components/LoadingComponent";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm"

function ManageRestaurantPage() {
  const { createRestaurant, isLoading:isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const {updateRestaurant , isLoading:isUpdateLoading} = useUpdateMyRestaurant();
  
  //return opposite of variable 
  const isEditing = !!restaurant;
  if(isCreateLoading || isUpdateLoading){
    // return <div>Loading Data... Please wait</div>
    return <LoadingComponent/>
  }
  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing? updateRestaurant: createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  )
}

export default ManageRestaurantPage