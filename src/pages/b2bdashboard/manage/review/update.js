import styling from "../../profile.module.css";
import dynamic from "next/dynamic";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState, useEffect } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const Update = ({ value, onChange }) => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);

  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Reivew data Update
            </h2>
            <div className="w-full mx-auto">
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label>Name</label>
                    <input
                      name="category"
                      placeholder="Name"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Position</label>
                    <input
                      name="productCategory"
                      placeholder="Position"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>

                <div className={styles.formControl}>
                  <div>
                    <label> Category</label>
                    <select className={styles.inputField}>
                      <option value="">Hajj & Umrah</option>
                      <option value="">Flight</option>
                      <option value="">Hotel</option>
                      <option value="">Visa</option>
                      <option value="">Tours</option>
                      <option value="">Train</option>
                    </select>
                  </div>
                  <div>
                    <label>Company Name </label>
                    <input
                      name="subTitle"
                      placeholder="Company Name "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div className={styles.uploadFile}>
                    <label for="files">
                      {" "}
                      <CloudUpload className={styles.uploadIcon} /> Image Upload{" "}
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
                  <div>
                    <ReactQuill
                      value={value}
                      onChange={onChange}
                      modules={{
                        toolbar: [
                          [{ font: [] }],
                          [{ size: ["small", false, "large", "huge"] }],
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          [{ color: [] }, { background: [] }],
                          [{ align: [] }],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["bold", "italic", "underline"],
                          [{ align: [] }],
                          ["link", "image"],
                          ["video"],
                          ["clean"],
                          ["blockquote", "code-block"],
                          ["direction"],
                          ["formula"],
                          ["strike"],
                        ],
                      }}
                    />
                  </div>
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
