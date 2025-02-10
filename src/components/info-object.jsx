export function InfoObject() {
  let MobileInfo = {
    id: 3,
    name: "Vacuum Cleaner",
    brand: "Brand C",
    price: 199.99,
    stock: 15,
    specifications: {
      power: "1200W",
      type: "Bagless",
      noiseLevel: "65dB",
    },
    reviews: [
      { user: "Eve", rating: 5, comment: "Cleans thoroughly!" },
      { user: "Frank", rating: 4, comment: "Easy to use and maintain." },
    ],
  };

  return (
    <div id="object">
      <div id="id" className="sdfj">
        Id: {MobileInfo.id}
      </div>
      {/* <div>Name: {MobileInfo.name}</div>
      <div>Brand: {MobileInfo.brand}</div>
      <div>Price: {MobileInfo.price}</div>
      <div>Stock: {MobileInfo.stock}</div> */}

      {/* <div>Power: {MobileInfo.specifications.power}</div>
      <div id>Type: {MobileInfo.specifications.type}</div>
      <div id="type">NoiseLevel: {MobileInfo.specifications.noiseLevel}</div>
      <div>&nbsp;&nbsp;&nbsp;</div> */}
      {/* {MobileInfo.reviews.map(function (item, index) {
        // return (
        //   // <div className="user-container" key={item}>
        //   //   <div className={`user-info-${index}`}>User: {item.user}</div>
        //   //   <div>Rating: {item.rating}</div>
        //   //   <div>Comment: {item.comment}</div>
        //   //   <hr />
        //   // </div>
        // );
      })} */}

      <div>&nbsp;&nbsp;&nbsp;</div>
      {/* <div>User: {MobileInfo.reviews[1].user}</div>
      <div>Rating: {MobileInfo.reviews[1].rating}</div>
      <div>Comment: {MobileInfo.reviews[1].comment}</div> */}
    </div>
  );
}
