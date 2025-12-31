"use client";

export default function ImageUpload() {
  const openUploadWidget = () => {
    // @ts-expect-error - cloudinary is loaded from external script
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dk8syjt2z",      
        uploadPreset: "gostudy_unsigned",
        folder: "gostudy",
        multiple: false,
      },
      (error: Error | null, result: { event: string; info: { secure_url: string } } | null) => {
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
