class Anagram {
    constructor(word) {
        this.checkWord = word;
        this.word = word.toLowerCase().split('').sort();
    }

    matches(matchArray) {
        var args = (typeof(matchArray) !== 'object') ? [...arguments] : matchArray;

        let matchArrayCopy = args.slice();
        let result = [];

        for (let i = 0; i < matchArrayCopy.length; i++) {
            let element = matchArrayCopy[i].toLowerCase().split('').sort();

            let strElement = element.join('')
            let ordenateWord = this.word.join('');

            if (strElement == ordenateWord) {
                result.push(args[i]);
            }
        }

        if (result.length == 1 && result[0].toLowerCase() == this.checkWord)
            return [];

        return result;
    }
}

export default Anagram;