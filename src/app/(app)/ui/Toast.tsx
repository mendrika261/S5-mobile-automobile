import {ToastContainer} from "react-toastify";

export default function Toast() {
    return (
        <ToastContainer
            style={{zIndex: 100000000}}
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    )
}