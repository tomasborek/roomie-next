import React, {useContext, createContext, useEffect, useState} from 'react';
//next
import { useRouter } from 'next/dist/client/router';


//Contexts
import { useDb } from './DbContext';
import { useAuth } from './AuthContext';
import { useLoading } from './LoadingContext';
import { useSnackBar } from './SnackBarContext';
import { useFunctions } from "./FunctionsContext";
import { useStorage } from './StorageContext';


const ListingContext = createContext();
export const useListing = () => {
    return useContext(ListingContext);
}
export const ListingProvider = ({type, ssrProps, cr, children}) => {
    //Variables---
    //Contexts
    const router = useRouter();
    const {id} = router.query;
    const {getListing, getUser, getListingContact} = useDb();
    const {currentUser, currentUserInfo, userLoaded} = useAuth();
    const [loading, setLoading] = useLoading();
    const {snackBar} = useSnackBar();
    const {callable} = useFunctions();
    const {uploadImg} = useStorage();
    //States
    //Listing data obj
    //Listing info
    const [listingInfo, setListingInfo] = useState(null);
    //Edit mode
    const [editListing, setEditListing] = useState(cr);
    //ListingId
    const [listingId, setListingId] = useState(id);
    //imgs
    const [listingImgs, setListingImgs] = useState(ssrProps.listingImgs);
    const [pfp, setPfp] = useState(ssrProps.listingPfp);
    //Listing info states
    const [listingName, setListingName] = useState(ssrProps.listingName);
    const [listingUsername, setListingUsername] = useState(ssrProps.listingUsername);
    const [listingAge, setListingAge] = useState(ssrProps.listingAge);
    const [listingGender, setListingGender] = useState(ssrProps.listingGender);
    const [listingBio, setListingBio] = useState(type === "flatmate" ? ssrProps.listingBio : null);
    const [listingFlatBio, setListingFlatBio] = useState(type === "flat" ? ssrProps.listingFlatBio : null);
    const [listingPersonBio, setListingPersonBio] = useState(type === "flat" ? ssrProps.listingPersonBio : null);
    const [listingPersonBoxes, setListingPersonBoxes] = useState(JSON.parse(ssrProps.listingPersonBoxes));
    const [listingPersonTags, setListingPersonTags] = useState(JSON.parse(ssrProps.listingPersonTags));
    const [listingFlatBoxes, setListingFlatBoxes] = useState(type === "flat" ? JSON.parse(ssrProps.listingFlatBoxes) : null);
    const [listingFlatTags, setListingFlatTags] = useState(type === "flatmate" ? JSON.parse(ssrProps.listingFlatTags) : null);
    const [listingPremium, setListingPremium] = useState(ssrProps.listingPremium);
    const [listingFans, setListingFans] = useState(ssrProps.listingFans ? ssrProps.listingFans : []);
    const [listingLiked, setListingLiked] = useState(false);
    const [listingContact, setListingContact] = useState(null);
    //Edit mode info storage
    const [stayTime, setStayTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [budget, setBudget] = useState(null);
    //Dialogs and overlays
    const [personTagOverlay, setPersonTagOverlay] = useState(false);
    const [flatTagOverlay, setFlatTagOverlay] = useState(false);
    const [flatBoxerOverlay, setFlatBoxerOverlay] = useState(false);
    const [personBoxerOverlay, setPersonBoxerOverlay] = useState(false);
    const [reqDialogOpen, setReqDialogOpen] = useState(false);
    const [reportDialog, setReportDialog] = useState(false);
    const [sliderDialog, setSliderDialog] = useState(false);
    const [welcomeDialog, setWelcomeDialog] = useState(false);
    const [requestMessage, setRequestMessage] = useState("");
    const [reportMessage, setReportMessage] = useState("");
    const [contactLoading, setContactLoading] = useState(true);
    const [galleryInput, setGalleryInput] = useState({
        open: false,
        type: "none",
        img: null,
        index: 0
    });
    //Added values
    const [addedListingImgs, setAddedListingImgs] = useState(["", "", "", "", "", ""]);
    const [addedPfp, setAddedPfp] = useState(null);
    const [addedPersonTags, setAddedPersonTags] = useState(null);
    const [addedFlatTags, setAddedFlatTags] = useState(null);
    const [addedPersonBoxes, setAddedPersonBoxes] = useState(null);
    const [addedFlatBoxes, setAddedFlatBoxes] = useState(null);
    //Added bios
    const [bio, setBio] = useState(null);
    const [flatBio, setFlatBio] = useState(null);
    const [personBio, setPersonBio] = useState(null);
    //Callable functions 
    const updateListing = callable("userUpdates-updateListing");
    const createRequest = callable("requests-createRequest");
    const deleteImgs = callable("images-deleteImgs");
    const likeListing = callable("userUpdates-likeListing");
    const unlikeListing = callable("userUpdates-unlikeListing");
    const reportUser = callable("feedback-reportUser");

    
        
    
    useEffect(() => {
        if(!router.isReady) return;
        if(!userLoaded) return;
        listingLoad();
    }, [router.isReady, id, currentUser, userLoaded])

    // If ssr props aren't null but their coresponding state is, it means it has probably been nulled by the handleSave function, meaning we have to reload them
    useEffect(() => {
        if(ssrProps.listingPersonTags != null && listingPersonTags === null){
            if(ssrProps.status === "success"){
                reloadProps();
            }else if(ssrProps.status === "client-side"){
                loadClientSide();
            }
        }
    }, [ssrProps])

 

    //Fills edit inputs and pictures with default values
    useEffect(() => {
        if(listingInfo && editListing){
            if(type === "flatmate"){
                setBio(listingBio)
                setBudget(listingInfo.mainInfo.budget);
                setAddedPersonBoxes(listingPersonBoxes);
                setAddedPersonTags(listingPersonTags);
                setAddedFlatTags(listingFlatTags);
            }
            if(type === "flat"){
               setPersonBio(listingPersonBio);
               setFlatBio(listingFlatBio);
               setBudget(listingInfo.mainInfo.price);
               setAddedPersonBoxes(listingPersonBoxes);
               setAddedFlatBoxes(listingFlatBoxes);
               setAddedPersonTags(listingPersonTags);
            }

            
            setStayTime(listingInfo.mainInfo.stayTime);
            setStartTime(listingInfo.mainInfo.startTime);
        }
        
    }, [editListing, listingInfo])

    // Handle if user sign outs while editing
    useEffect(() =>{
        if(!currentUser){
            setEditListing(false);
        }
    }, [currentUser])


    //Resets changes if user goes back from editing
    useEffect(() => {
        if(!editListing){
            setAddedPersonTags(null);
            setAddedFlatTags(null);
            setAddedPersonBoxes(null);
            setAddedFlatBoxes(null);
            setAddedListingImgs(["", "", "", "", "", ""]);
            setAddedPfp(null);
        }
    }, [editListing])

    //Sets listing liked
    useEffect(() => {
        if(currentUser && listingFans && listingFans.includes(currentUser.uid)){
            setListingLiked(true);
        }else{
            setListingLiked(false);
        }
    }, [listingFans, currentUser])

    const reloadProps = () => {
        setListingName(ssrProps.listingName);
        setListingUsername(ssrProps.listingUsername);
        setListingAge(ssrProps.listingAge);
        setListingGender(ssrProps.listingGender);
        setPfp(ssrProps.listingPfp);
        setListingImgs(ssrProps.listingImgs);
        setListingBio(type === "flatmate" ? ssrProps.listingBio : null);
        setListingFlatBio(type === "flat" ? ssrProps.listingFlatBio : null);
        setListingPersonBio(type === "flat" ? ssrProps.listingPersonBio : null);
        setListingPersonBoxes(JSON.parse(ssrProps.listingPersonBoxes));
        setListingPersonTags(JSON.parse(ssrProps.listingPersonTags));
        setListingFlatBoxes(type === "flat" ? JSON.parse(ssrProps.listingFlatBoxes) : null);
        setListingFlatTags(type === "flatmate" ? JSON.parse(ssrProps.listingFlatTags): null);
        setListingPremium(ssrProps.listingPremium);
        setListingFans(ssrProps.listingFans);
    }

    //Functions
    const listingLoad = () => {
        setLoading(false);
        setListingInfo(null);
        // If the status is not resolved in any way, there's no reason to continue
        if(ssrProps.status != "success" && ssrProps.status != "client-side") return;
        if(ssrProps.status === "client-side" && !currentUser) return;
        // SSR props get reloaded when going from listing to listing, but states won't, so we need to reload them
        reloadProps();
        if(cr) setWelcomeDialog(true);
        if(ssrProps.status === "client-side"){
            loadClientSide();
            return;
        };    
        setListingInfo(JSON.parse(ssrProps.listingInfo));
        setListingId(id);
        if(currentUser && (ssrProps.listingFriends.includes(currentUser.uid) || currentUser.uid === ssrProps.uid)){
            getListingContact(id).then((docs) => {
                setListingContact(docs.docs[0].data());
                setContactLoading(false);
            }).catch((error) => {
                // setContactLoading(false);
            })
        }else if(userLoaded){
            setContactLoading(false);
        }
    }
    const checkAccess = (uid) => {
        if(currentUser && currentUser.uid === uid){
            return true;
        }else{
            return false;
        }
    }
    //Handles save in the edit
    const handleSave = () => {
        setLoading(true);
        if(!stayTime || stayTime == ""){
            snackBar("Prosíme vyplňte všechny důležité údaje.", "error");
            setLoading(false);
            window.scrollTo(0,0);
            return;
        }
        if(!startTime || startTime == ""){
            snackBar("Prosíme vyplňte všechny důležité údaje.", "error");
            setLoading(false);
            window.scrollTo(0,0);
            return;
        }
        if(!budget || budget < 1000 || budget > 60000){
            snackBar(`Prosím zadejte správnou hodnotu do ${listingInfo.type === "flatmate" ? "rozpočtu." : "nájemného."}`)
            setLoading(false);
            window.scrollTo(0,0);
            return;
        }
        let params;
        if(type === "flatmate" || type === "flatmate-cr"){
            params = {
                mainInfo: {
                    budget: budget,
                    startTime: startTime,
                    stayTime: stayTime
                },
                personBoxes: addedPersonBoxes,
                personTags: addedPersonTags,
                flatTags: addedFlatTags,
                bio: bio ? bio.trim() : "",
                visible: true,
            }
            if(addedPersonBoxes.job){
                params = {...params, "queryInfo.job": {
                    employed: addedPersonBoxes.job === "Zaměstnaný",
                    unemployed: addedPersonBoxes.job === "Nezaměstnaný",
                    student: addedPersonBoxes.job === "Student",
                }}
            }
        }
        if(type === "flat" || type === "flat-cr"){
            params = {
                mainInfo: {
                    price: budget,
                    startTime: startTime,
                    stayTime: stayTime
                },
                personTags: addedPersonTags,
                personBoxes: addedPersonBoxes,
                flatBoxes: addedFlatBoxes,
                flatBio: flatBio ? flatBio.trim() : "",
                personBio: personBio ? personBio.trim() : "",
                visible: true,
            }
            if(addedPersonBoxes.job){
                params = {...params, "queryInfo.job": {
                    employed: addedPersonBoxes.job === "Zaměstnaný",
                    unemployed: addedPersonBoxes.job === "Nezaměstnaný",
                    student: addedPersonBoxes.job === "Student",
                }}
            }
        }
        const updateListingInfo = {
            listingId: listingId,
            params: params,
        }
        updateListing(JSON.stringify(updateListingInfo)).then((response) => {
            if(addedPfp){
               return uploadImg(currentUser.uid, addedPfp, "pfp");
            }else{
                return Promise.resolve("No new pfp");
            }
        }).then((response) => {
            if(addedListingImgs.length){
                return uploadImg(currentUser.uid, addedListingImgs, "listingImgs");
            }else{
                return Promise.resolve("No new imgs");
            } 
        }).then((response) => {
            window.scrollTo({top: 0, behavior: "smooth"});
            if(!cr){
                setLoading(false);
                setListingInfo(null);
                setListingBio(null);
                setListingFlatBio(null);
                setListingPersonBio(null);
                setListingPersonBoxes(null);
                setListingPersonTags(null);
                setListingFlatBoxes(null);
                setListingFlatTags(null);
                setEditListing(false);
                snackBar("Inzerát byl úspěšně upraven.", "success");
                router.push(router.asPath);
                return getListing(listingId);
            }else{
                snackBar("Inzerát byl úspěšně vytvořen.", "success");
                router.push(`/${listingInfo.type}/${listingId}`);
                return Promise.resolve("response");
            }
        }).then((doc) => {
            if(!cr){
                setListingInfo(doc.data());
            }
        }).catch((error) => {
            setLoading(false);
            snackBar("Něco se pokazilo. Zkuste to prosím později.", "error");
        })
    }

    const handleRequest = () => {
        //Loading...
        setContactLoading(true);
        setReqDialogOpen(false);
        //Two people involved
        let reciever = listingInfo;
        let sender;
        //Callable functions
        getUser(currentUser.uid)
        .then(user =>{
            const requestInfo = {
                sender: user.data(),
                senderUid: user.id,
                reciever: reciever.userInfo,
                recieverListingId: listingId,
                recieverUid: reciever.userInfo.uid,
                recieverType: reciever.type,
                message: requestMessage
            }
            return createRequest(JSON.stringify(requestInfo)); 
        }).then(res => {
            return getListing(id);
        }).then(doc => {
            setListingInfo(doc.data());
            setContactLoading(false);
            snackBar("Žádost byla odeslána.", "success");
        }).catch(error =>{
            setLoading(false);
            setReqDialogOpen(true);
            snackBar("Něco se nepovedlo. Zkuste to prosím později.", "error");
        })
    }

    const handleReport = () => {
        const uid = listingInfo.userInfo.uid;
        const username = listingUsername;
        const message = reportMessage;
        const senderUid = currentUser.uid;
        let senderUsername = null;
        if(currentUserInfo){
            senderUsername = currentUserInfo.mainInfo.username;
        }
        const reportInfo = {
            uid,
            username,
            message,
            listingId,
            senderUid,
            senderUsername
        }
        reportUser(JSON.stringify(reportInfo));
    }

    const handleImgDelete = (type) => {
        if(type === "pfp"){
            if(addedPfp){
                setAddedPfp(null);
                return;
            }
            setLoading(true);
            const imageInfo = {
                url: pfp,
                uid: currentUser.uid,
                listingId: listingId,
            }
            deleteImgs(JSON.stringify(imageInfo)).then((response) => {
                setPfp(null);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
            })
        }
        if(type === "main"){
            if(addedListingImgs[0]){
                const imgs = [...addedListingImgs];
                imgs[0] = "";
                setAddedListingImgs(imgs);
                return;
            }
            setLoading(true);
            const imageInfo = {
                url: listingImgs[0],
                uid: currentUser.uid,
                listingId: listingId,
            }
            deleteImgs(JSON.stringify(imageInfo)).then((response) => {
                const imgs = [...listingImgs];
                imgs[0] = "";
                setListingImgs(imgs);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
            })

        }
    }

    const loadClientSide = () => {
            getListing(id).then((doc) => {
                const docData = doc.data();
                if(!(checkAccess(docData.userInfo.uid))){
                    return;
                }
                setListingInfo(docData);
                setListingId(doc.id);
                setListingImgs(docData.userInfo.images.listingImgs);
                if(docData.userInfo.images.pfp){
                    setPfp(docData.userInfo.images.pfp);
                }

                //SSR props state
                setListingName(type === "flatmate" ? docData.userInfo.username : `${docData.flatBoxes.layout}${docData.flatBoxes.layout ? " " : ""}${docData.flatBoxes.location}`);
                setListingUsername(docData.userInfo.username);
                setListingAge(docData.userInfo.age);
                setListingGender(docData.userInfo.gender);
                setListingBio(type === "flatmate" && docData.bio);
                setListingFlatBio(type === "flat" && docData.flatBio);
                setListingPersonBio(type === "flat" && docData.personBio);
                setListingPersonBoxes(docData.personBoxes);
                setListingPersonTags(docData.personTags);
                setListingFlatBoxes(type === "flat" && docData.flatBoxes);
                setListingFlatTags(type === "flatmate" && docData.flatTags);  
            setListingFlatTags(type === "flatmate" && docData.flatTags);  
                setListingFlatTags(type === "flatmate" && docData.flatTags);  
            setListingFlatTags(type === "flatmate" && docData.flatTags);  
                setListingFlatTags(type === "flatmate" && docData.flatTags);  
            setListingFlatTags(type === "flatmate" && docData.flatTags);  
                setListingFlatTags(type === "flatmate" && docData.flatTags);  
            setListingFlatTags(type === "flatmate" && docData.flatTags);  
                setListingFlatTags(type === "flatmate" && docData.flatTags);  
            setListingFlatTags(type === "flatmate" && docData.flatTags);  
                setListingFlatTags(type === "flatmate" && docData.flatTags);  
            setListingFlatTags(type === "flatmate" && docData.flatTags);  
                setListingFlatTags(type === "flatmate" && docData.flatTags);  
            setListingFlatTags(type === "flatmate" && docData.flatTags);  
                setListingFlatTags(type === "flatmate" && docData.flatTags);  
                setListingPremium (docData.userInfo.premium);

                return getListingContact(id)
            }).then((docs) => {
                setListingContact(docs.docs[0].data());
                setContactLoading(false);
            })
            
            .catch((error) => {
                //
            })
            
        }


    

    const value={
        type,
        cr,
        listingInfo, 
        setListingInfo,
        //Edit mode
        editListing, 
        setEditListing,
        //ListingId
        listingId, 
        setListingId,
        //imgs
        listingImgs, 
        setListingImgs,
        pfp, 
        setPfp,
        //Listing info states
        listingName, 
        setListingName,
        listingUsername, 
        setListingUsername,
        listingAge, 
        setListingAge,
        listingGender, 
        setListingGender,
        listingBio, 
        setListingBio,
        listingFlatBio, 
        setListingFlatBio,
        listingPersonBio, 
        setListingPersonBio,
        listingPersonBoxes, 
        setListingPersonBoxes,
        listingPersonTags, 
        setListingPersonTags,
        listingFlatBoxes, 
        setListingFlatBoxes,
        listingFlatTags, 
        setListingFlatTags,
        listingPremium, 
        setListingPremium,
        listingFans, 
        setListingFans,
        listingLiked, 
        setListingLiked,
        //Edit mode info storage
        stayTime, 
        setStayTime,
        startTime, 
        setStartTime,
        budget,
        setBudget,
        //Dialogs and overlays
        personTagOverlay, 
        setPersonTagOverlay,
        flatTagOverlay, 
        setFlatTagOverlay,
        flatBoxerOverlay, 
        setFlatBoxerOverlay,
        personBoxerOverlay, 
        setPersonBoxerOverlay,
        reqDialogOpen, 
        setReqDialogOpen,
        reportDialog,
        setReportDialog,
        sliderDialog,
        setSliderDialog,
        requestMessage,
        setRequestMessage,
        reportMessage,
        setReportMessage,
        contactLoading,
        setContactLoading,
        welcomeDialog,
        setWelcomeDialog,
        galleryInput, 
        setGalleryInput,
        //Added values
        addedListingImgs, 
        setAddedListingImgs,
        addedPfp, 
        setAddedPfp,
        addedPersonTags, 
        setAddedPersonTags,
        addedFlatTags, 
        setAddedFlatTags,
        addedPersonBoxes, 
        setAddedPersonBoxes,
        addedFlatBoxes, 
        setAddedFlatBoxes,
        //Added bios
        bio, 
        setBio,
        flatBio, 
        setFlatBio,
        personBio, 
        setPersonBio,
        //Functions
        reloadProps,
        handleSave,
        handleRequest,
        handleReport,
        handleImgDelete,
        loadClientSide,
        handleRequest,
        listingContact
    }
  return <ListingContext.Provider value={value}>
      {children}
  </ListingContext.Provider>;
};
