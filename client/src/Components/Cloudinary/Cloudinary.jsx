import axios from "axios";
import { useState } from "react"
import style from "./Cloudinary.module.css"
import { useDispatch } from "react-redux";
import { getUrlImage } from "../../redux/actions";

const Cloudinary = () => {

    const [image, setImage] = useState("")
    const dispapatch = useDispatch();

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
          const imageUrl = responseData.url;
          dispapatch(getUrlImage(imageUrl))
        } catch (error) {
          console.log({ error });
        }
    };

    return(
        <section className={style.section}>
            <input type="file" onChange={(event) => {setImage(event.target.files[0])}}/>
            <button onClick={submitImage}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.3681 0.875H12.1319C5.07937 0.875 0.875 5.07937 0.875 12.1319V28.3488C0.875 35.4206 5.07937 39.625 12.1319 39.625H28.3488C35.4013 39.625 39.6056 35.4206 39.6056 28.3681V12.1319C39.625 5.07937 35.4206 0.875 28.3681 0.875ZM29.5887 17.9637C29.0269 18.5256 28.0969 18.5256 27.535 17.9637L21.7031 12.1319V31.875C21.7031 32.6694 21.0444 33.3281 20.25 33.3281C19.4556 33.3281 18.7969 32.6694 18.7969 31.875V12.1319L12.965 17.9637C12.4031 18.5256 11.4731 18.5256 10.9112 17.9637C10.7756 17.8295 10.668 17.6695 10.5948 17.4932C10.5217 17.3169 10.4843 17.1278 10.485 16.9369C10.485 16.5687 10.64 16.1813 10.9112 15.91L19.2231 7.59812C19.4956 7.326 19.8649 7.17315 20.25 7.17315C20.6351 7.17315 21.0044 7.326 21.2769 7.59812L29.5887 15.91C30.1506 16.4719 30.1506 17.3825 29.5887 17.9637Z" fill="#00C9A7"/>
            </svg>

            </button>
        </section>
    )
}

export default Cloudinary