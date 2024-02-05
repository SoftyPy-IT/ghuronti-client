import styling from "../../profile.module.css";
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText";
import styles from "../manage.module.css";
import { CloudUpload } from "@mui/icons-material";
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout";
import TextEditor from "../../../../../components/TextEditor/TextEditor";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useRef } from "react";

const BenefitUmrah = ( ) => {
  
  const [value, setValue] = useState("");
  const [title, setTitle] = useState(null);
  const [subTitle, setSubTitle] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleUmrahFAQData = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      sub_title: subTitle,
      questions: questions,
      description: value,
      category:"Umrah FAQ"
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/umrah/details", data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.message === "Successfully post umrah details.") {
          toast.success("Post successful.");
          formRef.current.reset();
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Successfully post umrah details.")
        ) {
          toast.error("Please fill all the field.");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <B2BdashboardLayout>
      <MoveText />
      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Umrah FAQ Data Input{" "}
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleUmrahFAQData}>
                <div className={styles.formControl}>
                  <div>
                    <label>Title </label>
                    <input
                     onChange={(e)=>setTitle(e.target.value)}
                      name="category"
                      placeholder="Title"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Sub Title</label>
                    <input
                     onChange={(e)=>setSubTitle(e.target.value)}
                      name="Sub title"
                      placeholder="Sub title"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Questions </label>
                    <input
                    onChange={(e)=>setQuestions(e.target.value)}
                      name="category"
                      placeholder="Questions"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Answer </label>
                    <div>
                      <ReactQuill
                        value={value}
                        onChange={setValue}
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
                </div>

                <div className={styles.formControl}>
                  <button disabled={loading ? true : false} className={styles.submitBtn} type="submit">
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

export default dynamic(() => Promise.resolve(BenefitUmrah), { ssr: false });
