import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import arrow from './arrow.png'
import plusimg from './plus.png'
import './post.css'
import axios from 'axios';
import { toast } from 'react-toastify';

function Post() {

    const [ data ] = useState(JSON.parse(localStorage.getItem('user')));

    
    const [inputs, setInputs] = useState({
        service: "",
        service_name: "",
        price: "",
        description: "",
        image: "",
        location_detail: "",
        user_id: "",
    });

    const [photo, setPhoto] = useState("");

    const [image, setImage] = useState("")

    const navigate = useHistory();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleImgChange = (e) => {
        const objectUrl = URL.createObjectURL(e.target.files[0])
        setImage(objectUrl)
        setPhoto(e.target.files[0])
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append("file", photo)
        data.append("upload_preset", "bunkaimg" )
        data.append("cloud_name", "dpaen2twz")
 
        axios.post('https://api.cloudinary.com/v1_1/dpaen2twz/image/upload', data)
        .then((res)=> {
            inputs.image = res.data.url

            try {
                axios.post("https://bunka.cyclic.app/posts", inputs);
                navigate.push("/profile");
                toast.success("post success!!"); 
            } catch (err) {
                console.log(err.response.data);
            }
        }).catch((err)=> console.log(err)) 


        // try {
        //     axios.post('https://api.cloudinary.com/v1_1/dzh7xzbbz/image/upload', data)
        // } catch (err) {
        //     toast.error(err)
        // }

        // fetch('https://api.cloudinary.com/v1_1/dzh7xzbbz/image/upload', {
        // method: 'post',
        // body: data,
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data.url)
        // })
        // .catch((err) => {
        //     toast.error(err)
        // })



            // try {
            //     axios.post("http://localhost:8800/posts", inputs);
            //     navigate("/profile");
            //     toast.success("post success!!");
            // } catch (err) {
            //     console.log(err.response.data);
            // }    
      };

  return (
    <>
        <div className="post_body">
            <div id="post_body_head">
                <Link to={"/profile"}><li id="p_arrow"><img src={arrow} alt='' /></li></Link>
                <p id="head_post_body"><b>Post Your Service</b></p>
            </div>
            <hr size="3" color="#BDC3C7" />
            <div className="post_form">
                <form action="">
                    <p>service</p>
                    <input name='service' id="post_box" onChange={handleChange} 
                        
                    />

                    <p>service Name</p>
                    <input name='service_name' type="text" id="post_box" onChange={handleChange} /><br />

                    <p>Price</p>
                    <input name='price' type="text" id="post_box" onChange={handleChange} /><br />

                    <p>Description</p>
                    <textarea name='description' cols="60" rows="10" id="post_textarea" onChange={handleChange} ></textarea><br />

                    <p>Add Photos</p>
                    <div  id="post_photo">
                        <div  id="post_photo_box">
                            <input name='image' id='choose_img' type="file" onChange={(handleImgChange)} />
                            {image ? 
                            <img id='icon_img' src={image} alt="" /> :
                            <img id='icon_img' src={plusimg}alt="" onClick={() => {
                                document.getElementById('choose_img').click()
                            }} />
                        }
                        </div>
                    </div>

                    <p>Location Details</p>
                    <input name='location_detail' type="text" id="post_box_location" onChange={handleChange} /><br /><br />

                    <input name='user_id' type='hidden' value={data.user} onChange={handleChange} />
                    
                    <div id="button">
                        <button onClick={handleSubmit} id="post_button">Post</button>
                    </div>

                </form>
            </div>
        </div>
    </>
  )
}

export default Post