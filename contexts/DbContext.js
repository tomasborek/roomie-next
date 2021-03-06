import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../Firebase";
//Firestore imports
import {
  setDoc,
  doc,
  query,
  where,
  collection,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  orderBy,
  limit,
  startAfter,
  addDoc,
  startAt,
  endBefore,
  limitToLast,
  onSnapshot,
} from "@firebase/firestore";

const DbContext = createContext();

export const useDb = () => {
  return useContext(DbContext);
};

export function DbProvider(props) {
  //Functions
  //User

  const updateUser = (uid, params) => {
    return updateDoc(doc(db, "users", uid), params);
  };

  const getUser = (uid) => {
    return getDoc(doc(db, "users", uid));
  };

  const createListingQuery = ({
    type,
    page,
    parameters,
    listings,
    premiumListings,
    newListings,
    newPremiumListings,
  }) => {
    const colRef = collection(db, "listings");
    if (type === "firstQuery") {
      if (page === "first") {
        return query(
          colRef,
          ...parameters,
          where("userInfo.premium", "==", true),
          orderBy("timeStamp", "desc"),
          limit(8)
        );
      } else if (page === "next") {
        if (!listings.length) {
          return query(
            colRef,
            ...parameters,
            where("userInfo.premium", "==", true),
            orderBy("timeStamp", "desc"),
            limit(8),
            startAfter(premiumListings[premiumListings.length - 1])
          );
        } else if (listings.length) {
          return query(
            colRef,
            ...parameters,
            where("userInfo.premium", "==", false),
            orderBy("timeStamp", "desc"),
            limit(8),
            startAfter(listings[listings.length - 1])
          );
        }
      } else if (page === "prev") {
        if (!premiumListings.length) {
          return query(
            colRef,
            ...parameters,
            where("userInfo.premium", "==", false),
            orderBy("timeStamp", "desc"),
            limitToLast(8),
            endBefore(listings[0])
          );
        } else if (premiumListings.length) {
          return query(
            colRef,
            ...parameters,
            where("userInfo.premium", "==", true),
            orderBy("timeStamp", "desc"),
            limitToLast(8),
            endBefore(premiumListings[0])
          );
        }
      }
    } else if (type === "secondQuery") {
      if (page === "first") {
        return query(
          colRef,
          ...parameters,
          where("userInfo.premium", "==", false),
          orderBy("timeStamp", "desc"),
          limit(8 - newPremiumListings.length)
        );
      } else if (page === "next") {
        return query(
          colRef,
          ...parameters,
          where("userInfo.premium", "==", false),
          orderBy("timeStamp", "desc"),
          limit(8 - newPremiumListings.length)
        );
      } else if (page === "prev") {
        return query(
          colRef,
          ...parameters,
          where("userInfo.premium", "==", true),
          orderBy("timeStamp", "desc"),
          limitToLast(8 - newListings.length)
        );
      }
    }
  };

  const createRequestQuery = ({
    type,
    requestType,
    page,
    uid,
    requests,
    premiumRequests,
    newRequests,
    newPremiumRequests,
  }) => {
    const colRef = collection(db, "users", uid, requestType);
    if (requestType === "sentRequests") {
      return query(colRef, orderBy("timeStamp", "desc", limit(10)));
    }
    if (type === "firstQuery") {
      if (page === "first") {
        return query(
          colRef,
          where("premium", "==", true),
          orderBy("timeStamp", "desc"),
          limit(10)
        );
      } else if (page === "next") {
        if (!listings.length) {
          return query(
            colRef,
            where("premium", "==", true),
            orderBy("timeStamp", "desc"),
            limit(10),
            startAfter(premiumRequests[premiumRequests.length - 1])
          );
        } else if (listings.length) {
          return query(
            colRef,
            where("premium", "==", false),
            orderBy("timeStamp", "desc"),
            limit(10),
            startAfter(requests[requests.length - 1])
          );
        }
      } else if (page === "prev") {
        if (!premiumListings.length) {
          return query(
            colRef,
            where("premium", "==", false),
            orderBy("timeStamp", "desc"),
            limitToLast(10),
            endBefore(requests[0])
          );
        } else if (premiumListings.length) {
          return query(
            colRef,
            where("premium", "==", true),
            orderBy("timeStamp", "desc"),
            limitToLast(10),
            endBefore(premiumRequests[0])
          );
        }
      }
    } else if (type === "secondQuery") {
      if (page === "first") {
        return query(
          colRef,
          where("premium", "==", false),
          orderBy("timeStamp", "desc"),
          limit(10 - newPremiumRequests.length)
        );
      } else if (page === "next") {
        return query(
          colRef,
          where("premium", "==", false),
          orderBy("timeStamp", "desc"),
          limit(10 - newPremiumRequests.length)
        );
      } else if (page === "prev") {
        return query(
          colRef,
          where("premium", "==", true),
          orderBy("timeStamp", "desc"),
          limitToLast(10 - newRequests.length)
        );
      }
    }
  };

  //Listings
  const getListings = (type, page, listings, premiumListings, filter) => {
    let parameters = [
      where("type", "==", type),
      where("visible", "==", true),
      where("userInfo.emailVerified", "==", true),
      where("hiddenByUser", "==", false),
    ];
    let newPremiumListings = [];
    let newListings = [];
    let q1;
    let q2;
    const queryInfo = {
      page,
      parameters,
      listings,
      premiumListings,
      newListings,
      newPremiumListings,
    };
    if (Object.keys(filter).length) {
      if (type === "flatmate") {
        if (filter.location) {
          if (filter.location === "Praha") {
            parameters.push(where("queryInfo.prague", "==", true));
          } else {
            parameters.push(where("flatTags.location", "==", filter.location));
          }
        }
        if (filter.gender) {
          let originalItems = ["Mu??", "??ena", "Jin??"];
          if (filter.gender.length === 2) {
            // The max length of a filter is 3, that means if 2 are selected one is not selecred, this variable stores it
            let notSelectedItem;
            // We get the not selected item by removing the two selected ones from the original items
            filter.gender.forEach((item) => {
              originalItems.splice(originalItems.indexOf(item), 1);
              notSelectedItem = originalItems[0];
            });
            // The filter names are in format that can be showed to user's, but in database it's not like that, so we have to convert it first
            switch (notSelectedItem) {
              case "Mu??":
                notSelectedItem = "male";
                break;
              case "??ena":
                notSelectedItem = "female";
                break;
              case "Jin??":
                notSelectedItem = "other";
                break;
              default:
                break;
            }
            parameters.push(
              where(`queryInfo.gender.${notSelectedItem}`, "==", false)
            );
          } else {
            const selectedItem = filter.gender[0];
            switch (selectedItem) {
              case "Mu??":
                selectedItem = "male";
                break;
              case "??ena":
                selectedItem = "female";
                break;
              case "Jin??":
                selectedItem = "other";
                break;
              default:
                break;
            }
            parameters.push(
              where(`queryInfo.gender.${selectedItem}`, "==", true)
            );
          }
        }
        if (filter.age) {
          let originalItems = ["18-25", "26-34", "35+"];
          if (filter.age.length === 2) {
            // The max length of a filter is 3, that means if 2 are selected one is not selecred, this variable stores it
            let notSelectedItem;
            // We get the not selected item by removing the two selected ones from the original items
            filter.age.forEach((item) => {
              originalItems.splice(originalItems.indexOf(item), 1);
              notSelectedItem = originalItems[0];
            });
            switch (notSelectedItem) {
              case "18-25":
                notSelectedItem = "firstRange";
                break;
              case "26-34":
                notSelectedItem = "secondRange";
                break;
              case "35+":
                notSelectedItem = "thirdRange";
                break;
              default:
                break;
            }
            parameters.push(
              where(`queryInfo.age.${notSelectedItem}`, "==", false)
            );
          } else {
            const selectedItem = filter.age[0];
            switch (selectedItem) {
              case "18-25":
                selectedItem = "firstRange";
                break;
              case "26-34":
                selectedItem = "secondRange";
                break;
              case "35+":
                selectedItem = "thirdRange";
                break;
              default:
                break;
            }
            parameters.push(where(`queryInfo.age.${selectedItem}`, "==", true));
          }
        }
        if (filter.smoking) {
          parameters.push(where("personBoxes.smoking", "==", filter.smoking));
        }
        if (filter.job) {
          let originalItems = ["Zam??stnan??", "Nezam??stnan??", "Student"];
          if (filter.job.length === 2) {
            // The max length of a filter is 3, that means if 2 are selected one is not selecred, this variable stores it
            let notSelectedItem;
            // We get the not selected item by removing the two selected ones from the original items
            filter.job.forEach((item) => {
              originalItems.splice(originalItems.indexOf(item), 1);
              notSelectedItem = originalItems[0];
            });
            switch (notSelectedItem) {
              case "Zam??stnan??":
                notSelectedItem = "employed";
                break;
              case "Nezam??stnan??":
                notSelectedItem = "unemployed";
                break;
              case "Student":
                notSelectedItem = "student";
                break;
              default:
                break;
            }
            parameters.push(
              where(`queryInfo.job.${notSelectedItem}`, "==", false)
            );
          } else {
            const selectedItem = filter.job[0];
            switch (selectedItem) {
              case "Zam??stnan??":
                selectedItem = "employed";
                break;
              case "Nezam??stnan??":
                selectedItem = "unemployed";
                break;
              case "Student":
                selectedItem = "student";
                break;
              default:
                break;
            }
            parameters.push(where(`queryInfo.job.${selectedItem}`, "==", true));
          }
        }
      }
      if (type === "flat") {
        if (filter.location) {
          if (filter.location === "Praha") {
            parameters.push(where("queryInfo.prague", "==", true));
          } else {
            parameters.push(where("flatBoxes.location", "==", filter.location));
          }
        }
        if (filter.layout) {
          parameters.push(where("flatBoxes.layout", "==", filter.layout));
        }
        if (filter.petAllowed) {
          let petAllowed = filter.petAllowed;
          switch (petAllowed) {
            case "Mazl????ci povoleno":
              petAllowed = "Povoleno";
              break;
            case "Mazl????ci nepovoleno":
              petAllowed = "Nepovoleno";
              break;
            default:
              break;
          }
          console.log(`where ${petAllowed}`);
          parameters.push(where("flatBoxes.petAllowed", "==", petAllowed));
        }
        if (filter.smokingAllowed) {
          let smokingAllowed = filter.smokingAllowed;
          switch (smokingAllowed) {
            case "Kou??en?? povoleno":
              smokingAllowed = "Povoleno";
              break;
            case "Kou??en?? nepovoleno":
              smokingAllowed = "Nepovoleno";
              break;
            default:
              break;
          }
          parameters.push(
            where("flatBoxes.smokingAllowed", "==", smokingAllowed)
          );
        }
        if (filter.internet) {
          let internet = filter.internet;
          switch (internet) {
            case "Internet":
              internet = "Ano";
              break;
            case "Bez internetu":
              internet = "Ne";
              break;
            default:
              break;
          }
          parameters.push(where("flatBoxes.internet", "==", internet));
        }
        if (filter.elevator) {
          let elevator = filter.elevator;
          switch (elevator) {
            case "V??tah":
              elevator = "Ano";
              break;
            case "Bez v??tahu":
              elevator = "Ne";
              break;
            default:
              break;
          }
          parameters.push(where("flatBoxes.elevator", "==", elevator));
        }
      }
    }

    q1 = createListingQuery({ ...queryInfo, type: "firstQuery" });

    return new Promise((resolve, reject) => {
      getDocs(q1)
        .then((docs) => {
          if (page === "first") {
            newPremiumListings = docs.docs;
          } else if (page === "next") {
            if (listings.length) {
              newListings = docs.docs;
            } else {
              newPremiumListings = docs.docs;
            }
          } else if (page === "prev") {
            if (premiumListings.length) {
              newPremiumListings = docs.docs;
            } else {
              newListings = docs.docs;
            }
          }

          queryInfo.newPremiumListings = newPremiumListings;
          queryInfo.newListings = newListings;
          if (
            docs.docs.length === 8 ||
            (page === "next" && listings.length) ||
            (page === "prev" && premiumListings.length)
          ) {
            resolve({
              newPremiumListings,
              newListings,
            });
            return;
          }

          q2 = createListingQuery({ ...queryInfo, type: "secondQuery" });
          return getDocs(q2);
        })
        .then((docs2) => {
          if (page === "prev") {
            newPremiumListings = docs2.docs;
          } else {
            newListings = docs2.docs;
          }
          resolve({
            newPremiumListings,
            newListings,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const getListing = (id) => {
    return getDoc(doc(db, "listings", id));
  };

  const getListingContact = (id) => {
    return getDocs(collection(db, "listings", id, "contact"));
  };

  const getListingByUser = (uid) => {
    const q = query(
      collection(db, "listings"),
      where("userInfo.uid", "==", uid)
    );
    return getDocs(q);
  };

  //Requests and friends

  const getRequests = (type, uid, page, requests, premiumRequests) => {
    let newPremiumRequests = [];
    let newRequests = [];
    let q1;
    let q2;
    const queryInfo = {
      page,
      requestType: type,
      uid,
      requests,
      premiumRequests,
      newRequests,
      newPremiumRequests,
    };

    q1 = createRequestQuery({ ...queryInfo, type: "firstQuery" });

    return new Promise((resolve, reject) => {
      getDocs(q1)
        .then((docs) => {
          if (type === "sentRequests") {
            newRequests = docs.docs;
          } else {
            if (page === "first") {
              newPremiumRequests = docs.docs;
            } else if (page === "next") {
              if (requests.length) {
                newRequests = docs.docs;
              } else {
                newPremiumRequests = docs.docs;
              }
            } else if (page === "prev") {
              if (premiumRequests.length) {
                newPremiumRequests = docs.docs;
              } else {
                newRequests = docs.docs;
              }
            }
          }

          queryInfo.newPremiumRequests = newPremiumRequests;
          queryInfo.newRequests = newRequests;
          if (
            docs.docs.length === 10 ||
            (page === "next" && listings.length) ||
            (page === "prev" && premiumRequests.length) ||
            type === "sentRequests"
          ) {
            resolve({
              newPremiumRequests,
              newRequests,
            });
            return;
          }

          q2 = createRequestQuery({ ...queryInfo, type: "secondQuery" });
          return getDocs(q2);
        })
        .then((docs2) => {
          if (page === "prev") {
            newPremiumRequests = docs2.docs;
          } else {
            newRequests = docs2.docs;
          }
          console.log("did both");
          resolve({
            newPremiumRequests,
            newRequests,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //Notifications

  const getNotifications = (uid) => {
    const colRef = collection(db, "users", uid, "notifications");
    const q = query(colRef, orderBy("timeStamp", "desc"), limit(9));
    return getDocs(q);
  };

  //Friends

  const getFriends = (uid, page, friends) => {
    const colRef = collection(db, "users", uid, "friends");
    if (page === "first") {
      const q = query(colRef, orderBy("timeStamp", "desc"), limit(10));
      return getDocs(q);
    }
    if (page === "next") {
      const q = query(
        colRef,
        orderBy("timeStamp", "desc"),
        limit(10),
        startAfter(friends[friends.length - 1])
      );
      return getDocs(q);
    }
    if (page === "prev") {
      const q = query(
        colRef,
        orderBy("timeStamp", "desc"),
        endBefore(friends[0]),
        limitToLast(10)
      );
      return getDocs(q);
    }
  };

  const getLiked = (uid, page, liked) => {
    const colRef = collection(db, "users", uid, "likedListings");
    if (page === "first") {
      const q = query(colRef, orderBy("timeStamp", "desc"), limit(10));
      return getDocs(q);
    }
    if (page === "next") {
      const q = query(
        colRef,
        orderBy("timeStamp", "desc"),
        limit(10),
        startAfter(liked[liked.length - 1])
      );
      return getDocs(q);
    }
    if (page === "prev") {
      const q = query(
        colRef,
        orderBy("timeStamp", "desc"),
        endBefore(liked[0]),
        limitToLast(10)
      );
      return getDocs(q);
    }
  };

  //Value
  const value = {
    getUser,
    updateUser,
    getListings,
    getListing,
    getListingContact,
    getListingByUser,
    getRequests,
    getNotifications,
    getFriends,
    getLiked,
  };
  return (
    <DbContext.Provider value={value}>{props.children}</DbContext.Provider>
  );
}
