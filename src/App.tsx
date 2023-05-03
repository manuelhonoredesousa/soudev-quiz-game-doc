import "./App.css";
import { Button } from "./Components/Button";
import { Link } from "./Components/Link";
import { Input } from "./Components/Form/Input";
import { Heading } from "./Components/Heading";
import { Modal } from "./Components/Modal";
import { useEffect, useState } from "react";
import { Label } from "./Components/Form/Label";
import { Field } from "./Components/Form/Field";
import { Textarea } from "./Components/Form/Textarea";
import { Span } from "./Components/Span";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import sun_img from "./Image/sun-iso-color.png";
import { TXT } from "./Components/TXT";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rooling from "./Assets/rolling_200px.svg";

const ALERTPOPUP_PROPERTIES = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  pauseOnFocusLoss: false,
  draggable: true,
};
const createMessageSchema = z.object({
  fullname: z
    .string()
    .nonempty("Name is required")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(" ");
    }),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid format, eg: quizgame@example.com"),
  message: z
    .string()
    .nonempty("Message is required")
    .min(5, "Must be at least 5 characters"),
});

type CreateMessageDataType = z.infer<typeof createMessageSchema>;

type EmailResponseType = "success" | "error";

function App() {
  const [dialogState, setDialogState] = useState(false);
  const createSendMailForm = useForm<CreateMessageDataType>({ resolver: zodResolver(createMessageSchema)});

  const { VITE_API_URL } = import.meta.env;

  function openDialog() {
    setDialogState(true);
  }
  function closeDialog() {
    setDialogState(false);
  }

  function openDoc() {}

  function showAlertPopUpWaiting() {
    toast("Sending email...", {
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: false,
      closeButton: false,
      icon: () => <img src={rooling} />,
    });
  }
  function showAlertPopUp(type: EmailResponseType) {
    toast.dismiss();
    if (type == "success") {
      toast.success("The email has been sent", ALERTPOPUP_PROPERTIES);
    } else if (type == "error") {
      toast.error("Email was not sent successfully", ALERTPOPUP_PROPERTIES);
    }
  }
  async function sendMail(data: CreateMessageDataType) {
    const { fullname, email, message } = data;
    const API = VITE_API_URL;

    closeDialog();
    showAlertPopUpWaiting();

    const response = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: fullname,
        last_name: "",
        email: email,
        messagem: message,
        subject: "SOUDEV - Quiz Game",
      }),
    }).then((data) => data.json()).catch((e) =>  'error')

    if (response.response == "ok") showAlertPopUp("success");
    if (response.response == undefined) showAlertPopUp("error");
  }

  const {
    handleSubmit,
    formState: { errors },
  } = createSendMailForm;

  return (
    <>
      <div className="flex items-center">
        <div>
          <Heading text="SouDEV - Quiz Game" />

          <TXT />
          <Modal
            dialogState={dialogState}
            setDialogStateFalse={closeDialog}
            title="Anything to tell me?"
          >
            <FormProvider {...createSendMailForm}>
              <form onSubmit={handleSubmit(sendMail)}>
                <Field>
                  <Label text="Full Name:" labelFor="fullname" />
                  <Input type="text" placeholder="Your Name" name="fullname" />
                  {errors.fullname && <Span text={errors.fullname.message} />}
                </Field>

                <Field>
                  <Label text="E-mail:" labelFor="email" />
                  <Input type="email" placeholder="Your E-mail" name="email" />
                  {errors.email && <Span text={errors.email.message} />}
                </Field>

                <Field>
                  <Label text="Message:" labelFor="message" />
                  <Textarea
                    placeholder="Your Suggestion, Criticism or Contribution"
                    name="message"
                  />
                  {errors.message && <Span text={errors.message.message} />}
                </Field>

                <div className="flex flex-row justify-end gap-1 mt-4">
                  <Button
                    text="Send Message"
                    textColor="gray-200"
                    buttonType="primary"
                    type="submit"
                  />
                  <Button
                    text="Close"
                    textColor="gray-200"
                    buttonType="error"
                    type="reset"
                    onClickButton={closeDialog}
                  />
                </div>
              </form>
            </FormProvider>
          </Modal>

          <div className="flex items-center gap-2">
            <Button
              text="Get Started"
              buttonType="primary"
              onClickButton={openDoc}
            />
            <Link text="Feedback" onClickLink={openDialog} />
          </div>
        </div>
        <div className="flex items-center">
          <img src={sun_img} alt="Image of 3D Sun" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
