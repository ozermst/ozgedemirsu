import Alert from "../components/alert";
// import Meta from '../components/meta'

export default function BlogLayout({ preview, children }) {
  return (
    <>
      {/* <Meta /> */}
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  );
}
