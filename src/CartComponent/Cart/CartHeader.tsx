import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { Link } from "react-router-dom";
import CommentComponent from "../Comments/CommentComponent";
import { useDispatch } from "react-redux";
import {
  incrementLikes,
  incrementComments,
  incrementShares,
} from "../../features/counts/countsSlice";
import images from "../../images/images";
import Carosal from "../CartCarosal.tsx/Carosal";
import "./cartheadercss.less";

const CartHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [countsData, setCountsData] = useState<any>("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.error("Error fetching counts data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLikeClick = () => {
    dispatch(incrementLikes());
    setCountsData(true);
    console.log("jef cje fcje fl", dispatch(incrementLikes()));
  };

  const handleCommentClick = () => {
    dispatch(incrementComments());
    setOpen(true);
  };

  const handleShareClick = () => {
    dispatch(incrementShares());
    setCountsData(true);
  };

  return (
    <div className="main">
      <div className="all">
        <div className="mainheader">
          <img src={images.image1} alt="" />
          <span>Fakhar Abbas</span>
        </div>
        <Carosal />
        <div className="icons">
          <div>
            <button onClick={handleLikeClick}>
              <CiHeart fontSize="2rem" color="black" />
              {countsData && <span>{countsData}</span>}
            </button>
          </div>
          <div>
            <Link onClick={handleCommentClick} to="/">
              <FaRegComment fontSize="1.5rem" color="black" />
              {countsData && <span>{countsData.comments}</span>}
            </Link>
          </div>
          <div>
            <Link to="/" onClick={handleShareClick}>
              <TbLocationShare fontSize="1.5rem" color="black" />
              {countsData && <span>{countsData.shares}</span>}
            </Link>
          </div>
        </div>
      </div>
      {open && <CommentComponent />}
    </div>
  );
};

export default CartHeader;
