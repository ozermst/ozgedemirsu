export default function SectionSeparator() {
  return (
    <>
      <hr className="seperator" />
      <style jsx>{`
        .seperator {
          margin-top: 7rem;
          margin-bottom: 6rem;
        }
        @media screen and (min-width: 640px) {
        }
      `}</style>
    </>
  );
}
