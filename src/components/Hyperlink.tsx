type HyperlinkProps = {
  text: string;
  link: string;
};

function Hyperlink(props: HyperlinkProps) {
  return (
    <a href={props.link} target="_blank">
      <span className="text-blue-500 hover:underline decoration-2">{props.text}</span>
    </a>
  );
}

export default Hyperlink;
