import React, { useEffect, useState } from "react";

const MultiImageUpload = ({
    label = "Multiple Image",
    name = "multiple_images",
    required = false,
    cls = "col-md-12 form-group",
}) => {
    const [images, setImages] = useState([]); // stores objects: { file, preview }

    const imageHandler = (event) => {
        const files = Array.from(event.target.files);
        // Map files to { file, previewUrl }
        const newImages = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const removeImage = (index) => {
        setImages((prevImages) => {
            // Revoke URL of removed image to free memory
            URL.revokeObjectURL(prevImages[index].preview);

            return prevImages.filter((_, i) => i !== index);
        });
    };

    // Clean up URLs when component unmounts or images change
    useEffect(() => {
        return () => {
            images.forEach((img) => URL.revokeObjectURL(img.preview));
        };
    }, [images]);

    return (
        <div className={cls}>
            <label>{label}</label>
            <input
                type="file"
                name={`${name}[]`}
                onChange={imageHandler}
                required={required}
                className="form-control"
                multiple
                accept="image/*"
            />

            {images.length > 0 && (
                <div className="d-flex flex-wrap gap-2 mt-2">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="position-relative"
                            style={{ width: 100, height: 100 }}
                        >
                            <img
                                src={img.preview}
                                alt={`preview-${index}`}
                                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 4, border: "1px solid #ddd" }}
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                style={{
                                    position: "absolute",
                                    top: 2,
                                    right: 2,
                                    background: "rgba(0,0,0,0.6)",
                                    border: "none",
                                    borderRadius: "50%",
                                    color: "white",
                                    width: 22,
                                    height: 22,
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    lineHeight: "20px",
                                    padding: 0,
                                }}
                                title="Remove Image"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiImageUpload;
