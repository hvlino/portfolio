import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/HenriqueLinoResume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { TfiDownload } from "react-icons/tfi";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeNew() {
  return (
    <>
      <Container fluid className="resume-container text-center">

        <Particle />
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <TfiDownload />
            &nbsp;Download my Resume
          </Button>

          <Document file={pdf} className="resume-pdf d-flex justify-content-center">
            <Page pageNumber={1} scale={1.4} />
          </Document>

      </Container>

    </>
  );
}

export default ResumeNew;
