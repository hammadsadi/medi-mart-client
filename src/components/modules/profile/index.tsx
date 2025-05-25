import React from "react";
import Image from "next/image";
import ProfileUpdateModal from "./ProfileUpdateModal";
import { TLoggedInUser } from "@/types/user.types";

const ManageProfile = ({ userInfo }: { userInfo: TLoggedInUser }) => {
  return (
    <div className="max-w-3xl mx-auto mt-16 rounded-2xl shadow-lg bg-white">
      {/* Cover */}
      <div className="h-36 w-full overflow-hidden rounded-t-2xl">
        <Image
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800"
          alt="Cover"
          width={800}
          height={200}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Avatar */}
      <div className="relative -mt-16 flex justify-center">
        <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden shadow-md">
          <Image
            src={
              userInfo?.image ||
              "https://res.cloudinary.com/djlpoyqau/image/upload/v1741195711/clinets-profile_gwta7f.png"
            }
            alt={userInfo?.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name & Role */}
      <div className="text-center mt-4 px-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {userInfo?.name}
        </h2>
        <p className="text-sm text-muted-foreground capitalize">
          {userInfo?.role}
        </p>
      </div>

      {/* Edit Profile Button */}
      <div className="mt-4 flex justify-center">
        <ProfileUpdateModal userInfo={userInfo} />
      </div>

      {/* Stats */}
      <div className="mt-6 flex justify-around text-center border-t border-b py-4 text-sm text-gray-700">
        <div>
          <div className="text-primary font-semibold text-lg">2k</div>
          <div className="text-muted-foreground">Stars</div>
        </div>
        <div>
          <div className="text-primary font-semibold text-lg">10k</div>
          <div className="text-muted-foreground">Followers</div>
        </div>
        <div>
          <div className="text-primary font-semibold text-lg">15</div>
          <div className="text-muted-foreground">Projects</div>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-6 py-6">
        <div className="space-y-4 text-sm text-gray-700">
          <div className="grid sm:grid-cols-3 gap-1">
            <dt className="font-medium text-gray-900">Email</dt>
            <dd className="sm:col-span-2">{userInfo?.email}</dd>
          </div>

          <div className="grid sm:grid-cols-3 gap-1">
            <dt className="font-medium text-gray-900">Phone</dt>
            <dd className="sm:col-span-2">{userInfo?.phone}</dd>
          </div>

          <div className="grid sm:grid-cols-3 gap-1">
            <dt className="font-medium text-gray-900">City</dt>
            <dd className="sm:col-span-2">{userInfo?.city || "Not Set"}</dd>
          </div>

          <div className="grid sm:grid-cols-3 gap-1">
            <dt className="font-medium text-gray-900">Home Town</dt>
            <dd className="sm:col-span-2">{userInfo?.address || "Not Set"}</dd>
          </div>

          <div className="grid sm:grid-cols-3 gap-1">
            <dt className="font-medium text-gray-900">Account Status</dt>
            <dd className="sm:col-span-2 capitalize">
              {userInfo?.status || "Unknown"}
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
