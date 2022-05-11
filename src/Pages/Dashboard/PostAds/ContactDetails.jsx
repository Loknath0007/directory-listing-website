import React from "react";

const ContactDetails = () => {
  return (
    <div className="my-3">
      <div className="fw-bold">Contact details</div>
      <div className=" my-3">
        <div className="text-muted">Name</div>
        {/* <h6>Mosharrof Hosen Munna</h6> */}
        <input type="text" defaultValue={"Mosharrof Hosen Munna"} />
      </div>
      <div className=" my-3">
        <div className="text-muted">Email</div>
        {/* <h6>mosharrofmunna0@gmail.com</h6> */}
        <input type="text" defaultValue={"mosharrofmunna0@gmail.com"} />
      </div>
      <div className=" my-3">
        <div className="text-muted">Add phone no</div>
        <input type="text" />
      </div>
    </div>
  );
};

export default ContactDetails;
