import React from 'react';

const ReportModal = () => {
  return (
    <div
      className="modal fade"
      id="reportModal"
      tabIndex="-1"
      aria-labelledby="reportModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="reportModalLabel">
              Report Ad
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              id="formAccountSettings"
              method="POST"
              onsubmit="return false"
            >
              <div className="row">
                <div className="mb-3 col-12">
                  <label className="form-label" htmlFor="reason">
                    Reason
                  </label>
                  <select id="reason" className="select2 form-select">
                    <option value="">Select</option>
                    <option value="fraud">Fraud</option>
                    <option value="spam">Spam</option>
                    <option value="duplicate">Duplicate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-3 col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div className="mt-2">
                <button type="submit" className="btn btn-primary me-2">
                  Submit
                </button>
                <button
                  type="reset"
                  data-bs-dismiss="modal"
                  className="btn btn-outline-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
