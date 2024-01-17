import { Link } from "@mui/material";
import { FaSquareGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

const GitFooter = () => {
  return (
    <div
      className="footer--container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaRegCopyright style={{ fontSize: "12px", color: "#5c5c5c" }} />
        <p style={{ color: "#5c5c5c", marginLeft: "5px" }}>
          2023 ReactDash -
          <Link
            href={"https://github.com/jatinrathore"}
            style={{ color: "#5c5c5c", textDecoration: "none" }}
            target="_blank"
          >
            - @jatinrathore
          </Link>
        </p>
      </div>
      <Link href="https://github.com/jatinrathore" target="_blank">
        <FaSquareGithub size="30px" color="black" />
      </Link>
    </div>
  );
};

export default GitFooter;
