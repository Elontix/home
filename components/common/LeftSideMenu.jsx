import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import team_obj from "/public/images/elements/team-obj.png";

const LeftSideMenu = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    id: "",
  });

  useEffect(() => {
    let name;
    let id;
    name = localStorage.getItem("username") || "";
    id = localStorage.getItem("userId") || "";
    setUser({
      name,
      id,
    });
  }, []);

  return (
    <div className="col-lg-4">
      <div className="user-card">
        <div className="avatar-upload">
          <div className="obj-el">
            <Image src={team_obj} alt="team obj" />
          </div>
          <div className="avatar-edit">
            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label htmlFor="imageUpload"></label>
          </div>
          <div className="avatar-preview">
            <div id="imagePreview"></div>
          </div>
        </div>
        <h5 style={{ zIndex: 200, margin: "2rem 0 0 0" }} className="">
          {user.name}
        </h5>
        <span className="user-card__id">ID : {user.id}</span>
      </div>
      <div className="user-action-card">
        <ul className="user-action-list">
          {[
            ["My Tickets", "/user"],
            ["Personal Information", "/user-info"],
            ["Transactions", "/user-transaction"],
            ["Referral Program", "/user-referral"],
            ["Favorite Lotteries", "/user-lottery"],
            ["Log Out", "/#"],
          ].map(([item, url], i) => (
            <li
              key={item}
              className={`${router.pathname === url && "active"} `}
            >
              <Link href={url}>
                {item}
                {i === 0 ? <span className="badge">04</span> : ""}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideMenu;
