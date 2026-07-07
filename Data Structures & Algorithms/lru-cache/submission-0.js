class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity= capacity;
        this.cache=new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)){ // if there is no data in cache
            return -1;
        }
        // Move to most recently used (end of Map)
        const value= this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        // Add/Update the key (will be most recent)
        this.cache.set(key, value);
        // If over capacity, remove the least recently used (first item)
        if(this.cache.size>this.capacity){
            const firstKey= this.cache.keys().next().value; // get the first key
            this.cache.delete(firstKey); // dlelete the first key
        }

    }
}
