#!/usr/bin/env python3
import sys
from pathlib import Path

REPLACEMENTS = {
    "\u2018": "'",  # left single quote
    "\u2019": "'",  # right single quote
    "\u201C": '"',  # left double quote
    "\u201D": '"',  # right double quote
    "\u2013": "-",  # en dash
    "\u2014": "-",  # em dash
    "\u00B6": "",   # pilcrow
    "\u2322": "",   # frown
    "\u2642": "",   # male sign
    "\u25E6": "- ", # white bullet -> dash bullet
}


def clean_text(text: str) -> str:
    for src, dst in REPLACEMENTS.items():
        text = text.replace(src, dst)
    # Normalize whitespace: collapse multiple spaces, tidy spaces before punctuation
    # Keep newlines; replace tabs with 4 spaces
    text = text.replace("\t", "    ")
    # Remove stray spaces before punctuation
    import re
    text = re.sub(r"\s+([,.;:])", r"\1", text)
    # Collapse 3+ spaces into 1 (not across newlines)
    text = re.sub(r"([^\S\r\n]){2,}", " ", text)
    # Remove trailing spaces on lines
    text = re.sub(r"[ \t]+$", "", text, flags=re.MULTILINE)
    return text


def main():
    if len(sys.argv) < 3:
        print("Usage: clean_text.py <input.txt> <output.txt>")
        sys.exit(1)
    input_txt = Path(sys.argv[1]).expanduser().resolve()
    output_txt = Path(sys.argv[2]).expanduser().resolve()
    if not input_txt.exists():
        print(f"ERROR: Input text not found: {input_txt}")
        sys.exit(2)
    raw = input_txt.read_text(encoding="utf-8", errors="replace")
    cleaned = clean_text(raw)
    output_txt.parent.mkdir(parents=True, exist_ok=True)
    output_txt.write_text(cleaned, encoding="utf-8")
    print(f"Wrote cleaned text to {output_txt}")


if __name__ == "__main__":
    main()
