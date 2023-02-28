import { toast } from "react-toastify";

const handleSuccessResponse = (response) => {
  const messages = response.data.messages;
  for (const message of messages) {
    toast.dismiss();
    toast.success(message);
  }
}

const handleErrorResponse = (error) => {
  try {
    const messages = error.response.data.messages;
    toast.dismiss();
    for (const message of messages) {
      toast.error(message);
    }
  }
  catch {
    console.log(error);
  }
}

export {
  handleSuccessResponse,
  handleErrorResponse
}
