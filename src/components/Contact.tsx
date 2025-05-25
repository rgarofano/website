import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";

type ContactProps = {
  email: string;
};

function Contact(props: ContactProps) {
  const { email } = props;
  const [copied, setCopied] = useState(false);
  const [showCopy, setShowCopy] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="mt-10 flex flex-col items-center gap-10">
      <h2 className="text-3xl text-center font-bold">Contact Me</h2>
      <div
        className="w-fit flex items-center justify-center rounded-xl hover:cursor-pointer"
        onMouseEnter={() => setShowCopy(true)}
        onMouseLeave={() => setShowCopy(false)}
        onClick={handleCopy}
      >
        <span className="text-xl bg-cream p-2 pl-3 rounded-l-xl">
          {copied ? "copied to clipboard" : email}
        </span>
        {copied && (
          <FaCheck className="bg-mydarkgreen p-2 size-11 rounded-r-xl text-white" />
        )}

        {copied ? null : showCopy ? (
          <MdOutlineContentCopy className="bg-myred p-2 size-11 rounded-r-xl text-white" />
        ) : (
          <IoIosMail className="bg-myred p-2 size-11 rounded-r-xl text-white" />
        )}
      </div>
      <form></form>
    </section>
  );
}

export default Contact;
