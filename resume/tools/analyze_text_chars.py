#!/usr/bin/env python3
import sys
from pathlib import Path
from collections import Counter
import unicodedata as ud


def describe_char(ch: str) -> str:
    code = ord(ch)
    name = ud.name(ch, "<unnamed>")
    cat = ud.category(ch)
    bid = ud.bidirectional(ch)
    comb = ud.combining(ch)
    east = ud.east_asian_width(ch)
    return f"U+{code:04X}\t{repr(ch)[1:-1]}\t{name}\tcat={cat}\tbidi={bid}\tcomb={comb}\teaw={east}"


def main():
    if len(sys.argv) < 2:
        print("Usage: analyze_text_chars.py <input.txt>")
        sys.exit(1)
    fp = Path(sys.argv[1]).expanduser().resolve()
    if not fp.exists():
        print(f"ERROR: Input text not found: {fp}")
        sys.exit(2)
    text = fp.read_text(encoding="utf-8", errors="replace")

    # Basic stats
    total_chars = len(text)
    unique_chars = sorted(set(text))

    # Frequency
    freq = Counter(text)

    # Report
    lines = []
    lines.append(f"FILE: {fp}")
    lines.append(f"TOTAL_CHARS: {total_chars}")
    lines.append(f"UNIQUE_CHARS: {len(unique_chars)}")
    lines.append("")

    # Show all characters with metadata (full character-by-character walk)
    lines.append("ALL_CHARS_WITH_META:")
    for i, ch in enumerate(text):
        lines.append(f"{i:06d}\t{describe_char(ch)}")
    lines.append("")

    # List all unique characters with counts and metadata
    lines.append("ALL_UNIQUE_CHARS_WITH_COUNTS:")
    for ch in unique_chars:
        if ch == "\n":
            display = "\\n"
        elif ch == "\t":
            display = "\\t"
        elif ch == " ":
            display = "<space>"
        else:
            display = ch
        lines.append(f"{freq[ch]:>7}  {describe_char(ch)}")

    # Detect potentially problematic characters
    suspicious = []
    for ch in unique_chars:
        if ch == "\n" or ch == "\t" or ch == " ":
            continue
        code = ord(ch)
        cat = ud.category(ch)
        # Control or format characters
        if cat.startswith("C") and ch not in ("\n", "\t"):
            suspicious.append((ch, "control/format"))
        # Look-alike characters (common homoglyphs)
        if ch in "‘’‚‛“”„‟‹›«»—–•…·‐‑‒–—―−±×÷΄`´ˆ˜¨¸˝¸ˇ˘˚˙˛˜‘’“”":
            suspicious.append((ch, "punctuation/diacritics variants"))
        # Non-ASCII
        if code > 127:
            suspicious.append((ch, "non-ascii"))
    if suspicious:
        lines.append("")
        lines.append("SUSPICIOUS_CHARS:")
        for ch, why in suspicious:
            lines.append(f"{why}\t{describe_char(ch)}")

    out_path = fp.with_suffix(".analysis.txt")
    out_path.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote analysis to {out_path}")


if __name__ == "__main__":
    main()
