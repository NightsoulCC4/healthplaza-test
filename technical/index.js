const prefixString = (array) => {
    if (array.length === 0) return "";

    let prefix = array[0].toLowerCase();

    for (let i = 1; i < array.length; i++) {
        while (array[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);

            if (prefix === "") return "";
        }
    }

    return prefix;
}

console.log(prefixString(["flower", "flow", "flight"])); // case 1.
console.log(prefixString(["dog", "racecar", "car"]));    // case 2.