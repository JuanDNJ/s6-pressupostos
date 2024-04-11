import { useSearchParams } from "react-router-dom";

const ViewPressupost = () => {
  const [searchParams] = useSearchParams();

  const web = Boolean(searchParams.get("web"));
  const seo = Boolean(searchParams.get("seo"));
  const ads = Boolean(searchParams.get("ads"));
  const pages = Number(searchParams.get("pages"));
  const languages = Number(searchParams.get("languages"));
  const discount = Boolean(searchParams.get("discount"));

  return (
    <section className="flex flex-col">
      <strong>{web && "Web"}</strong>
      <strong>{seo && "Seo"}</strong>
      <strong>{ads && "Ads"}</strong>
      <strong>{pages && `Num pages: ${pages}`}</strong>
      <strong>{languages && `Num languages: ${languages}`}</strong>
      <strong>{`Discount: ${JSON.stringify(discount)}`}</strong>
    </section>
  );
};

export default ViewPressupost;
