import React from "react";

const Image = ( {set} ) => {

    //Convert the uploaded image into base 64
    let base64String="";
    const imageUploaded = async () => {
        var file = document.querySelector('input[type=file]')['files'][0];
        var reader = new FileReader();
        reader.onload = function () {
            base64String = reader.result;
            var disp=document.getElementById('display');
            disp.innerHTML='';
            set(base64String);
        }
        reader.readAsDataURL(file); 
    }

  return (
    <div className="uploadpic">
        <div>
            <div><label htmlFor="fileId"></label></div>
            <div><input type="file" name="photo" id="fileId" onChange={imageUploaded}/></div>
            <div className="upload" id="upload">
                <div id="display"></div>
            </div>   
        </div>
    </div> 
  );
};

export default Image;