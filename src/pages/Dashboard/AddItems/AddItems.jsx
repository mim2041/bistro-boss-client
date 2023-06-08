import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItems = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=img_hosting_token`
  
    const onSubmit = data => {
    const formData = new Formdata();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse)
        })


  };

  console.log(errors);
  console.log(img_hosting_token);
    return (
        <div className="w-full p-10">
            <SectionTitle subHeading={"What's New"} heading={"Add an Item"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"  {...register("name", {required: true, maxLength: 80})} className="input input-bordered w-full " />
                    
                </div>
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", {required: true, minLength: 6, maxLength: 12})} defaultValue={"pick one"} className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Srinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("price", {required: true, minLength: 6, maxLength: 12})}  className="input input-bordered w-full " />
                        
                    </div>
                </div>
                    <div className="form-control my-4">
                        <label className="label">
                            <span className="label-text">Your bio</span>
                            <span className="label-text-alt">Alt label</span>
                        </label>
                        <textarea {...register("recipe", {required: true, minLength: 6, maxLength: 12})}  className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Item Image</span>
                            </label>
                            <input type="file" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} className="file-input file-input-bordered w-full " />
                        </div>

                        <input className="btn btn-sm mt-4" type="submit" value="Add Item"/>
            </form>
        </div>
    );
};

export default AddItems;