export default function MedicalMapNotFound() {
  return null;
}

export async function getServerSideProps() {
  return { notFound: true };
}


