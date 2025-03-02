/* eslint-disable @typescript-eslint/no-explicit-any */
const uploadImage = async (image: any) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "portflo");
  data.append("cloud_name", "da02dbjrc");
  // data.append("folder", "Cloudinary-React");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/da02dbjrc/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const res = await response.json();
    return res.secure_url;
  } catch (error: any) {
    console.log(error);
  }
};

export default uploadImage;
