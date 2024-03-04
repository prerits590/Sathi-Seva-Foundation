import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function ToastComponent() {
  const [isLoading, setIsLoading] = useState(false);

  // const handlePromiseNotify = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     console.log({ response });
  //     toast.success("Successfully get data");
  //   } catch (error) {
  //     toast.error("Error occurs in data");
  //   } finally {
  //     // Use a delay to allow the user to see the toast
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000); // Adjust the delay as needed
  //   }
  // };

  return (
    <>
      {/* <div className="row m-0 justify-content-center">
        <div className="col-md-10 mb-5">
          <div className="form-area">
            <div className="form-inner">
              <div className="d-flex pt-5 align-items-center justify-content-between">
                <button
                  onClick={handlePromiseNotify}
                  className="btn btn-sm btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Promise"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
 
    </>
  );
}

export default ToastComponent;
