import { notification } from "antd";
import axios from "axios";

export const errorHandler = (error: any) => {
  if (axios.isAxiosError(error)) {
    const err = error.response;

    if (Array.isArray(err?.data.errors)) {
      for (let val of err?.data.errors) {
        notification.warning({
          message: val.description,
          closable: true,
        });
      }
    } else if (typeof err?.data.errors === "object") {
      for (let e in err?.data.errors) {
        notification.warning({
          message: err.data.errors[e][0],
          closable: true,
        });
      }
    } else if (err?.data) {
      notification.warning({
        message: err?.data,
      });
    } else if (err?.status === 401) {
      notification.warning({
        message: "Please Login !",
        closable: true,
      });
      window.history.pushState({}, "LoginPage", "/login");
    } else if (err) {
      notification.warning({
        message: err.data,
        closable: true,
      });
    }
  }
};
