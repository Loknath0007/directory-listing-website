import React from 'react';

const ReportModal = () => {
  return (
    <div
      class="modal fade"
      id="reportModal"
      tabindex="-1"
      aria-labelledby="reportModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="reportModalLabel">
                Report Ad
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form
              id="formAccountSettings"
              method="POST"
              onsubmit="return false"
            >
              <div class="row">
                <div class="mb-3 col-12">
                  <label class="form-label" for="reason">
                    Reason
                  </label>
                  <select id="reason" class="select2 form-select">
                    <option value="">Select</option>
                    <option value="fraud">Fraud</option>
                    <option value="spam">Spam</option>
                    <option value="duplicate">Duplicate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="mb-3 col-12">
                  <label for="message" class="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    class="form-control"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div class="mt-2">
                <button type="submit" class="btn btn-primary me-2">
                  Submit
                </button>
                <button
                  type="reset"
                  data-bs-dismiss="modal"
                  class="btn btn-outline-secondary"
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
