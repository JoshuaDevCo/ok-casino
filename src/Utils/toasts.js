import { toast } from 'react-toastify';

const properties = {
    position: "top-left",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark"
}

export const notifyWarn = (msg) => {
    toast.warn(msg, properties)
}

export const notifyInfo = (msg) => {
    toast.info(msg, properties)
}

export const notifySuccees = (msg) => {
    toast.success(msg, properties)
}

export const notifyError = (msg) => {
    toast.error(msg, properties)
}