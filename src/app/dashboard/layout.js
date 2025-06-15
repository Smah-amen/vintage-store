import React from "react";

function DashBoardLayout({ children, notifaction, users }) {
  return (
    <>
      <div> {children}</div>
      <div className="bg-amber-50 p-6 min-h-screen">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-4 mt-6">
          <div className="col-span-1 space-y-6 md:col-span-2 bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <a href="/dashboard/notifaction">{notifaction}</a>
            </div>
            <div>    
            <a href="/dashboard/users"> {users}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardLayout;
