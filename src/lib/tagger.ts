import nlp from "compromise";
import type { Term } from "compromise/types/misc";

export default function tagger(text: string): [string, number] {
    let doc = nlp(text);

    let POS = doc.docs
        .flat()
        .map((term: Term) => [
            term.text,
            Array.from(term.tags)[term.tags.size - 1],
            term.post,
        ]);

    let stopWordTags = ["preposition", "determiner"];

    let output = [];
    let stopWords = [];

    let term: string, tag: string, post: string, isStopWord: boolean;

    const addStopWords = () => {
        let words = stopWords.join("");
        const hasSpace = words.endsWith(" ");

        if (hasSpace) {
            words = words.slice(0, -1);
        }

        output.push(`<b>${words}</b>${hasSpace ? " " : ""}`);
        stopWords.length = 0;
    };

    for (let i = 0; i < POS.length; i++) {
        [term, tag, post] = POS[i];

        isStopWord = stopWordTags.includes(tag.toLowerCase());

        if (isStopWord) {
            stopWords.push(term + post);

            if (i === POS.length - 1) {
                addStopWords();
            }
        } else {
            if (stopWords.length > 0) {
                addStopWords();
            }

            output.push(tag + post);
        }
    }

    return [output.join(""), doc.confidence()];
}
