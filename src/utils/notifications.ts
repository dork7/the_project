import { toast } from 'react-toastify';

type Notification = {
    msg: string,
    type: "info" | "success" | "warning" | "error" | "default"
}

// export function notifyMe({ title, msg }: Notification) {
//     if (!("Notification" in window)) {
//         alert("This browser does not support desktop notification");
//     } else if (Notification.permission === "granted") {

//         const notification = new Notification(title, {
//             body: msg
//         });
//         // …
//     } else if (Notification.permission !== "denied") {

//         Notification.requestPermission().then((permission) => {
//             if (permission === "granted") {
//                 const notification = new Notification(msg);
//                 // …
//             }
//         });
//     }
// }

export function notifyMe({ msg, type }: Notification) {
    toast(msg, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        type,

    });
}