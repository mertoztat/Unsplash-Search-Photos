import { useState, useEffect } from "react";
import axios from "axios";
import ImageCards from "./components/ImageCards";
import ImageSearch from "./components/ImageSearch";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const axiosData = async () => {
      const { data } = await axios(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      );
      setImages(data.hits);
      setIsLoading(false);
    };
    axiosData();
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl mx-auto text-center text-gray-600 mt-32">
          No Images Found, Please try again.
        </h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl mx-auto text-center text-gray-600 mt-32">
          Loading..
        </h1>
      ) : (
        <div className="inline-flex flex-wrap justify-around m-6">
          {images.map((image) => (
            <ImageCards key={image.id} image={image} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
