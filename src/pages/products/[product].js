import { useRouter } from "next/router";

const ProductId = () => {
  const router = useRouter();
  const { product } = router.query;

  return (
    <div>
      <h1>This is dynamic product id: {product}</h1>
    </div>
  );
};

export default ProductId;
