import axios from "axios";
import { useState } from "react"

const Cloudinary = () => {

    const [image, setImage] = useState("")

    const uploadPreset = "casting_app"
    const cloudName = "dntrnqcxe";

    const URL = `https://api.cloudinary.com/v1_1/${cloudName}/upload`

    const submitImage = async () => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", uploadPreset);
        formData.append("cloud_name", cloudName);
        
        try {
          const response = await axios.post(URL, formData);
          const responseData = response.data;
          console.log(responseData);
          console.log(responseData.url)
        } catch (error) {
          console.log({ error });
        }
    };

    return(
        <section>
            <input type="file" onChange={(event) => {setImage(event.target.files[0])}}/>
            <button onClick={submitImage}>Subir Imágen</button>
        </section>
    )
}

export default Cloudinary