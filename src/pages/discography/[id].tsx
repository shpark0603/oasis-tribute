import { useRouter } from "next/router";

const DiscographyDetail = () => {
  const router = useRouter();

  return (
    <h1>
      discography Detail page {router.query.id} {router.pathname}
    </h1>
  );
};

export default DiscographyDetail;
