import axios from "axios";
import { useEffect, useState } from "react"
import style from "./Cloudinary.module.css"
import { useDispatch } from "react-redux";
import { getUrlImage } from "../../redux/actions";

const Cloudinary = () => {

  const [image, setImage] = useState("")
  const dispatch = useDispatch();

  const uploadPreset = "casting_app"
  const cloudName = "dntrnqcxe";

  const URL = `https://api.cloudinary.com/v1_1/${cloudName}/upload`


    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setImage(file)
    };

    useEffect(() => {

      const submitImage = async () => {
        if (image === "") {
          console.log("No se ha seleccionado una imagen.");
          return;
        }
    
      const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", uploadPreset);
        formData.append("cloud_name", cloudName);
      
        try {
          const response = await axios.post(URL, formData);
          const responseData = response.data;
          const imageUrl = responseData.url;
          dispatch(getUrlImage(imageUrl));
        } catch (error) {
          console.log({ error });
        }
      };
      
      if(image){
        submitImage()
      } 

    },[image, URL, dispatch])
  
    return(
        <section className={style.section}>
            <input type="file" accept="image/*" onChange={handleFileChange}/>
        </section>
    )
}

export default Cloudinary