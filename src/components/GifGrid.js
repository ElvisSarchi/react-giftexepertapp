import GifGridComponent from "./GifGridComponent";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((i) => {
          return <GifGridComponent key={i.id} {...i} />;
        })}
      </div>
    </>
  );
};


export default GifGrid;
