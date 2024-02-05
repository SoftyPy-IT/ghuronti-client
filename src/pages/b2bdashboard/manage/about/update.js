import styling from "../../profile.module.css";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
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
              About Us data Update
            </h2>
            <div className="w-full mx-auto">
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label>Main Title </label>
                    <input
                      name="category"
                      placeholder="Title"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Team Sub Title </label>
                    <input
                      name="productCategory"
                      placeholder="Team sub title"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Team Member Name </label>
                    <input
                      name="date"
                      placeholder="Team Member Name  "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Team Member Designation </label>
                    <input
                      name="price"
                      placeholder="Team Member Designation "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Mission Title </label>
                    <input
                      name="title"
                      placeholder=" Mission Title"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Mission Description </label>
                    <input
                      name="subTitle"
                      placeholder=" Mission Description"
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
                    Submit
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
