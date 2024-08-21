import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";

const Contact = () => {
  return (
    <>
        <Meta title="Contact Us" />
        <BreadCrumb title="Contact Us" />
        <div className="contact-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.269222021801!2d90.35420287607367!3d23.773425578654766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c144b7110de7%3A0xf36f6a3eacef9a85!2sAdabor%2010!5e0!3m2!1sen!2sbd!4v1720106403263!5m2!1sen!2sbd" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="col-12 mt-5">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                  <div>
                    <h3 className="contact-title mb-4">Contact</h3>
                    <form action="" className="d-flex flex-column gap-15">
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div>
                          <textarea
                            name=""
                            id=""
                            className="form-control w-100"
                            cols="30"
                            rows="4"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div>
                          <button className="button">Submit</button>
                        </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title mb-4">Get in touch with us</h3>
                    <div>
                      <ul className="ps-0">
                        <li className="mb-3 d-flex gap-15 align-item-center">
                          <FaHome className="fs-5"/>
                          <address className="mb-0">Hno:726/15, Adabor-10, Mohammadpur, Dhaka</address>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-item-center">
                          <IoCall className="fs-5"/>
                          <a href="tel:+880 1795905178">+880 1795905178</a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-item-center">
                          <IoMdMail className="fs-5"/>
                          <a href="mailto:shuvo83qn@gmail.com">shuvo83qn@gmail.com</a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-item-center">
                          <FaInfoCircle className="fs-5"/>
                          <p className="mb-0">Monday - Friday, 10Am-8PM</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Contact;