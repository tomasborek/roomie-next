import React, {createContext, useContext} from 'react'
import { storage } from '../Firebase';
import { ref, uploadBytes, deleteObject } from 'firebase/storage';
const StorageContext = createContext();
export const useStorage = () => {
    return useContext(StorageContext);
}

export const StorageProvider = ({children}) => {
    const uploadImg = (uid, file, type, existingImgs) => {
        if(type === "pfp"){
            return uploadPfp(file, uid, existingImgs);
        }
        if(type === "listingImgs"){
           return uploadListingImgs(file, uid, existingImgs);
        }
    }

    const uploadPfp = (file, uid, existingPfp) => {
        return new Promise((resolve, reject) => {
            let format;
            if(file.type === "image/jpeg") format = ".jpg";
            if(file.type === "image/png") format = ".png";
            if(format == null) return;
            const pfpRef = ref(storage, `users/${uid}/pfps/pfp${format}`);
            const metadata = {
                cacheControl: 'public,max-age=0',
            }
            uploadBytes(pfpRef, file, metadata).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    }

    const uploadListingImgs = (files, uid, existingImgs) => {
        return new Promise((resolve, reject) => {
            // Describes the format of an uploaded image (jpg or png)
            let format;
            let storageRefs = [];
            // In the passed array, there might be undefined fields, we need to filter it out of that and store it in valid files
            let validFiles = [];
            /* If we upload a image to storage, and we find out that there's already 
            a image with the same index, but in different format, we need to delete the
             first one first, so we store it's ref in this variable for later use*/
            let filesForDelete = [];
            // We set cache control for the images so the updating is quick
            const metadata = {
                cacheControl: 'public,max-age=0',
            }
            files.forEach((file, index) => {
                // Checks if the file isn't undefined
                if(file) {
                    if(file.type === "image/jpeg") format = ".jpg";
                    if(file.type === "image/png") format = ".png";
                    if(format){
                        const storageRef = ref(storage, `/users/${uid}/listingImgs/${index}${format}`);
                        storageRefs.push(storageRef);
                        validFiles.push(file);
                        // If there is a existing image on the same index, we need to check it's format in order to decide if we need to delete it
                        if(existingImgs && existingImgs[index]){
                            // We get it's format
                            let existingFormat = existingImgs[index].split(".");
                            if(existingFormat[existingFormat.length - 1] != format){
                                
                                const forDeleteRef = ref(storage, `users/${uid}/listingImgs/${index}.${existingFormat[existingFormat.length - 1]}`);
                                filesForDelete.push(forDeleteRef);
                            }
                        }
                    }
                }
            })

            uploadImgsToStorage(storageRefs, validFiles, metadata).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    }


    const uploadImgsToStorage = (storageRefs, validFiles, metadata) => {
        return Promise.all(
            validFiles.map((file,index) => {
                return uploadBytes(storageRefs[index], validFiles[index], metadata);
            })
        )
    }
    const value = {
        uploadImg
    }
    return (
        <StorageContext.Provider value={value}>
            {children}
        </StorageContext.Provider>
    )
}


