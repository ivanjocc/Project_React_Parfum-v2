import React from "react";
import AddProduit from "./AddProduit/AddProduit";
import styles from "./Admin.module.scss";

const Admin = () => {
  return (
    <div className={styles.adminContent}>
      <AddProduit />
    </div>
  );
};

export default Admin;
