import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";
import "./RightNav.css";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>

      <br />
      <Button variant="outline-secondary">
        <FaGithub></FaGithub>Login with github
      </Button>

      <div>
        <h4 className="mt-2">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook>Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter>Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="back-image">
        <img src={bg} alt="" />
        <div className="bg-text">
          <h4>create an amazing Newspaper</h4>
          <p>
            Discover thousandes of options , easy to customize layouts,
            oneclicks to import demo and much more
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
