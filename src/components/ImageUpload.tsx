"use client";

export default function ImageUpload() {
  const openUploadWidget = () => {
    // @ts-ignore
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dk8syjt2z",      
        uploadPreset: "gostudy_unsigned",
        folder: "gostudy",
        multiple: false,
      },
      (error: any, result: any) => {
        if (!error && result.event === "success") {
          console.log("Uploaded Image URL:", result.info.secure_url);
          alert("Upload Successful!");
        }
      }
    );
  };

  return (
    <button
      onClick={openUploadWidget}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Upload Image
    </button>
  );
}
