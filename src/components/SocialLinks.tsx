import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

function SocialLinks() {
    return (
        <div className="text-3xl flex gap-4 my-4">
            <a href="https://youtube.com/@ryangarofano" target="_blank">
                <FaYoutube className="hover:text-myred transition-colors" />
            </a>
            <a href="https://github.com/rgarofano" target="_blank">
                <FaGithub className="hover:text-gray-700 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/rgarofano/" target="_blank">
                <FaLinkedin className="hover:text-linkedin transition-colors" />
            </a>
        </div>
    );
}

export default SocialLinks;
