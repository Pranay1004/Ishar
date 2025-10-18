#!/usr/bin/env python3
import sys
from pathlib import Path


def main():
    if len(sys.argv) < 3:
        print("Usage: extract_pdf_text.py <input.pdf> <output.txt>")
        sys.exit(1)
    input_pdf = Path(sys.argv[1]).expanduser().resolve()
    output_txt = Path(sys.argv[2]).expanduser().resolve()

    try:
        from pypdf import PdfReader
    except Exception as e:
        print("ERROR: pypdf is required. Install with 'pip install pypdf'.")
        print(f"Detail: {e}")
        sys.exit(2)

    if not input_pdf.exists():
        print(f"ERROR: Input PDF not found: {input_pdf}")
        sys.exit(3)

    reader = PdfReader(str(input_pdf))
    texts = []
    for i, page in enumerate(reader.pages):
        try:
            page_text = page.extract_text() or ""
        except Exception as e:
            page_text = f"\n[WARN] Failed to extract page {i+1}: {e}\n"
        texts.append(page_text)
    full_text = "\n\n".join(texts)

    output_txt.parent.mkdir(parents=True, exist_ok=True)
    output_txt.write_text(full_text, encoding="utf-8")
    print(f"Wrote text to {output_txt}")


if __name__ == "__main__":
    main()
