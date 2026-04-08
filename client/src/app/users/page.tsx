"use client";
import api from "@/lib/axios/api";
import React, { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  verified: boolean;
};

async function getUsers() {
  const res = await api.get("/user/getAllUsers");

  if (!res) {
    throw new Error("Failed ot fetch users");
  }

  return res.data;
}

const Users = () => {
  const [verifiedUsers, setVerifiedUsers] = useState<User[]>([]);
  const [unVerifiedUsers, setUnVerifiedUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setVerifiedUsers(data.verifiedUsers);
        setUnVerifiedUsers(data.unVerifiedUsers);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading Users...</p>;
  return (
    <div className="p-6 space-y-8">
      {" "}
      {/* ✅ Verified Users */}
      <section>
        <h2 className="text-xl font-bold text-green-600 mb-3">
          Verified Users
        </h2>

        {verifiedUsers.length === 0 ? (
          <p>No verified users</p>
        ) : (
          <ul className="space-y-2">
            {verifiedUsers.map((user) => (
              <li key={user.id} className="border p-3 rounded">
                <p>
                  <b>{user.name}</b>
                </p>
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </section>{" "}
      {/* ❌ Unverified Users */}
      <section>
        <h2 className="text-xl font-bold text-red-600 mb-3">
          Unverified Users
        </h2>

        {unVerifiedUsers.length === 0 ? (
          <p>No unverified users</p>
        ) : (
          <ul className="space-y-2">
            {unVerifiedUsers.map((user) => (
              <li key={user.id} className="border p-3 rounded">
                <p>
                  <b>{user.name}</b>
                </p>
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Users;
