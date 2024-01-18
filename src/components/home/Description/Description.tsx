import Image from "next/image";
const DATA_URL =
  "data:image/webp;base64,UklGRrIEAABXRUJQVlA4WAoAAAAgAAAAagAAagAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggxAIAAHAWAJ0BKmsAawA+MRaIQyIhIRTpnrQgAwSyn4pRa6kBby4Qp7+4wt7uX57f+4SS5a9WEHyRitHWJe5DdSHGqjOq0MboDUw0ejoGF6uyMI67oE6vouuAXDrK/kW0SFgptPtCFWZLN83fTl2XSij597FEx1r0BJkn+NGdA3JQrKW/ULVo2sZtq1Hx5kwrKg+4EDG2ti+4h5EkIXYE5oFHhONLmND8KqddKzbOHqkGoZ3GXBZanxu+y3bGjAH4AP7/PsnnW78uYeu5/GdkMrM20r3YWOT//6HcZGs57bwIKqsE0Q5qFFZ9QhBW9u4c6y5+zfO4A6fiPnBf9SuYiLIcoKghLtoqECYMMbR3vv/8S8T+7VybGejwt0FK6yY+Tb/2Zf/8S3z+7VyVJ6pxbz7lSm6+iPogm/uwmsY1Z9QcLhrnIUqxM+NB/vv9TL3YfN8//Vori/CcAgB/8dhhdCzFVSvnz14E6q6FAo0z4dMMAy7bNUclWhz45X58C+LfJx0750zBQgHWWnVdoXcF3IobFtsDzb8JoC+LpQJ8rC2f5I+YZYX2G1zGVtFrPqhW3AFkLTXGN919G1opXP6XgCEu5FHBXAbWErXr7i0pni4xiHhL7nhYgYYdx4jakY0xMIG0BBbY7+GpX8/0GBl7TUEg6CqjeltC2qH7z8JNaFsE39I/b+AVZAUz9z6FWAP64BBSYxF+/xAMt19mI0V16BzPDAOEImn35J1NCo4o4l18D5PRVIUbd0TE0gC+LbfoKgGw/+76yjKdN1Bn5D5XXEkk7lsnJ0JCwj1jgTszUs8Q2hRfwCitGD9EpQ0t3q6Qwk8y/DQrtZi5vjKPrABy9zD2ioKdPZoLryh5+mxdNoSDVRvIqFPxkuk0ZUlmqQcaADrGWjCqSG2bUgkCnX2jOoDw9NDrOWlnklYONK9wxC5IXpT4AAAAAA==";
export function Description() {
  return (
    <section className='flex rounded-sm w-[100%]'>
      <div className=" w-30 h-50 mr-8">
        <Image
          width={300}
          height={400}
          priority={false}
          quality={10}
          placeholder="blur"
          blurDataURL={DATA_URL}
          src='/images/description.jpeg'
          alt='product marketplace'
          className='object-cover rounded-3xl ml-4 mr-10 shadow-lg shadow-cyan-500/50 '
        />
      </div>

      <div className='flex flex-col ml-4'>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
}
