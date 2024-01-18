import Image from "next/image";

interface Products {

}

const getProducts = async() => {

  try {
    const products = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
      {
        headers: { "X-Shopify-Access-Token": `${process.env.SHOPIFY_API_KEY}` },
      }
    );

    const data = await products.json();
    return data.products;

  } catch (error) {
    console.error(error)
  }
}

export async function MainProducts() {
  
  const products = await getProducts();
  return (
    <section>
      <h3>New Products Released!</h3>
      <div>
        {products?.map((product) => (
          <article key={product.id}>
            <p>{product.title }</p>
          <Image width= {120} height={120} src={product.image.src} alt={product.title} />
          </article>
        ))}
      </div>
    </section>
  )
}
