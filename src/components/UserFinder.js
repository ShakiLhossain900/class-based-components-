import { Fragment, useState, useEffect,Component } from "react";
import classes from "./UserFinder.module.css";

import Users from "./Users";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder} ty>
        <input pe="search" onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;

// this class base convertion i will do letter coz ata amar kase atto importent mone hocce na
//and life cycle method action lagle use korbu



