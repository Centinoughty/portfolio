import Tag from "@/util/Tag";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function ContactCard() {
  return (
    <div className="flex-grow w-full max-w-md p-3 md:p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 text-[#037667]">
        Contact Information
      </h3>
      <Tag
        icon={<FaMapMarkerAlt className="text-red-500" />}
        children={
          <a href="https://www.google.com/maps/place/Kottayam" target="_blank">
            Kottayam, Kerala
          </a>
        }
      />
      <Tag
        icon={<FaPhoneAlt className="text-blue-500" />}
        children={<a href="tel:+918590806187">+91 8590806187</a>}
      />
      <Tag
        icon={<FaMessage className="text-green-600" />}
        children={
          <a href="mailto:nadeemvadasseril@gmail.com">
            nadeemvadasseril@gmail.com
          </a>
        }
      />
    </div>
  );
}
