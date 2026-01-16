import React, { useState } from "react";

const Gallery = () => {
  const images = [
    "/assets/img/gallery/gal-1.jpg",
    "/assets/img/gallery/gal-2.jpg",
    "/assets/img/gallery/gal-3.jpg",
    "/assets/img/gallery/gal-4.jpg",
    "/assets/img/gallery/gal-5.jpg",
    "/assets/img/gallery/gal-6.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main>
      {/* breadcrumb__area-start */}
      <section className="breadcrumb__area box-plr-75">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Gallery
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb__area-end */}

      {/* gallery-area-start */}
      <div className="gallery-area pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="abs-section-title text-center mb-50">
                <h4>Gallery</h4>
              </div>
            </div>
          </div>
          <div className="row g-3">
            {images.map((image, index) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                key={index}
              >
                <div className="gallery-item">
                  <div className="gallery-image w-img">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      loading="lazy"
                      onClick={() => openModal(image)}
                    />
                    <div className="gallery-overlay">
                      <button
                        className="icon-box icon-box-1"
                        onClick={() => openModal(image)}
                      >
                        <i className="fal fa-eye"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* gallery-area-end */}

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img
                  src={selectedImage}
                  alt="Gallery"
                  style={{ maxWidth: "100%", maxHeight: "80vh" }}
                />
              </div>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
                style={{ position: "absolute", top: "10px", right: "10px" }}
              ></button>
            </div>
          </div>
        </div>
      )}
      {selectedImage && (
        <div className="modal-backdrop fade show" onClick={closeModal}></div>
      )}
    </main>
  );
};

export default Gallery;