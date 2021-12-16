// import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";

export default function PostBody({ content }) {
  return (
    <>
      <div className="content">
        <BlockContent blocks={content} className="" />
      </div>
      <style jsx>{`
        .content {
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }
        @media screen and (min-width: 640px) {
        }
      `}</style>
    </>
  );
}
