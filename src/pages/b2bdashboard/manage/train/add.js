import styling from "../../profile.module.css"
import dynamic from "next/dynamic"
import MoveText from "../../../../../components/UserDashBoard/MoveText/MoveText"
import styles from "../manage.module.css"
import { CloudUpload } from "@mui/icons-material"
import B2BdashboardLayout from "../../../../../components/Layout/B2BdashboardLayout/B2BdashboardLayout"
import TextEditor from "../../../../../components/TextEditor/TextEditor"
import React, { useState, useEffect } from "react"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"
import toast from "react-hot-toast"
import axios from "axios"
import { useRef } from "react"
import { useRouter } from "next/router"
const Train = () => {
  const [editorValue, setEditorValue] = useState("")
  const [quill, setQuill] = useState(null)
  const [getFile, setGetFile] = useState({})
  const [getImage, setGetImage] = useState([])
  const [value, setValue] = useState("")
  const [travelFrom, setTravelFrom] = useState(null)
  const [travelTo, setTravelTo] = useState(null)
  const [trainName, setTrainName] = useState(null)
  const [title, setTitle] = useState(null)
  // const [subTitle, setSubTitle] = useState(null);
  const [countryName, setCountryName] = useState(null)
  const [cityName, setCityName] = useState(null)
  const [classType, setClassType] = useState(null)
  const [journeyDate, setJourneyDate] = useState(null)
  const [seatType, setSeatType] = useState(null)
  const [departureTime, setDepartureTime] = useState(null)
  const [arrivalTime, setArrivalTime] = useState(null)
  const [price, setPrice] = useState()
  const [startingPoint, setStartingPoint] = useState(null)
  const [endPoint, setEndPoint] = useState(null)

  const [loading, setLoading] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  const formRef = useRef()
  const router = useRouter()

  let files
  const handlePdf = async (e) => {
    setGetFile(e.target.files)
    try {
      files = e.target.files
      const formData = new FormData()
      for (let i = 0; i < files.length; i++) {
        formData.append("pdfFiles", files[i])
      }
      setImageLoading(true)
      const response = await fetch("http://localhost:5000/api/v1/uploads/pdf", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      if (data.message === "success") {
        console.log(data.imageLinks)
        setGetImage(data.imageLinks)
        setImageLoading(false)
      }
      if (data.error === "Something went wrong") {
        toast.error("Something went wrong")
        setImageLoading(false)
        setGetImage([])
        setGetFile({})
      }
    } catch (error) {
      toast.error("Something went wrong")
      setImageLoading(false)
      setGetImage([])
      setGetFile({})
    }
  }

  const handleTrainData = (e) => {
    e.preventDefault()
    const data = {
      travel_from: travelFrom,
      travel_to: travelTo,
      train_name: trainName,
      title: title,
      country_name: countryName,
      city_name: cityName,
      class_type: classType,
      journey_date: journeyDate,
      seat_type: seatType,
      departure_time: departureTime,
      arrival_time: arrivalTime,
      price: price,
      starting_point: startingPoint,
      end_point: endPoint,
      image: getImage,
      description: value,
    }

    setLoading(true)
    axios
      .post("http://localhost:5000/api/v1/train/details", data)
      .then(function (response) {
        console.log(response.data)
        if (response.data.message === "Successfully post train details.") {
          toast.success("Post successful.")
          formRef.current.reset()
          router.push("/b2bdashboard/manage/train")
        }
        if (
          (response.data =
            "Internal server error" &&
            response.data.message !== "Successfully post train details.")
        ) {
          toast.error("Please fill all the field.")
        }
      })
      .catch((error) => {
        toast.error(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <B2BdashboardLayout>
      <MoveText />

      <div className="mt-5">
        <div className={styling.profileTop}>
          <div className={styling.flightHistory}>
            <h2 className="text-3xl font-bold text-center">
              Train Data Input{" "}
            </h2>
            <div className="w-full mx-auto">
              <form ref={formRef} onSubmit={handleTrainData}>
                <div className={styles.formControl}>
                  <div>
                    <label>Travel From City </label>
                    <input
                      onChange={(e) => setTravelFrom(e.target.value)}
                      name="travelFromCity"
                      placeholder="Travel From City"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Travel To City </label>
                    <input
                      onChange={(e) => setTravelTo(e.target.value)}
                      name="travelToCity"
                      placeholder="Travel To City"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Train Name </label>
                    <input
                      onChange={(e) => setTrainName(e.target.value)}
                      name="name"
                      placeholder="Train Name"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label> Title </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      name="title"
                      placeholder="Title"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label> Enter Country </label>
                    <select
                      onChange={(e) => setCountryName(e.target.value)}
                      className={styles.inputField}
                    >
                      <option selected value="Bangladesh">
                        Select your country
                      </option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="India">India</option>
                      <option value="China">China</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Iran">Iran</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Japan">Japan</option>
                    </select>
                  </div>
                  <div>
                    <label> Enter City </label>
                    <select
                      onChange={(e) => setCityName(e.target.value)}
                      className={styles.inputField}
                    >
                      <option selected value="Dhaka">
                        Select your city
                      </option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Bangkok">Bangkok</option>
                      <option value="Tokyo">Tokyo</option>
                      <option value="Kuala Lumpur">Kuala Lumpur</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Beijing">Beijing</option>
                      <option value="Singapore Island">Singapore Island</option>
                      <option value="Iran">Iran</option>
                      <option value="Hanoi">Hanoi</option>
                      <option value="Tehran">Tehran</option>
                      <option value="Islamabad">Islamabad</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label htmlFor="">Choose a class</label>
                    <select
                      onChange={(e) => setClassType(e.target.value)}
                      className={styles.inputField}
                    >
                      <option value="" selected>
                        Select type
                      </option>
                      <option value="AC_B">AC_B</option>
                      <option value="AC">S_CHAIR</option>
                      <option value="NON_AC">S_CHAIR</option>
                      <option value="F_BERTH">F_BERTH</option>
                      <option value="SHULOV">SHULOV</option>
                      <option value="SNIGDHA">SNIGDHA</option>
                      <option value="AC_CHAIR">AC_CHAIR</option>
                    </select>
                  </div>
                  <div>
                    <label> Journey Date </label>
                    <input
                      onChange={(e) => setJourneyDate(e.target.value)}
                      name="jouryDate"
                      placeholder="Journey Date"
                      type="date"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  {/* <div>
                    <label> Seat Type </label>
                    <input
                      onChange={(e) => setSeatType(e.target.value)}
                      name="address"
                      placeholder=" Seat Type "
                      type="text"
                      className={styles.inputField}
                    />
                  </div> */}
                  <div>
                  <label> Seat Type </label>
                    <select
                      onChange={(e) => setClassType(e.target.value)}
                      className={styles.inputField}
                    >
                      <option value="" selected>
                        Select Seat Type 
                      </option>
                      <option value="AC_B">AC_B</option>
                      <option value="AC">S_CHAIR</option>
                      <option value="NON_AC">S_CHAIR</option>
                      <option value="F_BERTH">F_BERTH</option>
                      <option value="SHULOV">SHULOV</option>
                      <option value="SNIGDHA">SNIGDHA</option>
                      <option value="AC_CHAIR">AC_CHAIR</option>
                    </select>
                  </div>

                  <div>
                    <label>Departure Time </label>
                    <input
                      onChange={(e) => setDepartureTime(e.target.value)}
                      name="address"
                      placeholder="Departure Time"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Arrival Time</label>
                    <input
                      onChange={(e) => setArrivalTime(e.target.value)}
                      name="category"
                      placeholder="Arrival Time"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                  <div>
                    <label>Price </label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      name="price"
                      placeholder="Price"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Starting Point </label>
                    <input
                      onChange={(e) => setStartingPoint(e.target.value)}
                      name="category"
                      placeholder="Starting Point"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>

                  <div>
                    <label>End Point</label>
                    <input
                      onChange={(e) => setEndPoint(e.target.value)}
                      name="productCategory"
                      placeholder="End Point "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Boarding Point </label>
                    <input
                      name="boardingPointing"
                      placeholder="Boarding Point "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>

                  <div>
                    <label> Seat </label>
                    <input
                      name="productCategory"
                      placeholder="Seat"
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <div>
                    <label>Coach  </label>
                    <input
                      name="Coach "
                      placeholder="Coach  "
                      type="text"
                      className={styles.inputField}
                    />
                  </div>
                </div>
                {/* <div className={styles.formControl}>
                  <div className={styles.uploadFile}>
                    {imageLoading ? (
                      <div>Uploading...</div>
                    ) : (
                      <>
                        {getFile[0]?.name ? (
                          <label for="files">{getFile[0]?.name}</label>
                        ) : (
                          <label for="files">
                            {" "}
                            <CloudUpload className={styles.uploadIcon} /> Image
                            Upload{" "}
                          </label>
                        )}
                      </>
                    )}

                    <input
                      onChange={handlePdf}
                      name="image"
                      // accept=".jpg/.jpeg/.png"
                      className={styles.inputField}
                      type="file"
                      id="files"
                      class="hidden"
                      multiple
                    />
                  </div>
                </div> */}
                <div className={styles.formControl}>
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

                <div className={styles.formControl}>
                  <button
                    disabled={loading || imageLoading ? true : false}
                    className={
                      loading
                        ? "bg-gray-600 w-full rounded-full text-white/90 py-3 font-semibold text-xl"
                        : `${styles.submitBtn}`
                    }
                    type="submit"
                  >
                    {loading ? "Loading..." : " Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </B2BdashboardLayout>
  )
}

export default dynamic(() => Promise.resolve(Train), { ssr: false })
