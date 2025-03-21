import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function InputImagePreview({ image, onChange }) {
  const [previewImage, setPreviewImage] = useState(image);

  const onInputChange = (e) => {
    const image = e.target.files[0];
    setPreviewImage(URL.createObjectURL(image));
    onChange(image);
  };
  return (
    <div className="flex items-center gap-2">
      <Input type="file" onChange={onInputChange} />
      {previewImage ? (
        <img
          src={previewImage}
          className="aspect-square size-12 rounded-md bg-accent"
        />
      ) : (
        <div className="h-12 w-14 rounded-md bg-gray-300"></div>
      )}
    </div>
  );
}
