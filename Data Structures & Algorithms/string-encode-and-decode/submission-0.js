class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encArr=[]

        for(let word of strs){
            const encWord= btoa(word)
            encArr.push(encWord)

        }
        return JSON.stringify(encArr);
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        str= JSON.parse(str)
        let decArr=[]

        for(let word of str){
            const encWord= atob(word)
            decArr.push(encWord)

        }
        return decArr;

    }
}
