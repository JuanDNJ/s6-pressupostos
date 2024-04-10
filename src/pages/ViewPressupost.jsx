import { useParams } from "react-router-dom";
import { useStore } from "../hooks";
const ViewPressupost = () => {
  const { services, discount } = useStore();
  let params = useParams();
  console.log(params); // "one/two"
  console.log(services);
  console.log(discount);
  const getService = () => {
    const serv = structuredClone(services);
    const newServices = serv.map((rec) => {
      if (rec.id === Number(params.webPage)) {
        if ((Number(params.pages) > 0) & Number(params.languages > 0)) {
          return {
            ...rec,
            pages: Number(params.pages),
            languages: Number(params.languages),
          };
        } else {
          return rec;
        }
      }
      return rec;
    });
    return {
      ads:
        Number(params.ads) &&
        newServices.find((rec) => rec.id === Number(params.ads)),
      webPage:
        Number(params.webPage) &&
        newServices.find((rec) => rec.id === Number(params.webPage)),
      seo:
        Number(params.seo) &&
        newServices.find((rec) => rec.id === Number(params.seo)),
    };
  };
  const { ads, seo, webPage } = getService();
  return (
    <section>
      <ul>
        <div>{ads !== 0 && ads.name}</div>
        <div>{seo !== 0 && seo.name}</div>
        <div>{webPage !== 0 && webPage.name}</div>
      </ul>
      <strong>
        Price:{" "}
        {ads !== 0 && seo !== 0 && webPage !== 0 && ads.price + seo.price + webPage.price}
      </strong>
    </section>
  );
};
//   return (
//     <section className="flex flex-col">
//       {getService() && getService().ads && getService().ads && (
//         <div className="flex flex-col gap-4">{getService().ads.name}</div>
//       )}
//       <strong className="flex flex-col">
//         <small>{params.webPage && `${params.webPage}`}</small>
//         <small>{params.pages && params.pages}</small>
//         <small>{params.languages && params.languages}</small>
//       </strong>
//       <strong>{params.seo && `${params.seo}`}</strong>
//       <strong>{params.ads && `${params.ads}`}</strong>
//     </section>
//   );
export default ViewPressupost;
