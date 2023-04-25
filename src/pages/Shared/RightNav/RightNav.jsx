import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <div>
        <h4 className="mt-4">Login With</h4>
        <Button className="mb-2 w-100" variant="outline-primary">
          {" "}
          <FaGoogle /> Login with Google
        </Button>{" "}
        <Button className="w-100" variant="outline-secondary">
          <FaGithub />
          Login with Github
        </Button>{" "}
      </div>
      <div>
        <h1 className=" mt-4">Find Us On</h1>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className=" position-relative">
        <img src={bg} alt="" className=" img-fluid w-100" />
        <div className=" position-absolute top-0 text-white p-4">
          <h5>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, debitis. Incidunt accusantium beatae, assumenda ducimus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos iste, eaque mollitia distinctio praesentium fuga recusandae expedita! Laudantium, illum.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
