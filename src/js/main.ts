import * as $ from "jquery";
import "bootstrap";

$().ready(function() {
    let words: Array<string> = ['Hello', 'World'];
    for (let word of words) {
        console.log(word);
    }
});
