import { ref, uploadBytes } from "firebase/storage";
import {storage} from "../lib/firebase.config"

const Storage ={
    uploadFile: (media) => {
        return new Promise(async resolve => {
            try{
                const fileRef = ref(storage, `images/${file.title}`);
                uploadBytes(fileRef,media.file).then(snapshot => {
                    resolve({path: snapshot.metadata.fullPath, name:file.title})
                })
            }catch(e){
                console.log(e)
            }
        })
    }
}
export default Storage;