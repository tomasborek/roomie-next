import React, { useEffect, useState } from "react";
//next
import { useRouter } from "next/router";
import Head from "next/head";
//COntexts
import { useAuth } from "../contexts/AuthContext";
import { useDb } from "../contexts/DbContext";
import { useFunctions } from "../contexts/FunctionsContext";

//Layout
import PageFeedLayout from "../components/PageFeedLayout/PageFeedLayout";

//Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Friend from "../components/Friend/Friend";
import Pagination from "../components/Pagination/Pagination";
//MUI
import CircularProgress from "@mui/material/CircularProgress";

const Friends = () => {
  //Variables
  const { currentUser } = useAuth();
  const { getUser, getFriends } = useDb();
  const [friends, setFriends] = useState(null);
  const [friendsSnaps, setFriendsSnaps] = useState(null);
  const [isPaginationDisabled, setIsPaginationDisabled] = useState(false);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { callable } = useFunctions();

  useEffect(() => {
    if (currentUser) {
      const deleteAcceptedNotifications = callable(
        "requests-deleteAcceptedNotifications"
      );
      let friendsObject = {};
      getFriends(currentUser.uid, "first", friendsSnaps).then((docs) => {
        setFriendsSnaps(docs.docs);
        docs.docs.forEach((doc) => {
          friendsObject = { ...friendsObject, [doc.id]: doc.data() };
        });
        setFriends(friendsObject);
        deleteAcceptedNotifications(JSON.stringify({ uid: currentUser.uid }));
      });
    }
  }, [currentUser]);

  const handlePagination = (page) => {
    if (page === "next") {
      setIsPaginationDisabled(true);
      getFriends(currentUser.uid, "next", friendsSnaps).then((docs) => {
        if (docs.docs.length > 0) {
          let friendsObject = {};
          setPage((prevState) => prevState + 1);
          setFriendsSnaps(docs.docs);
          docs.docs.forEach((doc) => {
            friendsObject = { ...friendsObject, [doc.id]: doc.data() };
          });
          setFriends(friendsObject);
        }
        setIsPaginationDisabled(true);
      });
    }
    if (page === "prev") {
      setIsPaginationDisabled(true);
      getFriends(currentUser.uid, "prev", friendsSnaps).then((docs) => {
        if (docs.docs.length > 0) {
          let friendsObject = {};
          setPage((prevState) => prevState - 1);
          setFriendsSnaps(docs.docs);
          docs.docs.forEach((doc) => {
            friendsObject = { ...friendsObject, [doc.id]: doc.data() };
          });
          setFriends(friendsObject);
        }
        setIsPaginationDisabled(true);
      });
    }
  };

  return (
    <>
      <Head>
        <title>P????tel?? | Roomie</title>
      </Head>

      <PageFeedLayout heading={"P????tel??"}>
        <div className="content-feed">
          {friends ? (
            <>
              {Object.keys(friends).length > 0 ? (
                <>
                  {Object.keys(friends).map((friend, id) => (
                    <Friend key={id} info={friends[friend]}>
                      {friends[friend].username}{" "}
                      {friends[friend].premium && (
                        <i className="fas fa-circle-check"></i>
                      )}
                    </Friend>
                  ))}
                </>
              ) : (
                <div className="feed-empty">
                  <img src="/img/bad-results/notfound.png" />
                  <p className="empty-description">
                    Dosud nem??te ????dn?? p????tele.
                  </p>
                </div>
              )}
              {(friends > 9 || page != 1) && (
                <Pagination
                  handlePagination={handlePagination}
                  isDisabled={isPaginationDisabled}
                  page={page}
                  setPage={setPage}
                />
              )}
            </>
          ) : (
            <div className="feed-loading">
              <CircularProgress />
            </div>
          )}
        </div>
      </PageFeedLayout>
      <Footer />
    </>
  );
};

export default Friends;
