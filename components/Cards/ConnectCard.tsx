import Input from "@/util/Input";
import { isEmpty, isValidEmail } from "@/util/validation";
import React, { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import emailjs from "@emailjs/browser";

export default function ConnectCard() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [showModal, setShowModal] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID!
        )
        .then(
          (result) => {
            console.log("Email sent successfully: ", result.text);
          },
          (error) => {
            console.log("Failed to send email: ", error.text);
          }
        );
    } else {
      console.log("Form reference is undefined!");
    }

    const name = nameRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";
    const message = messageRef.current?.value.trim() || "";

    if (isEmpty(name)) {
      return;
    }

    if (!isValidEmail(email)) {
      return;
    }

    if (isEmpty(message)) {
      return;
    }

    setShowModal(true);

    console.log(name, email, message);

    if (nameRef.current && emailRef.current && messageRef.current) {
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  }

  const cssClasses =
    "w-full pl-2 pb-1 bg-transparent border-b border-b-black focus:outline-none";

  return (
    <div className="flex-grow w-full max-w-md p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 text-[#037667]">Connect</h3>
      <form
        ref={formRef}
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Name"
          ref={nameRef}
          name="from_name"
          className={cssClasses}
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="from_email"
          ref={emailRef}
          className={cssClasses}
        />
        <Input
          type="text"
          placeholder="Message"
          name="message"
          ref={messageRef}
          className={cssClasses}
        />
        <button className="py-2 px-4 bg-[#037667] text-white rounded-md hover:bg-green-800 transition-colors duration-200">
          Send Message
        </button>
      </form>
      {showModal && (
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <p className="font-mont">Your message has been successfully sent!</p>
        </Modal>
      )}
    </div>
  );
}
