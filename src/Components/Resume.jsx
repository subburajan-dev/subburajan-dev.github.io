import { useState,useEffect } from "react";
import { Document, Page , pdfjs } from "react-pdf"
import {Button, Container} from "react-bootstrap"
import resume_pdf from "../Assets/Resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = (props) => {
    // const pdfUrl= "#";
    const [width, setWidth] = useState(1200);
    const pdflink= resume_pdf;
    const debug=()=>{
        console.log(pdflink)
    }
    useEffect(() => {
    setWidth(window.innerWidth);
    }, []);


    // const pdffile=()=>{
    //     fetch((req,res)=>{

    //     }
    // }

    return <Container>
        <Document file={pdflink}  className="d-flex justify-content-center">
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
        <Button href={pdflink} onClick={debug()}>download button</Button>
    </Container>
}

export default Resume;