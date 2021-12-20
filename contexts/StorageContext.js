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
            if(existingPfp){
                let existingFormat = existingPfp.split(".");
                if(existingFormat[existingFormat.length - 1] != format){
                    const forDeleteRef = ref(storage, `users/${uid}/pfps/pfp.${existingFormat[existingFormat.length - 1]}`);
                    deleteImgs([forDeleteRef]).then((response) => {
                        return uploadBytes(pfpRef, file, metadata);
                    }).then((response) => {
                        resolve(response);
                    }).catch((error) => {
                        reject(error);
                    })
                }else{
                    uploadBytes(pfpRef, file, metadata).then((response) => {
                        resolve(response);
                    }).catch((error) => {
                        reject(error);
                    })
                }
            }else{
                uploadBytes(pfpRef, file, metadata).then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })
            }
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

            if (filesForDelete) {
                deleteImgs(filesForDelete)
                .then((response) => {
                    uploadImgsToStorage(storageRefs, validFiles, metadata).then((response) => {
                        resolve(response);
                    }).catch((error) => {
                        reject(error);
                    })
                }).catch((error) =>{
                    reject(error);
                })
            } else {
                uploadImgsToStorage(storageRefs, validFiles, metadata).then((response) => {
                    resolve(response);
                }).catch((error) => {
                   reject(error);
                })
            }
        })
    }

    const deleteImgs = (refs) => {
        return new Promise((resolve, reject) => {
            if(refs[0]){
                deleteObject(refs[0]).then((response) => {
                    if(refs[1]){
                        return deleteObject(refs[1]);
                    }else{
                        resolve("completed");
                    }
                }).then((response) => {
                    if(refs[2]){
                        return deleteObject(refs[2]);
                    }else{
                        resolve("completed");
                    }
                }).then((response) => {
                    if(refs[3]){
                        return deleteObject(refs[3]);
                    }else{
                        resolve("completed");
                    }
                }).then((response) => {
                    if(refs[4]){
                        return deleteObject(refs[4]);
                    }else{
                        resolve("completed");
                    }
                }).then((response) => {
                    if(refs[5]){
                        return deleteObject(refs[5]);
                    }else{
                        resolve("completed");
                    }
                }).catch((error) => {
                    reject(error);
                })
            }else{
                resolve("No files found.")
            }
        })
    }

    const uploadImgsToStorage = (storageRefs, validFiles, metadata) => {
        return new Promise((resolve, reject) => {
            if(validFiles[0]){
                uploadBytes(storageRefs[0], validFiles[0], metadata).then((response) => {
                    if(validFiles[1]){
                        return uploadBytes(storageRefs[1], validFiles[1], metadata);
                    }else{
                        resolve("completed");
                    }
                }).then((response) => {
                    if(validFiles[2]){
                        return uploadBytes(storageRefs[2], validFiles[2], metadata);
                    }else{
                        resolve("completed");
                    }
                }).then((response) => {
                    if(validFiles[3]){
                        return uploadBytes(storageRefs[3], validFiles[3], metadata);
                    }else{
                        resolve("completed");
                    }
                }).then((response) => {
                    if(validFiles[4]){
                        return uploadBytes(storageRefs[4], validFiles[4], metadata);
                    }else{
                        resolve("completed");
                    }
                }).then((response) => {
                    if(validFiles[5]){
                        return uploadBytes(storageRefs[5], validFiles[5], metadata);
                    }else{
                        resolve("completed");
                    }
                }).catch((error) => {
                    reject(error);
                })
            }else{
                resolve("No files found.")
            }
        })
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


