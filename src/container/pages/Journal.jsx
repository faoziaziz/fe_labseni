import React , {useState} from 'react';
import { uploadFile } from 'react-s3';


const S3_BUCKET ='stimulasi-anak';
const REGION ='ap-southeast-1';
const ACCESS_KEY ='AKIA35D3HA6HGZF3WVHZ0';
const SECRET_ACCESS_KEY ='i5JsU7jQ0GBvQ2bjmlCKr5Xy4w8ktzHUQlT0D6M9';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
	console.log("diclick")
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return <div>
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
}

export default UploadImageToS3WithReactS3;
