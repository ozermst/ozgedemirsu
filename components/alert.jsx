// import Container from "./container";
import cn from "classnames";
// import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

export default function Alert({ preview }) {
  return (
    <>
      <div
        className={cn({
          preview: preview,
          null: !preview,
        })}
      >
        <div className="container">
          <div className="exitPreviewWrapper">
            {preview ? (
              <>
                This page is a preview.{" "}
                <Link href="/api/exit-preview" passHref>
                  <a className="exitPreview">Click here</a>
                </Link>{" "}
                to exit preview mode.
              </>
            ) : null}
          </div>
        </div>
      </div>
      <style jsx>{`
        .preview {
          border-bottom-width: 1px;
          color: rgb(255 255 255);
          background-color: lightsteelblue;
        }
        .exitPreviewWrapper {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          text-align: center;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        .exitPreview {
          text-decoration: underline;
          transition-duration: 200ms;
          transition-property: background-color, border-color, color, fill,
            stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        .exitPreview:hover {
          text-decoration: underline;
          color: rgb(6 182 212);
        }
        @media screen and (min-width: 640px) {
        }
      `}</style>
    </>
  );
}
