import { NextRequest, NextResponse } from 'next/server';
import { parsePDF } from '@/utils/pdfParser';
import { generateHTML } from '@/utils/htmlGenerator';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        if (file.size > 100 * 1024 * 1024) {
            return NextResponse.json(
                { error: 'File exceeds 100MB limit' },
                { status: 400 }
            );
        }

        const buffer = await file.arrayBuffer();
        const { pages, fonts, totalPages } = await parsePDF(Buffer.from(buffer));

        if (pages.length === 0) {
            return NextResponse.json(
                { error: 'No text content found in PDF' },
                { status: 400 }
            );
        }

        const { html, css, text } = generateHTML(pages);

        return NextResponse.json({
            html,
            css,
            text,
            metadata: {
                pageCount: totalPages,
                fonts,
            },
        });
    } catch (error) {
        console.error('Conversion error:', error);
        return NextResponse.json(
            { error: 'Conversion failed', details: String(error) },
            { status: 500 }
        );
    }
}