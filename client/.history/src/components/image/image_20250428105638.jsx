
import { IKImage } from "imagekitio-react";

const Image = ({ path, alt, className, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      path={path}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
      className={className}
      alt={alt}
      
    />
  );
};

export default Image;
