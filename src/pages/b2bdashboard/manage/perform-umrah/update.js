import React, { useState } from "react";
import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import TextEditor from "../../../../../components/TextEditor/TextEditor";

const Update = () => {
  const [editorValue, setEditorValue] = useState('');
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
               Update Perform Umrah
            </h2>
            <div className="w-full mx-auto">
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label>Title </label>
                    <input
                      name="category"
                      placeholder="Title"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Sub Title</label>
                    <input
                      name="productCategory"
                      placeholder="Sub Title "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div className={styles.uploadFile}>
                    <label for="files">
                      <CloudUpload className={styles.uploadIcon} /> Image Upload
                    </label>
                    <input
                      name="image"
                      className={styles.inputField}
                      type="file"
                      id="files"
                      class="hidden"
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                <TextEditor  value={editorValue} onChange={setEditorValue}/>
                </div>
               
                <div className={styles.formControl}>
                  <button className={styles.submitBtn} type="submit">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  );
};

export default dynamic(() => Promise.resolve(Update), { ssr: false });
