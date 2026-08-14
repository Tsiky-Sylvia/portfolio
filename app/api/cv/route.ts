import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import CV from "@/components/CV";
import { createElement, ReactElement } from "react";
import { DocumentProps } from "@react-pdf/renderer";

export async function GET() {
  try {
    const element = createElement(CV) as ReactElement<DocumentProps>;
    const buffer = await renderToBuffer(element);

    return new Response(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CV_Tsiky_Sylvia.pdf"',
      },
    });
  } catch (error) {
    console.error("Erreur génération CV:", error);
    return NextResponse.json(
      { error: "Erreur lors de la génération du CV." },
      { status: 500 }
    );
  }
}