import React from 'react';

const ManageAds = () => {
  return (
    <div class="card my-5">
      <h5 class="card-header">Manage Ads</h5>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Ad</th>
              <th>ID</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody class="table-border-bottom-0">
            {[...Array(10)].map((_, i) => (
              <tr>
                <td>
                  <p>Samsung Galaxy S9</p>
                </td>
                <td>#12345678910</td>
                <td>
                  <span class="badge bg-primary me-1">Active</span>
                </td>
                <td>
                  <div>
                    <button type="button" class="me-2 btn btn-sm btn-primary">
                      Edit
                    </button>
                    <button type="button" class="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAds;
