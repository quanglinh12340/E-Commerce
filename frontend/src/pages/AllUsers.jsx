import SummaryApi from "@/common";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from "@/components/ChangeUserRole";
const AllUsers = () => {
  const [allUser, setAllUser] = useState([]);

  const fetchAllUser = async () => {
    const fetchData = await fetch(SummaryApi.all_user.url, {
      method: SummaryApi.all_user.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();
    console.log("🚀 ~ fetchAllUser ~ dataResponse:", dataResponse);

    if (dataResponse.success) {
      setAllUser(dataResponse.data);
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  return (
    <div className="bg-white pb-4">
      <table className="w-full userTable">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Create Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>{moment(user?.updatedAt).format("lll")}</td>
                <td>
                  <button className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white">
                    <MdModeEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ChangeUserRole />
    </div>
  );
};

export default AllUsers;
