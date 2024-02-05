import styling from "../../profile.module.css";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
const Flight = ({ value, onChange }) => {
  const [editorValue, setEditorValue] = useState("");
  const [quill, setQuill] = useState(null);
  return (
    <B2BdashboardLayout>
      <MoveText />

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
             Flight Data Input 
            </h2>
            <div className="w-full mx-auto">
              <form>
                <div className={styles.formControl}>
                  <div>
                    <label>Title </label>
                    <input
                      name="day"
                      placeholder="Day/Night "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Price </label>
                    <input
                      name="price"
                      placeholder="Price Person "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Price Twin Person</label>
                    <input
                      name="price"
                      placeholder="Price Twin Person "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Price Triple Person </label>
                    <input
                      name="price"
                      placeholder="Price Triple Person"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Highest Price </label>
                    <input
                      name="highestPrice"
                      placeholder="Highest Price "
                      type="number"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Lowest Price </label>
                    <input
                      name="lowestPrice"
                      placeholder="Lowest Price "
                      type="number"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Start Price </label>
                    <input
                      name="startPrice"
                      placeholder="Start Price "
                      type="number"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Discount Price </label>
                    <input
                      name="discountPrice"
                      placeholder="Discount Price "
                      type="number"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Date</label>
                    <input
                      name="date"
                      placeholder="Date "
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Address</label>
                    <input
                      name="address"
                      placeholder="Address"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Title </label>
                    <input
                      name="title"
                      placeholder="Title"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Sub Title </label>
                    <input
                      name="subtitle"
                      placeholder="Sub Title "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Hotel Name </label>
                    <input
                      name="name"
                      placeholder="Hotel Name "
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

export default dynamic(() => Promise.resolve(Flight), { ssr: false });
