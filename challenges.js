function matchingStrings(stringList, queries) {
    // Write your code here
    const result = [];
    for(let i = 0; i < queries.length; i++) {
        let counter = 0;
        for(let j = 0; j < stringList.length; j++) {
            if(stringList[j] === queries[i]) {
                counter += 1;
            }
        }
        result.push(counter);
    }
    return result
}
